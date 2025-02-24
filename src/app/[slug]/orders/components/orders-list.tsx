"use client";

import { OrderStatus } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IOrdersListProps } from "@/core/interfaces/orders-list-props";
import { orderStatus } from "@/style/tailwind-variants";
import { formatCurrency } from "@/utils/format-currency";
import { getStatusLabel } from "@/utils/get-status-label";

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
        <Card key={order.id}>
          <CardContent className="space-y-4 p-5">
            <div
              className={orderStatus({
                status:
                  order.status === OrderStatus.FINISHED
                    ? "finished"
                    : "pending",
              })}
            >
              {getStatusLabel(order.status)}
            </div>
            <div className="flex items-center gap-2">
              <div className="relative size-5">
                <Image
                  src={order.restaurant.avatarImageUrl}
                  alt={order.restaurant.name}
                  className="rounded-sm"
                  fill
                />
              </div>
              <p className="text-sm font-semibold">{order.restaurant.name}</p>
            </div>
            <Separator />
            <ul className="space-y-2">
              {order.orderProducts.map((orderProduct) => (
                <li key={orderProduct.id} className="flex items-center gap-2">
                  <p className="flex size-5 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">
                    {orderProduct.quantity}
                  </p>
                  <p className="text-sm">{orderProduct.product.name}</p>
                </li>
              ))}
            </ul>
            <Separator />
            <p className="text-sm font-medium">{formatCurrency(order.total)}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
