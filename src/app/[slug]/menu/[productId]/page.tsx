import { notFound } from "next/navigation";

import { IProductPageProps } from "@/core/interfaces/product-page-props";
import { getProductById } from "@/data/get-product-by-id";

import { ProductHeader } from "./components/product-header";

const ProductPage = async ({ params }: IProductPageProps) => {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) return notFound();

  return (
    <>
      <ProductHeader product={product} />
    </>
  );
};

export default ProductPage;
