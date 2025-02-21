import { ConsumptionMethod } from "@prisma/client";
import { StaticImageData } from "next/image";

import dineInImage from "@/assets/imgs/dine-in-image.png";
import takeAwayImage from "@/assets/imgs/take-away-image.png";

interface IConsumptionMethodOptionProps {
  imageUrl: StaticImageData;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

export const consumptionMethodCards: IConsumptionMethodOptionProps[] = [
  {
    imageUrl: dineInImage,
    imageAlt: "Para comer aqui",
    buttonText: "Para comer aqui",
    option: ConsumptionMethod.DINE_IN,
  },
  {
    imageUrl: takeAwayImage,
    imageAlt: "Para levar",
    buttonText: "Para levar",
    option: ConsumptionMethod.TAKEAWAY,
  },
];
