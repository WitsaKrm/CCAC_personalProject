import axios from "axios"

export default axios.create({
    baseURL : "http://localhost:8000",
    // baseURL : "http://172.24.163.45:9000"
    // baseURL : "http://172.20.10.2:9000"
})