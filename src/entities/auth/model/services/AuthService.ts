import axios from "axios";

import $api, {
  ApiPaths,
  AuthResponse,
  LS_ACCESS_TOKEN_NAME,
} from "@/shared/config/http";
import { authStore } from "../store/authStore";

export class AuthService {
  static async logout() {
    await $api.get(ApiPaths.LOGOUT);
    localStorage.removeItem(LS_ACCESS_TOKEN_NAME);
    authStore.getState().logout();
  }

  /**
   * Если accessToken умер, то идет запрос с фронта на обновление токенов.
   * @cookie Живой refreshToken
   */
  static async checkIsAuth(): Promise<AuthResponse> {
    const { data } = await axios.get<AuthResponse>(
      `${__API_URL__}${ApiPaths.REFRESH}`,
      {
        withCredentials: true,
      }
    );
    return data;
  }
}
