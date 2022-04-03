import axios from "axios";
import { decryptoToken } from "./crypto";

const MAIN_BASE_URL = "https://dev.telepix.net/api";
// const MAIN_BASE_URL = "http://192.168.0.109:8080/api";

const mainAxios = axios.create({
  baseURL: MAIN_BASE_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

mainAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const { status, config } = err.response;
    console.log(err.response.data, status);
    if (status) {
      // ! 417 : 토큰 만료
      switch (status) {
        case 417:
          // return config.url === "/auth/refresh"
          //   ? Promise.reject(err)
          // return await requestToken();
          return;
        case 403:
          window.sessionStorage.removeItem("telepixer_accessToken");
          window.sessionStorage.removeItem("telepixer_refreshToken");
          return Promise.reject(err);
        default:
          return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

mainAxios.interceptors.request.use(
  (config) => {
    const accessToken = decryptoToken();
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { mainAxios };
