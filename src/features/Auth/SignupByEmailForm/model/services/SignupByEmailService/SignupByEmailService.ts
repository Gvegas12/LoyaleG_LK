import {
  $api,
  ApiPaths,
  AuthResponse,
  LS_ACCESS_TOKEN_NAME,
} from "@/shared/config/http";
import type { SignupData } from "../../types";

export class SignupByEmailService {
  static async signup(data: SignupData): Promise<AuthResponse> {
    const response = await $api.post(ApiPaths.SIGNUP, data);

    const { accessToken } = response.data;

    if (!accessToken) {
      throw new Error("Access token в теле ответа не обнаружен");
    }

    localStorage.setItem(LS_ACCESS_TOKEN_NAME, accessToken);

    return response.data;
  }
}
