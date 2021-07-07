import { baseURL } from "./../../config";
const axios = require("axios");

export const registerUserAPI = (data) => {
  return axios.post(`${baseURL}/api/v1/user/signup`, data);
};

export const loginUserAPI = (data) => {
  return axios.post(`${baseURL}/api/v1/user/signin`, data);
};

export const userMeAPI = () => {
  return axios.get(`${baseURL}/api/v1/user/me`);
};
