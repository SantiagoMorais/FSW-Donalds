import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";

import { Button } from "@/components/ui/button";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  TZipCodeFormSchema,
  zipCodeFormSchema,
} from "@/core/types/zip-code-form-schema";
import { removeZipCodePunctuation } from "@/utils/verify-zip-code";

export const ZipCodeDialogForm = () => {
  const form = useForm<TZipCodeFormSchema>({
    resolver: zodResolver(zipCodeFormSchema),
  });
  const router = useRouter();
  const pathName = usePathname();

  const onSubmit = (data: TZipCodeFormSchema) => {
    const formattedZipCode = removeZipCodePunctuation(data.zipCode);
    router.push(`${pathName}?cpf=${formattedZipCode}`);
  };

  const handleCancel = () => router.back();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem className="px-4">
              <FormLabel>Seu CPF</FormLabel>
              <FormControl>
                <PatternFormat
                  placeholder="Digite o seu cpf"
                  format="###.###.###-##"
                  customInput={Input}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DrawerFooter>
          <Button variant="destructive" className="w-full rounded-full">
            Confirmar
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </Form>
  );
};
