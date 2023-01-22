import axios from "axios";

axios.defaults.baseURL = 'https://cozy-potlucky.herokuapp.com';
// axios.defaults.baseURL = 'https://8000-cozyplantla-drfapipotlu-7sgubgy7qdk.ws-eu83.gitpod.io';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();