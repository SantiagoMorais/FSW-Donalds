"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ConsumptionMethod } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { toast } from "sonner";

import { createOrder } from "@/actions/create-order";
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
import { useCartContext } from "@/contexts/cart";
import { formSchema, TFormSchema } from "@/core/types/form-schema";

export const FinishOrderDialogForm = ({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useCartContext();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      zipCode: "",
    },
    shouldUnregister: true,
  });

  const onSubmit = async (data: TFormSchema) => {
    setLoading(true);
    const consumptionMethod = searchParams.get(
      "consumptionMethod"
    ) as ConsumptionMethod;

    try {
      await createOrder({
        consumptionMethod,
        customerName: data.name,
        customerZipCode: data.zipCode,
        products,
        slug,
      });

      onOpenChange(false);
      toast.success("Pedido finalizado com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
          >
            <Loader2 className={`animate-spin ${!loading && "hidden"}`} />
            {loading ? "Finalizando..." : "Finalizar Pedido"}
          </Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="w-full rounded-full"
              disabled={loading}
            >
              Cancelar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </Form>
  );
};
