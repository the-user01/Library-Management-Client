import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://library-management-server-lac.vercel.app"
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;