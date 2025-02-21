import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface IConsumptionMethodOptionProps {
  imageUrl: StaticImageData;
  imageAlt: string;
  buttonText: string;
}

export const ConsumptionMethodOption = ({
  imageUrl,
  imageAlt,
  buttonText,
}: IConsumptionMethodOptionProps) => (
  <Card className="flex min-w-40 flex-1 items-center justify-center">
    <CardContent className="flex flex-col items-center gap-8 py-8">
      <div className="relative size-20">
        <Image src={imageUrl} alt={imageAlt} fill className="object-contain" />
      </div>
      <Button variant="secondary" className="rounded-full">
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);
