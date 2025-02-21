import { ConsumptionMethod } from "@prisma/client";

export const isConsumptionMethodValid = (consumptionMethod: string) => {
  return (
    (consumptionMethod.toUpperCase() as ConsumptionMethod) in ConsumptionMethod
  );
};
