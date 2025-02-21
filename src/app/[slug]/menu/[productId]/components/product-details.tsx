"use client";

import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IProductDetailsProps } from "@/core/interfaces/product-details-props";
import { formatCurrency } from "@/utils/format-currency";

export const ProductDetails = ({ product }: IProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <section className="relative z-10 -mt-6 flex flex-auto flex-col overflow-hidden rounded-t-3xl p-5">
      <section className="flex-auto overflow-hidden">
        <div className="flex items-center gap-1.5">
          <Image
            src={product.restaurant.avatarImageUrl}
            alt={product.restaurant.name}
            width={16}
            height={16}
            className="rounded-full"
          />
          <p className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </p>
        </div>
        <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
        <div className="mt-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {formatCurrency(product.price)}
          </h3>
          <div className="flex items-center gap-3 text-center">
            <Button
              variant="outline"
              className="size-8 rounded-xl"
              disabled={quantity === 1}
              onClick={handleDecreaseQuantity}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-4 select-none">{quantity}</p>
            <Button
              variant="destructive"
              className="size-8 rounded-xl"
              onClick={handleIncreaseQuantity}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        <ScrollArea className="h-full">
          <article className="mt-6 space-y-3">
            <h4 className="font-semibold">Sobre:</h4>
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          </article>
          <div className="mt-6 space-y-3">
            <h4 className="flex items-center gap-1 font-semibold">
              <ChefHatIcon />
              Ingredientes:
            </h4>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              {product.ingredients.map((ingredient) => (
                <li key={ingredient} className="">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </section>

      <Button className="mt-6 w-full rounded-full">Adicionar à sacola</Button>
    </section>
  );
};

export default ProductDetails;
