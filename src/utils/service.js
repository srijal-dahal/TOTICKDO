import axios, { Axios } from "axios";
import Api from "./api";

const ServiceApi = axios.create({
  baseURL: Api,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default ServiceApi;
