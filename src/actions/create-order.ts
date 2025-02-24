"use server";

import { redirect } from "next/navigation";

import { ICreateOrderInput } from "@/core/interfaces/create-order-input";
import { db } from "@/lib/prisma";
import { removeZipCodePunctuation } from "@/utils/verify-zip-code";

export const createOrder = async (input: ICreateOrderInput) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug: input.slug,
    },
  });

  if (!restaurant) throw new Error("Restaurant not found");

  const productsWithPrices = await db.product.findMany({
    where: {
      id: {
        in: input.products.map((product) => product.id),
      },
    },
  });

  const productsWithPricesAndQuantities = input.products.map((product) => ({
    productId: product.id,
    quantity: product.quantity,
    price: productsWithPrices.find((p) => p.id === product.id)!.price,
  }));

  await db.order.create({
    data: {
      status: "PENDING",
      consumptionMethod: input.consumptionMethod,
      customerName: input.customerName,
      customerZipCode: removeZipCodePunctuation(input.customerZipCode),
      orderProducts: {
        createMany: {
          data: productsWithPricesAndQuantities,
        },
      },
      total: productsWithPricesAndQuantities.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0),
      restaurantId: restaurant?.id,
    },
  });
  redirect(`/${input.slug}/orders`);
};
