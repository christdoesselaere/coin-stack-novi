const enableTestNetwork = true; // Change value to true to enable Binance test network and test account
const responseTime = 5000 // Default 5000, max 60000. Lower is better (safer) but to low and server will not send data
const toggleServerTime = true // Use server time or local time, default is local time

// !! Do not change code below !!
const baseUrl = (enableTestNetwork ? 'https://testnet.binance.vision/api/' : 'https://api.binance.com/api/')
const combineStreamUrl = (enableTestNetwork ? 'wss://testnet.binance.vision/stream?streams=' : 'wss://stream.binance.com:9443/stream?streams=')
const streamUrl = (enableTestNetwork ? 'wss://testnet.binance.vision/ws/' : 'wss://stream.binance.com:9443/ws/')

const keys = (enableTestNetwork ? {
    'APIKEY': process.env.REACT_APP_TEST_API_KEY,
    'SECRET': process.env.REACT_APP_TEST_SECRETKEY
} : {
    'APIKEY': process.env.REACT_APP_APIKEY,
    'SECRET': process.env.REACT_APP_SECRETKEY
})

const fKeys = (enableTestNetwork ? {
    'APIKEY': process.env.REACT_APP_F_TEST_API_KEY,
    'SECRET': process.env.REACT_APP_F_TEST_SECRETKEY
} : {
    'APIKEY': process.env.REACT_APP_APIKEY,
    'SECRET': process.env.REACT_APP_SECRETKEY
})

export {responseTime, baseUrl, combineStreamUrl, streamUrl, keys, fKeys, enableTestNetwork, toggleServerTime};