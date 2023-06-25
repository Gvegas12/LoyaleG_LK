import { z } from "zod";

export const ownerFormValidationSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  birthDay: z.date().optional(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string(),
});
