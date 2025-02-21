import { Prisma } from "@prisma/client";

export interface IRestaurantCategoriesProps {
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
