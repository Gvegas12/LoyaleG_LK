import { $api, ApiPaths } from "@/shared/config/http";
import type { Establishment, CreateEstablishmentDto } from "../../types";

export class EstablishmentsService {
  static async getAll(): Promise<Establishment[]> {
    const response = await $api.get<Establishment[]>(ApiPaths.ESTABLISHMENTS);
    return response.data;
  }

  static async getOne(id: string): Promise<Establishment> {
    const response = await $api.get<Establishment>(
      `${ApiPaths.ESTABLISHMENTS}/${id}`
    );
    return response.data;
  }

  static async create(dto: CreateEstablishmentDto): Promise<Establishment> {
    const response = await $api.post<Establishment>(
      ApiPaths.ESTABLISHMENTS,
      dto
    );
    return response.data;
  }
}
