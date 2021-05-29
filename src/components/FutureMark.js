import "../pages/futures/Futures.css"
import {useState, useEffect} from 'react'
import Binance from "node-binance-api";

// noinspection SpellCheckingInspection
const binance = new Binance().options({
    APIKEY: process.env.REACT_APP_APIKEY,
    APISECRET: process.env.REACT_APP_SECRETKEY
});

function FutureMark(props) {
    const [mark, setMark] = useState(null);
    const [error, toggleError] = useState(false);
    // console.log(`Received symbol: ${symbol}`);

    useEffect(() => {

        setInterval(() => {

            async function fetchData() {
                // console.clear();
                toggleError(false);

                try {
                    const {markPrice} = await binance.futuresMarkPrice(props.symbol);
                    setMark(markPrice)
                } catch (err) {
                    toggleError(true);
                    console.error(err)
                }

            }

            // noinspection JSIgnoredPromiseFromCall
            fetchData()
        }, 5000);

    }, [props.symbol])

    // noinspection JSCheckFunctionSignatures
    return (
        <>
            {mark && <p className="future-grid-item">{parseFloat(mark).toFixed(2)}</p>}
            {error && <p className="error">Data error</p>}
        </>
    )

}

export default FutureMark;