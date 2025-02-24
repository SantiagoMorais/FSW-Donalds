import { z } from "zod";

import { isValidZipCode } from "@/utils/verify-zip-code";

export const zipCodeFormSchema = z.object({
  zipCode: z
    .string()
    .trim()
    .min(1, { message: "CPF é obrigatório" })
    .refine((value) => isValidZipCode(value), {
      message: "CPF inválido.",
    }),
});

export type TZipCodeFormSchema = z.infer<typeof zipCodeFormSchema>;
