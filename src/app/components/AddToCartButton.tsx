"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/cartContext"; 
import { useToastContext } from "@/app/toastContext";

// Define the Product type
interface Product {
  _id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string; 
}

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className  }) => {
  const { addToCart } = useCart();
  const { addToast } = useToastContext();

  const handleAddToCart = () => {
    if (!addToCart) {
      console.error("Error: `addToCart` function is not defined in the cart context.");
      return;
    }

    if (!addToast) {
      console.error("Error: `addToast` function is not defined in the toast context.");
      return;
    }

    // Add product to cart
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    // Display toast notification
    addToast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.` 
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-gray-900 w-full text-white px-6 py-3 rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={!product?.price} // 
      aria-label={`Add ${product.name} to cart`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
