import { baseUrl } from "./config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${baseUrl}/`,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export async function sendRequest(path, opts = {}) {
  const headers = {
    ...opts?.headers,
    "Content-Type": "application/json; charset=UTF-8",
  };
  if (opts.headers && opts.headers["Content-Type"]) {
    headers["Content-Type"] = opts.headers["Content-Type"];
  }

  try {
    let response = await axiosInstance({
      method: opts.method,
      url: path,
      data: opts.data,
      headers: headers,
    });
    return response;
  } catch (err) {
    console.log("err", err);
  }
}
