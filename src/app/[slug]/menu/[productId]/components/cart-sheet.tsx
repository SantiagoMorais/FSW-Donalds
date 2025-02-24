import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartContext } from "@/contexts/cart";
import { formatCurrency } from "@/utils/format-currency";

import { CartProductItem } from "./cart-product-item";
import { FinishOrderButton } from "./finish-order-button";

export const CartSheet = () => {
  const { isOpen, toggleCart, products, total } = useCartContext();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-4/5">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <section className="flex h-full flex-col py-5">
          <ul className="w-full flex-auto space-y-5 py-5">
            {products.map((product) => (
              <CartProductItem product={product} key={product.id} />
            ))}
          </ul>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          <FinishOrderButton />
        </section>
      </SheetContent>
    </Sheet>
  );
};
