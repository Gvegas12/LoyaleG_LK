import axios from "axios";

import { ApiPaths } from "./constants/apiPaths";
import { LS_ACCESS_TOKEN_NAME } from "./constants/localStorage";
import { authStore } from "@/entities/auth";
import type { AuthResponse } from "./types";

const $api = axios.create({
  baseURL: __API_URL__,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    LS_ACCESS_TOKEN_NAME
  )}`;
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && err.config && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${__API_URL__}${ApiPaths.REFRESH}`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem(LS_ACCESS_TOKEN_NAME, response.data.accessToken);
        return $api.request(originalRequest);
      } catch (error) {
        authStore.getState().logout();
        console.warn("НЕ АВТОРИЗОВАН", error);
      }
    }
    throw err;
  }
);

export default $api;
