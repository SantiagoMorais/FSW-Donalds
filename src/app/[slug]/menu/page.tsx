import { ConsumptionMethod } from "@prisma/client";
import { notFound } from "next/navigation";

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

  return (
    <p>
      {slug},{consumptionMethod}
    </p>
  );
};

export default RestaurantMenuPage;
