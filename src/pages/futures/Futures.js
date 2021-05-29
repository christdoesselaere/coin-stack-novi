import "./Futures.css";
import {useContext, useEffect, useState} from 'react';
import Binance from 'node-binance-api';
import {fKeys, responseTime, enableTestNetwork, toggleServerTime} from '../../helpers/network';
import FutureMark from "../../components/FutureMark";
import loadingIcon from '../../assets/loading.svg';
import {AuthContext} from "../../components/Auth";
import {Redirect} from "react-router-dom";

// noinspection SpellCheckingInspection
const binance = new Binance().options({
    APIKEY: fKeys["APIKEY"],
    APISECRET: fKeys["SECRET"],
    recvWindow: responseTime,
    useServerTime: toggleServerTime,
    test: enableTestNetwork
});

function Futures() {
    const [futures, setFutures] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        toggleLoading(true);

        setInterval(() => {

            async function fetchData() {

                try {
                    const {positions} = await binance.futuresAccount();
                    setFutures(positions.filter(function (e) {
                        // noinspection JSUnresolvedVariable
                        return e.positionAmt > 0
                    }));
                    toggleLoading(false);
                    toggleError(false);
                } catch (err) {
                    console.error(err);
                    toggleLoading(false);
                    toggleError(true);
                }
            }

            // noinspection JSIgnoredPromiseFromCall
            fetchData();
        }, 5000);

    }, []);

    const {currentUser} = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/"/>;
    }
    return (
        <div className="futures-box">
            <div className="futures-box-header">
                <h1>Futures</h1>
                <div className="futures-labels">
                    <p>Symbol <span className="leverage">(Leverage)</span></p>
                    <p>Size</p>
                    <p>Entry</p>
                    <p>Mark</p>
                    <p>PnL</p>
                </div>
            </div>
            {loading && <img src={loadingIcon} alt="loading" id="loading"/>}
            {futures && futures.map((data) => {
                // noinspection JSUnresolvedVariable
                return (
                    <div className="futures-items" key={data.symbol}>
                        <p>{data.symbol} ({data.leverage})</p>
                        <p className="future-grid-item">{data.positionAmt}</p>
                        <p className="future-grid-item">{parseFloat(data.entryPrice).toFixed(2)}</p>
                        <FutureMark symbol={data.symbol}/>
                        {data.unrealizedProfit >= 0 ?
                            <p className="future-grid-item" id="pos">{parseFloat(data.unrealizedProfit).toFixed(2)}</p> :
                            <p className="future-grid-item" id="neg">{parseFloat(data.unrealizedProfit).toFixed(2)}</p>}
                    </div>

                )
            })}
            {error && <p className="error">There was an error loading the list.</p>}
        </div>
    )
}

export default Futures;