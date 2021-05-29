// noinspection DuplicatedCode

import "./Spot.css";
import {useContext, useEffect, useState} from "react";
import Binance from 'node-binance-api';
import {keys, responseTime, baseUrl, combineStreamUrl, streamUrl, toggleServerTime} from '../../helpers/network.js';
import loadingIcon from "../../assets/loading.svg";
import {AuthContext} from "../../components/Auth";
import {Redirect} from "react-router-dom";

// noinspection SpellCheckingInspection
const binance = new Binance().options({
    APIKEY: keys["APIKEY"],
    APISECRET: keys["SECRET"],
    recvWindow: responseTime,
    useServerTime: toggleServerTime,
    urls: {
        base: baseUrl,
        combineStream: combineStreamUrl,
        stream: streamUrl
    }
});

function Spot() {
    const [spot, setSpot] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await binance.balance();
                const objArray = Object.entries(result);
                setSpot(objArray.filter(function (e) {
                    return e[1].available > 0
                }))
                toggleLoading(false);
            } catch (err) {
                console.error(err);
                toggleLoading(false);
                toggleError(true);
            }
        }

        fetchData();
    }, [])

    const {currentUser} = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/"/>;
    }
    return (
        <div className="spot-box">
            <div className="spot-box-header">
                <h1>Fiat & Spot</h1>
                <div className="spot-labels">
                    <p>Assets</p>
                    <p>Volume</p>
                </div>
            </div>
            {loading && <img src={loadingIcon} alt="loading" id="loading"/>}
            {spot && spot.map((data) => {
                return (
                    <div className="spot-items" key={data[0]}>
                        <p>{data[0]}</p>
                        <p>{parseFloat(data[1].available).toFixed(0)}</p>
                    </div>
                )
            })}
            {error && <p className="error">There was an error loading the list.</p>}
        </div>
    )
}

export default Spot;