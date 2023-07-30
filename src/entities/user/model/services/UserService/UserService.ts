// eslint-disable-next-line object-curly-newline
import { $api, $botApi, ApiPaths, BotApiPaths } from "@/shared/config/http";
import { UserStore } from "../../store/userStore";
import type { BotApiAuthDataResponse, User } from "../../types";

export class UserService {
  static async ConnectGetAllAdminAuthCodes(): Promise<void> {
    // LongPooling
    try {
      const { data } = await $botApi.get<BotApiAuthDataResponse>(
        BotApiPaths.CONNECT_GET_AUTH_CODE
      );

      if (data) {
        UserStore.getState().setAuthCodeData(data.pool);
      }

      await this.ConnectGetAllAdminAuthCodes();
    } catch (e) {
      setTimeout(() => {
        this.ConnectGetAllAdminAuthCodes();
      }, 500);
    }
  }

  static async getAllAdminAuthCode(): Promise<BotApiAuthDataResponse["pool"]> {
    const { data } = await $botApi.get<BotApiAuthDataResponse>(
      BotApiPaths.GET_AUTH_CODE
    );

    UserStore.getState().setAuthCodeData(data.pool);

    return data.pool;
  }

  static async getUserData(id: User["id"]): Promise<User> {
    const { data } = await $api.get(`${ApiPaths.USERS}/${id}`);

    UserStore.getState().setUser(data);

    return data;
  }
}
