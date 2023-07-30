import { z } from "zod";

export const establishmentValidationSchema = z.object({
  name: z.string(),
  country: z.string(),
  house: z.string(),
  street: z.string(),
  city: z.string(),
});
