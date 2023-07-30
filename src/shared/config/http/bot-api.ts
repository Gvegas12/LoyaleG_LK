import axios from "axios";

const $botApi = axios.create({
  baseURL: "http://localhost:7000/api/",
});

export default $botApi;
