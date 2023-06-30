import { z } from "zod";
import { authResponseValidationSchema } from "../validationSchema/authResponseValidationSchema";

export type AuthResponse = z.infer<typeof authResponseValidationSchema>;
