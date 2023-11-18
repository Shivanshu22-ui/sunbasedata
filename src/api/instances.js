import axios from "axios";

const REACT_APP_API_BASE_URL = "https://qa2.sunbasedata.com/sunbase/portal/api/";

const openAxiosInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  headers:{
    "Access-Control-Allow-Origin": "*",
  }
});

const securedAxiosInstance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
});



export const setAuthorizationToken = (token) => {
  securedAxiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAuthorizationToken = () => {
  delete securedAxiosInstance.defaults.headers.Authorization;
};



export {  openAxiosInstance, securedAxiosInstance };
