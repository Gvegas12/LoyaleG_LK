import { z } from "zod";
import { ownerFormValidationSchema } from "../services/validationSchema";

export type OwnerFormData = z.infer<typeof ownerFormValidationSchema>;
