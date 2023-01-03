import axios from 'axios';

export const Axios = axios.create({
    baseURL : "https://api.thecatapi.com/v1"
});

export default Axios;