import axios, {AxiosInstance} from "axios";

const baseURL = "http://localhost:8081";

const apiInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});


export {apiInstance};
