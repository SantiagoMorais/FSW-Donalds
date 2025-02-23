import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartContext } from "@/contexts/cart";

import { CartProductItem } from "./cart-product-item";

export const CartSheet = () => {
  const { isOpen, toggleCart, products } = useCartContext();
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-4/5">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <ul className="space-y-5 py-5">
          {products.map((product) => (
            <CartProductItem product={product} key={product.id} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
