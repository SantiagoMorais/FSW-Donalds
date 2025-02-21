import { Restaurant } from "@prisma/client";

export interface IRestaurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}
