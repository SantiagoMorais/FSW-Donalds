"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { formSchema, TFormSchema } from "@/core/types/form-schema";

export const FinishOrderDialogForm = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      zipCode: "",
    },
    shouldUnregister: true,
  });

  const onSubmit = (data: TFormSchema) => {
    console.log({ data });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
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
          <Button
            type="submit"
            variant="destructive"
            className="w-full rounded-full"
          >
            Finalizar
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full rounded-full">
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </Form>
  );
};
