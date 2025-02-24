import { ConsumptionMethod } from "@prisma/client";

export interface ICreateOrderInput {
  customerName: string;
  customerZipCode: string;
  products: Array<{
    id: string;
    quantity: number;
  }>;
  consumptionMethod: ConsumptionMethod;
  restaurantId: string;
}
