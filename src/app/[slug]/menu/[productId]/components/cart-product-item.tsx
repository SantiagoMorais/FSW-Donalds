import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ICartProduct, useCartContext } from "@/contexts/cart";
import { formatCurrency } from "@/utils/format-currency";

export const CartProductItem = ({ product }: { product: ICartProduct }) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useCartContext();

  return (
    <li className="flex items-center justify-between">
      <article className="flex flex-1 items-center gap-3">
        <div className="relative size-20 rounded-xl bg-gray-200">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="p-1"
          />
        </div>
        <div className="space-y-1">
          <p className="max-w-9/10 truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          <div className="flex items-center gap-1">
            <Button
              className="size-7 rounded-lg"
              variant="outline"
              onClick={() => decreaseProductQuantity(product.id)}
              disabled={product.quantity <= 1}
            >
              <ChevronLeftIcon size={16} />
            </Button>
            <p className="w-7 select-none text-center text-xs">
              {product.quantity}
            </p>
            <Button
              className="size-7 rounded-lg"
              variant="destructive"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </article>
      <Button
        className="size-7 rounded-lg"
        variant="outline"
        onClick={() => removeProduct(product.id)}
      >
        <TrashIcon />
      </Button>
    </li>
  );
};
