import axios from "axios"

export const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  validateStatus: (status) => {
    return status < 500;
  }
});

export const getConnection = async () => {
  const { data, status } = await http.get("/");
  return { data, status }
};

export type TResponseData = {
  message?: string;
  error?: string;
  statusCode?: number;
  data?: any;
  token?: string;
};