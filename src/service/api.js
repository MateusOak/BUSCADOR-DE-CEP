import axios from "axios";
// 69100033/json/
const api = axios.create({
    baseURL:"https://viacep.com.br/ws"
});

export default api;
