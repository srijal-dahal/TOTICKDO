import axios from "axios";
import Api from "./api.js";
export const isAuthenticated = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token != undefined || null ? true : false;
};
export class Service {
  constructor() {
    return axios.create({
      baseURL: Api,
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_HOST,
        "x-rapidapi-key": process.env.REACT_APP_KEY,
      },
    });
  }
  static get(route, param) {
    return axios
      .get(route, {
        param,
      })
      .then((res) => {
        if (res) {
          return res;
        } else {
          console.log("Empty Response");
        }
      })
      .catch((e) => {
        console.log("Error in Get Req--> " + e);
        return e;
      });
  }
  static post(route, body) {
    return axios
      .post(route, body)
      .then((res) => {
        if (res) {
          return res;
        } else {
          console.log("Empty Response");
        }
      })
      .catch((e) => {
        console.log("Error in Post Req--> " + e);
        return e;
      });
  }
}
