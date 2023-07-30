import { z } from "zod";
import type { User } from "@/entities/user";
import { establishmentValidationSchema } from "../services/validationSchema/establishmentValidationSchema";
import type { SignupByEmailFormData } from "@/features/Auth/SignupByEmailForm";
import { Good } from "@/entities/goods";

export type Establishment = {
  id: number;
  name: string;
  country: string;
  house: string;
  street: string;
  city: string;
  owner: User;
  ownerId: number;
  customers: any[];
  goods: Good[];
  sales: Good[];
  workers: User[];
  createdAt: Date;
  updatedAt: Date;
};

export type EstablishmentFormData = z.infer<
  typeof establishmentValidationSchema
>;

export type CreateEstablishmentDto = {
  admin: SignupByEmailFormData;
  establishment: EstablishmentFormData;
};
