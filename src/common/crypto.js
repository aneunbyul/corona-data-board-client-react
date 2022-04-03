import CryptoJS from "crypto-js";

export const encryptoToken = (key) => {
  const encryptedKey = CryptoJS.AES.encrypt(
    key,
    process.env.REACT_APP_CPYPTO_SECRET
  ).toString();
  return encryptedKey;
};

export const encryptoOther = (key) => {
  const encryptedKey = CryptoJS.AES.encrypt(
    JSON.stringify(key),
    process.env.REACT_APP_CPYPTO_SECRET
  ).toString();
  return encryptedKey;
};

export const decryptoToken = () => {
  const token = window.sessionStorage.getItem("telepixer_accessToken");
  if (token) {
    const decryptedKey = CryptoJS.AES.decrypt(
      token,
      process.env.REACT_APP_CPYPTO_SECRET
    );

    const result = decryptedKey.toString(CryptoJS.enc.Utf8);
    return result;
  } else {
    return;
  }
};

export const decryptoOther = (key) => {
  if (key) {
    const decryptedKey = CryptoJS.AES.decrypt(
      key,
      process.env.REACT_APP_CPYPTO_SECRET
    );
    const result = decryptedKey.toString(CryptoJS.enc.Utf8);
    return result;
  } else {
    return;
  }
};
