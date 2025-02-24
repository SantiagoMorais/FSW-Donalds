"use client";

import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCartContext } from "@/contexts/cart";
import { IRestaurantCategoriesProps } from "@/core/interfaces/restaurant-categories-props";
import { TMenuCategoryWithProducts } from "@/core/types/menu-category-with-products";

import { CartCard } from "./cart-card";
import { Products } from "./products";

export const RestaurantCategories = ({
  restaurant,
}: IRestaurantCategoriesProps) => {
  const { products } = useCartContext();

  const [selectedCategory, setSelectedCategory] =
    useState<TMenuCategoryWithProducts>(restaurant.menuCategories[0]);

  const handleCategoryClick = (category: TMenuCategoryWithProducts) => {
    setSelectedCategory(category);
  };

  const getCategoryButtonVariant = (categoryId: string) => {
    return selectedCategory.id === categoryId ? "default" : "secondary";
  };

  return (
    <section
      className={`relative z-10 -mt-6 rounded-t-3xl bg-white ${products.length > 0 && "pb-16"}`}
    >
      <header className="flex items-center gap-3 p-5">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          height={45}
          width={45}
        />
        <article>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-sm opacity-55">{restaurant.description}</p>
        </article>
      </header>
      <div className="flex items-center gap-1 border-b px-5 pb-5 text-xs text-green-500">
        <ClockIcon size={12} />
        <p>Aberto</p>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 px-5 pb-6 pt-5">
          {restaurant.menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={getCategoryButtonVariant(category.id)}
              size="sm"
              className="rounded-full"
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <h3 className="px-5 font-semibold">{selectedCategory.name}</h3>
      <Products products={selectedCategory.product} />
      {products.length > 0 && <CartCard />}
    </section>
  );
};
