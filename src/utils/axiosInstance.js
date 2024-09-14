import axios from "axios";
let apiUrl = true
  ? "https://api.bootcampshub.ai/api"
  : "https://staging-api.bootcampshub.ai/api";
// let apiUrl =  'http://192.168.242.219:5000/api'

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
