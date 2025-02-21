import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { isConsumptionMethodValid } from "@/utils/is-consumption-method-valid";

interface IRestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: IRestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!isConsumptionMethodValid(consumptionMethod)) return notFound();

  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) return notFound();

  return (
    <main>
      <header className="relative h-64 w-full">
        <Button
          variant="secondary"
          className="absolute left-4 top-4 z-10 rounded-full"
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
          className="absolute right-4 top-4 z-10 rounded-full"
        >
          <ScrollTextIcon />
        </Button>
      </header>
    </main>
  );
};

export default RestaurantMenuPage;
