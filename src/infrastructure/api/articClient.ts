import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.artic.edu/api/v1",
});
