import { Product } from "@prisma/client";

export interface IProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}
