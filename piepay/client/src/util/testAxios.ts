import axios from "axios";

const testAxios = () => {

    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return instance;
};

export default testAxios;