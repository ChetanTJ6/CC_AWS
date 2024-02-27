import axios from "axios"
const config = require('config').default;
const instance = axios.create({
    baseURL:config.get('serverURL');
})
export default instance
