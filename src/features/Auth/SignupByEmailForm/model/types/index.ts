import { z } from "zod";
import { signupByEmailValidationSchema } from "../services/validationSchema/signupByEmailValidationSchema";

export type SignupByEmailFormData = z.infer<
  typeof signupByEmailValidationSchema
>;

export type SignupData = SignupByEmailFormData & {
  subscriptionId?: number;
};
export interface ISignupSchema {
  signupData: SignupData;
  setSignupData: (value: SignupData) => void;
}
