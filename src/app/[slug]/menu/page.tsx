import { notFound } from "next/navigation";

import { IRestaurantMenuPageProps } from "@/core/interfaces/restaurant-menu-page-props";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { isConsumptionMethodValid } from "@/utils/is-consumption-method-valid";

import { RestaurantCategories } from "./components/categories";
import { RestaurantHeader } from "./components/header";

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
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </main>
  );
};

export default RestaurantMenuPage;
