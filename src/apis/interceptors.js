import axios from 'axios';


export default function setup() {
    axios.interceptors.request.use(function(config) {
        const accessToken = window.$cookies.get('accessToken');
        if(accessToken) {
            config.headers['X-Authorization-Firebase']= accessToken;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}
