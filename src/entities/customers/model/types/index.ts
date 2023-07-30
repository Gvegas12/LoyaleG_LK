import { Establishment } from "@/entities/establishments";

export type CustomerPurchase = {
  id: number;
  customerId: number | null;
  customer: number;
  establishments: Establishment[];
  goodId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Customer = {
  id: number;
  chatId: number;
  active: boolean;
  establishments: Establishment[];
  purchases: CustomerPurchase[];
  createdAt: Date;
  updatedAt: Date;
};
