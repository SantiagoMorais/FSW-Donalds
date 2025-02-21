import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

interface IRestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const RestaurantCategories = ({ restaurant }: IRestaurantCategoriesProps) => {
  
  return(
    <section className="relative z-10 -mt-6 space-y-3 rounded-t-3xl border bg-white p-5">
      <header className="flex items-center gap-3">
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
      <article className="flex items-center gap-1 text-xs text-green-500">
        <ClockIcon size={12} />
        <p>Aberto</p>
      </article>
    </section>
  );
};

export default RestaurantCategories;
