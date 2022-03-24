import axios from "axios";
import Api from "./api";
export const isAuthenticated = () => {
  if (document.cookie["Authorization"]) {
    return true;
  } else {
    return false;
  }
};
const ServiceApi = axios.create({
  baseURL: Api,
  withCredentials: true,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default ServiceApi;
