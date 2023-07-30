import { z } from "zod";

export const signinByEmailValidationSchema = z.object({
  email: z.string(),
  password: z.string(),
});
