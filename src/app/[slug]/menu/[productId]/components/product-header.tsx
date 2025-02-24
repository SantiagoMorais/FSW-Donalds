"use client";

import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { IProductHeaderProps } from "@/core/interfaces/product-header-props";

export const ProductHeader = ({ product }: IProductHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  const { slug } = useParams<{ slug: string }>();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);

  return (
    <div className="relative h-80 min-h-80 w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-10 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-contain"
      />

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-10 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};
