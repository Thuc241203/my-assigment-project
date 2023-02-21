import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
    function(Config) {
            //thuc hien hanh dong va gui di yeu cau
        return Config;
    },
    function (error) {
        //thuc hien hanh dong voi yeu cau loi
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;