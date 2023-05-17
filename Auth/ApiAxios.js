import axios from "axios";
import Router from "next/router";

const server = axios.create({
  baseURL: "https://twitter-6nyy.onrender.com/",
  headers: { "Content-Type": "application/json", Accept: "applicaton/json" },
});

let tokenData

if (typeof window !== "undefined") {
  tokenData = localStorage.getItem("token");
}

if (tokenData) {
  server.interceptors.request.use((config) => {
    if (!config?.headers) {
      // console.log(tokenData, "2")
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    } else {
      config.headers.Authorization = `Bearer ${tokenData}`;
    }
    return config;
  });
}

// server.interceptors.response.use(
//   (response: any) => {
//     return response
//   },
//   (err: any) => {

//     if (err.response) {
//       localStorage.clear()

//       const prevPath = Router.pathname;
//       let redirectUrl = prevPath.match(/admin/g) ? "/auth/admin" : "/auth/driver";
//       redirectUrl += `/login?redirect=${prevPath}`;
//       Router.push(redirectUrl);
//     }
//     return Promise.reject(err)
//   },
// )

export default server;