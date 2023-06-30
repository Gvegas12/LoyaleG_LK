import { z } from "zod";

export const authResponseValidationSchema = z.object({
  id: z.number(),
  active: z.boolean(),
  accessToken: z.string(),
});
