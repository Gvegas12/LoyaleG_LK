import { z } from "zod";
import { Establishment } from "@/entities/establishments";
import { goodValidationSchema } from "../services/validationSchema/goodValidationSchema";

export type Good = {
  id: number;

  name: string;

  price: number;

  extra: { volume: number };

  establishmentId: number;

  establishment: Establishment;

  createdAt: Date;

  updatedAt: Date;
};

export type CreateGoodFormData = z.infer<typeof goodValidationSchema>;
