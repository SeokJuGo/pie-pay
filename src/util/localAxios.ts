import axios from "axios";

const LocalAxios = () => {

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MOCK_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
};

export default LocalAxios;