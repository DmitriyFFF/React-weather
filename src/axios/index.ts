import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.request.use(config => {
  config.url = config.url + '$appid=' + process.env.API_KEY
  return config;
});

export default api;
