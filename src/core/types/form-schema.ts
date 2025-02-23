import { z } from "zod";

import { isValidZipCode } from "@/utils/verify-zip-code";

export const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório",
  }),
  zipCode: z
    .string()
    .trim()
    .min(1, { message: "CPF é obrigatório" })
    .refine((value) => isValidZipCode(value), {
      message: "CPF inválido.",
    }),
});

export type TFormSchema = z.infer<typeof formSchema>;
