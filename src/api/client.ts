import axios from "axios";
import { parseApiError } from "../helper/error";

const BASE_URL = 'https://www.googleapis.com/youtube'

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const getApi = async ({ url, params }:{url:string, params: object}) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const requestParams = {
    ...params,
  };

  const fullUrl = `${BASE_URL}/${url}`;

  return axios
    .get(fullUrl, {
      headers,
      params: requestParams,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = parseApiError(error);
      throw Error(errorMessage);
    });
};