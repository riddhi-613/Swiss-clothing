import React, { createContext, useState, useContext } from "react";

// Create Context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartContext provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Reset cart to empty array
  };

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if item exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }; // Decrement quantity
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Function to get the cart count
  const getCartCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getCartCount, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
