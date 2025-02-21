import { Prisma } from "@prisma/client";

export type TMenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: {
    product: true;
  };
}>;
