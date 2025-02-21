"use client";

import { Product } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface ICartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: ICartProduct[];
  toggleCart: () => void;
  addProducts: (product: ICartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProducts: () => {},
});

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const addProducts = (product: ICartProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
        addProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be wrapper by a CartProvider");

  return context;
};
