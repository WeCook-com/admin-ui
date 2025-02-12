import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async function (config) {
        return config;
    },
    function (err) {}
);

axiosClient.interceptors.response.use(
    function (response) {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    function (err) {
        console.error(err);
        return Promise.reject(err.response.data);
    }
);

export default axiosClient;
