import { $api, ApiPaths } from "@/shared/config/http";
import type { Subscription } from "../../types";

export class SubscriptionsService {
  static async getAll() {
    const { data } = await $api.get<Subscription[]>(ApiPaths.SUBSCRIPTIONS);
    return data;
  }
}
