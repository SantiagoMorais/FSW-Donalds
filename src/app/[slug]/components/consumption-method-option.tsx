import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IConsumptionMethodOptionProps } from "@/core/interfaces/consumption-method-option-props";

export const ConsumptionMethodOption = ({
  imageUrl,
  imageAlt,
  buttonText,
  option,
  slug,
}: IConsumptionMethodOptionProps) => (
  <Card className="flex min-w-40 flex-1 items-center justify-center">
    <CardContent className="flex flex-col items-center gap-8 py-8">
      <div className="relative size-20">
        <Image src={imageUrl} alt={imageAlt} fill className="object-contain" />
      </div>
      <Button variant="secondary" className="rounded-full" asChild>
        <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
          {buttonText}
        </Link>
      </Button>
    </CardContent>
  </Card>
);
