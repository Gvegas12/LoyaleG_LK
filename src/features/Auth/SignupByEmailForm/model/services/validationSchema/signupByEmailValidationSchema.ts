import { z } from "zod";
import {
  emailValidationRegExp,
  passwordValidationRegExp,
} from "@/shared/lib/constants";

export const signupByEmailValidationSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  birthDay: z.date().optional(),
  phone: z.string(),
  email: z
    .string()
    .email({ message: "Пожалуйста, введите валидный email" })
    .regex(emailValidationRegExp),
  password: z.string().regex(passwordValidationRegExp, {
    message: "Пожалуйста, введите валидный пароль",
  }),
});
