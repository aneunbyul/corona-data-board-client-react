import {mainAxios} from "./Common/axios";

export const login = async (body) => {
  try {
    const {headers} = await mainAxios.post(`/auth`, body);
    return headers;
  } catch (err) {
    console.log(err.response);
    return null;
  }
};

export const requestToken = async () => {
  try {
    const {data} = await mainAxios.post(`/auth/refresh`);
    const {accessToken, refreshToken} = data.body;
    window.sessionStorage.setItem("telepixer_accessToken", accessToken);
    window.sessionStorage.setItem("telepixer_refreshToken", refreshToken);
    return;
  } catch (err) {
    window.sessionStorage.removeItem("telepixer_accessToken");
    window.sessionStorage.removeItem("telepixer_refreshToken");
    window.sessionStorage.removeItem("member");
    errorAlert("토큰이 만료되었습니다.");
    return;
  }
};
