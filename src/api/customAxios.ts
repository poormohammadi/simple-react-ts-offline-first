import axios from 'axios';

const customAxios = axios.create({
    baseURL: '/'
});

customAxios.interceptors.request.use(
    async config => {
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
