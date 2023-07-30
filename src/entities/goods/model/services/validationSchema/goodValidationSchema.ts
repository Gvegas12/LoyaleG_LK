import { z } from "zod";

export const goodValidationSchema = z.object({
  name: z.string(),
  price: z.string(),
  extra: z.object({}).optional().nullable(),
});
