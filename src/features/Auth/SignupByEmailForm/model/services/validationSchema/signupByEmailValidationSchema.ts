import { z } from "zod";
import {
  emailValidationRegExp,
  getErrorMessages,
  passwordValidationRegExp,
} from "@/shared/lib/constants";

const errorMessages = getErrorMessages();

export const signupByEmailValidationSchema = z.object({
  firstname: z.string().max(20),
  lastname: z.string().max(20),
  birthDay: z.string().optional(),
  phone: z.string(),
  email: z
    .string()
    .email(errorMessages.email)
    .regex(emailValidationRegExp, errorMessages.email),
  password: z.string(),
  // .regex(passwordValidationRegExp, errorMessages.password),
});
