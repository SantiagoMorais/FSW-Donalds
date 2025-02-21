import Image from "next/image";
import { notFound } from "next/navigation";

import { IRestaurantPageProps } from "@/core/interfaces/restaurant-page-props";
import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { consumptionMethodCards } from "@/utils/consumption-method-cards";

import { ConsumptionMethodOption } from "./components/consumption-method-option";

const RestaurantPage = async ({ params }: IRestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) return notFound();

  return (
    <main className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <header className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />
        <h2>{restaurant.name}</h2>
      </header>
      <section className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="max-w-96 opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </section>
      <section className="flex flex-wrap gap-4 pt-14">
        {consumptionMethodCards.map((method) => (
          <ConsumptionMethodOption
            slug={slug}
            buttonText={method.buttonText}
            imageAlt={method.imageAlt}
            imageUrl={method.imageUrl}
            option={method.option}
            key={method.option}
          />
        ))}
      </section>
    </main>
  );
};

export default RestaurantPage;
