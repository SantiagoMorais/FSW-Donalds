import { notFound } from "next/navigation";

import { IProductPageProps } from "@/core/interfaces/product-page-props";
import { getProductById } from "@/data/get-product-by-id";

import ProductDetails from "./components/product-details";
import { ProductHeader } from "./components/product-header";

const ProductPage = async ({ params }: IProductPageProps) => {
  const { productId, slug } = await params;
  const product = await getProductById(productId);

  if (!product) return notFound();
  if (product.restaurant.slug.toUpperCase !== slug.toUpperCase)
    return notFound();

  return (
    <section className="flex h-full flex-col">
      <ProductHeader product={product} />
      <ProductDetails product={product} />
    </section>
  );
};

export default ProductPage;
