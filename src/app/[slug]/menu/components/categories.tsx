"use client";

import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { IRestaurantCategoriesProps } from "@/core/interfaces/restaurant-categories-props";
import { TMenuCategoryWithProducts } from "@/core/types/menu-category-with-products";

export const RestaurantCategories = ({
  restaurant,
}: IRestaurantCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<TMenuCategoryWithProducts>(restaurant.menuCategories[0]);

  const handleCategoryClick = (category: TMenuCategoryWithProducts) => {
    setSelectedCategory(category);
  };

  const getCategoryButtonVariant = (categoryId: string) => {
    return selectedCategory.id === categoryId ? "default" : "secondary";
  };

  return (
    <section className="relative z-10 -mt-6 space-y-3 rounded-t-3xl border bg-white">
      <header className="flex items-center gap-3 px-5 pt-5">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          height={45}
          width={45}
        />
        <div>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-sm opacity-55">{restaurant.description}</p>
        </div>
      </header>
      <article className="flex items-center gap-1 px-5 pb-5 text-xs text-green-500">
        <ClockIcon size={12} />
        <p>Aberto</p>
      </article>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 px-4 pb-4">
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
    </section>
  );
};
