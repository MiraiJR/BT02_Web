import axios from "axios";
import { PIXEL_API, PIXEL_KEY_API } from "../constant";

const axiosClient = axios.create({
  baseURL: PIXEL_API,
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `${PIXEL_KEY_API}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
