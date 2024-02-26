import axios from "axios"
const instance = axios.create({
    baseURL:"http://13.51.109.27:8000/api"
})
export default instance
