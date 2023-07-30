import { $api, ApiPaths } from "@/shared/config/http";
import type { CreateGoodFormData } from "../../types";

export class GoodsService {
  static async create(estb_id: number, dto: CreateGoodFormData) {
    const response = await $api.post(
      `${ApiPaths.ESTABLISHMENTS}/${estb_id}`,
      dto
    );
    return response.data;
  }

  static async getlAllFromOneEstablishment(estb_id: number) {
    const response = await $api.get(ApiPaths.ESTABLISHMENT_GOODS(estb_id));
    return response.data;
  }
}
