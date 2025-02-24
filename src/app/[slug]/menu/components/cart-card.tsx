"use client";

import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/cart";
import { formatCurrency } from "@/utils/format-currency";

import { CartSheet } from "../[productId]/components/cart-sheet";

export const CartCard = () => {
  const { total, toggleCart, totalQuantity } = useCartContext();

  return (
    <section className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-between border border-t bg-white px-5 py-3">
      <div>
        <p className="text-sm text-muted-foreground">Total dos pedidos</p>
        <p className="text-sm font-semibold">
          {formatCurrency(total)}
          <span className="text-sm font-normal text-muted-foreground">
            / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
          </span>
        </p>
      </div>
      <Button onClick={toggleCart}>Ver sacola</Button>
      <CartSheet />
    </section>
  );
};
