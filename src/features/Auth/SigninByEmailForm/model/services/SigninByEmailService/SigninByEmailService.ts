import {
  $api,
  ApiPaths,
  AuthResponse,
  LS_ACCESS_TOKEN_NAME,
} from "@/shared/config/http";
import type { SigninByEmailFormData } from "../../types";

export class SigninByEmailService {
  static async signin({
    email,
    password,
  }: SigninByEmailFormData): Promise<AuthResponse> {
    const response = await $api.post<AuthResponse>(ApiPaths.SIGNIN, {
      password,
      email,
    });

    const { accessToken } = response.data;

    if (!accessToken) {
      throw new Error("Access token в теле ответа не обнаружен");
    }

    localStorage.setItem(LS_ACCESS_TOKEN_NAME, accessToken);

    return response.data;
  }
}
