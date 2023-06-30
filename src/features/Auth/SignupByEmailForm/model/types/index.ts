import { z } from "zod";
import { signupByEmailValidationSchema } from "../services/validationSchema/signupByEmailValidationSchema";

export type SignupByEmailFormData = z.infer<
  typeof signupByEmailValidationSchema
>;

export type SignupQueryParams = {
  secret: string;
};
export type SignupByEmailDto = SignupByEmailFormData & SignupQueryParams;
