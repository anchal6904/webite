import React, { createContext, useState } from 'react';

export const CartContext = createContext();// Creating CartContext

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initializing cart state

   // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);// Adding new item to the cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}> {/* Providing cart and addToCart to the context */}
      {children}
    </CartContext.Provider>
  );
};
