import $api, { ApiPaths } from "@/shared/config/http";
import type { Establishment, EstablishmentFormDataProps } from "../../types";

export class EstablishmentsService {
  static async getAll(): Promise<Establishment[]> {
    const response = await $api.get<Establishment[]>(ApiPaths.ESTABLISHMENTS);
    return response.data;
  }

  static async getOne(id: Establishment["id"]): Promise<Establishment> {
    const response = await $api.get<Establishment>(
      `${ApiPaths.ESTABLISHMENTS}/${id}`
    );
    return response.data;
  }

  static async create(dto: EstablishmentFormDataProps): Promise<Establishment> {
    const response = await $api.post(ApiPaths.ESTABLISHMENTS, dto);
    return response.data;
  }
}
