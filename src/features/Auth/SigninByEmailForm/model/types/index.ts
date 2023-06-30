import { z } from "zod";
import { signinByEmailValidationSchema } from "../services/validationSchema/signinByEmailValidationSchema";

export type SigninByEmailFormData = z.infer<
  typeof signinByEmailValidationSchema
>;
