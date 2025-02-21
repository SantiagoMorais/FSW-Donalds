"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface IRestaurantHeader {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

export const RestaurantHeader = ({ restaurant }: IRestaurantHeader) => {
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
      >
        <ScrollTextIcon />
      </Button>
    </header>
  );
};
