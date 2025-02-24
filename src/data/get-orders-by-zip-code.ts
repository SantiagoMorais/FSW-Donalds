import { db } from "@/lib/prisma";
import { removeZipCodePunctuation } from "@/utils/verify-zip-code";

export const getOrdersByZipCode = async (zipCode: string) => {
  const customerZipCode = removeZipCodePunctuation(zipCode);

  return await db.order.findMany({
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
};
