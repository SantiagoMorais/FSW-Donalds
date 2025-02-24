"use client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/cart";
import { IRestaurantHeaderProps } from "@/core/interfaces/restaurant-header-props";

export const RestaurantHeader = ({ restaurant }: IRestaurantHeaderProps) => {
  const { toggleCart } = useCartContext();
  const router = useRouter();
  const handleBackClick = () => router.back();

  return (
    <header className="relative h-64 w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-10 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-10 rounded-full"
        onClick={toggleCart}
      >
        <ScrollTextIcon />
      </Button>
    </header>
  );
};
