/* eslint-disable no-unused-vars */
import axios from "axios";
import NProgress from "nprogress";

const apiClient = axios.create({
  baseURL: `http://localhost:3001`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

// axios interceptors
// apiClient.interceptors.request.use(config => {
//   // Called on request
//   NProgress.start();
//   return config;
// });
// apiClient.interceptors.response.use(response => {
//   // Called on response
//   NProgress.done();
//   return response;
// });

export default {
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
  postEvent(event) {
    return apiClient.post("/events", event);
  }
};
