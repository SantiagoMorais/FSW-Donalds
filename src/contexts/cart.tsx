"use client";

import { Product } from "@prisma/client";
import { createContext, useContext, useState } from "react";

interface ICartProduct extends Product {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: ICartProduct[];
  toggleCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
});

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
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
