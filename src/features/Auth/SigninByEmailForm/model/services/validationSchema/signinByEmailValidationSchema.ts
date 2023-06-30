import { z } from "zod";
import { emailValidationRegExp } from "@/shared/lib/constants";

export const signinByEmailValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Пожалуйста, введите валидный email" })
    .regex(emailValidationRegExp),
  password: z.string(),
});
