import { z } from "zod";
import type { User } from "@/entities/user";
import { establishmentValidationSchema } from "../services/validationSchema/establishmentValidationSchema";

export type Establishment = {
  id: number;
  name: string;
  country: string;
  house: string;
  street: string;
  city: string;
  owner: User;
  createdAt: Date;
  updatedAt: Date;
};

export type EstablishmentFormDataProps = z.infer<
  typeof establishmentValidationSchema
>;
