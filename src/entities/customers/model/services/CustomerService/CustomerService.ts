import { $api, ApiPaths } from "@/shared/config/http";
import { Customer } from "../../types";

export class CustomerService {
  static async getAll(userId: number) {
    const response = await $api.get<Customer[]>(
      `${ApiPaths.CUSTOMERS}/${userId}`
    );

    return response.data;
  }

  static async getOne(customerId: number, userId: number) {
    const response = await $api.get<Customer>(
      `${ApiPaths.CUSTOMERS}/${customerId}/${userId}`
    );

    return response.data;
  }
}
