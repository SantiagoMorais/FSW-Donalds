import { db } from "@/lib/prisma";
import { removeZipCodePunctuation } from "@/utils/verify-zip-code";

export const getOrdersByZipCode = async (zipCode: string) => {
  const customerZipCode = removeZipCodePunctuation(zipCode);

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      customerZipCode,
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
        },
      },
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
};
