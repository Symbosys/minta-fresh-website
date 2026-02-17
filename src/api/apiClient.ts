import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:4000/api/v1/minta-fresh",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
