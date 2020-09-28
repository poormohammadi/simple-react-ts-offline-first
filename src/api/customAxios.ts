import axios from 'axios';

const customAxios = axios.create();

customAxios.interceptors.request.use(
    async config => {
        config.baseURL = '/';
        return config;
    }, (err) => {
        return Promise.reject(err);
    }
);

customAxios.interceptors.response.use(response => {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default customAxios;
