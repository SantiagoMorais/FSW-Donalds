"use client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { IOrdersListProps } from "@/core/interfaces/orders-list-props";

import { OrderItem } from "./order-item";

export const OrdersList = ({ orders }: IOrdersListProps) => {
  const router = useRouter();

  return (
    <section className="space-y-6 p-6">
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
      </Button>
      <header className="flex items-center gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus pedidos</h2>
      </header>
      {orders.map((order) => (
        <OrderItem order={order} key={order.id} />
      ))}
    </section>
  );
};
