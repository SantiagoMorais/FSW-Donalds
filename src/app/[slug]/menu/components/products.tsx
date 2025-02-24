import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { IProductsProps } from "@/core/interfaces/products-props";
import { formatCurrency } from "@/utils/format-currency";

export const Products = ({ products }: IProductsProps) => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <ul className="space-y-3">
      {products.map((product) => (
        <li key={product.id}>
          <Link
            href={`/${slug}/menu/${product.id}`}
            className="flex items-center justify-between gap-10 border-b px-5 py-3"
          >
            <article>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>
              <p className="pt-3 text-sm font-semibold">
                {formatCurrency(product.price)}
              </p>
            </article>
            <div className="relative min-h-20 min-w-30">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
