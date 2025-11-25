"use client";
import emptyCart from "@/app/images/emptyCart.png";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="py-10 md:py-20 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="relative">
        <Image
          src={emptyCart}
          alt="Empty Cart"
          className="drop-shadow-lg object-contain max-w-xs"
        />
        <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-2">
          <ShoppingCart size={24} className="text-white" />
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Your cart is feeling lonely
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          It looks like you haven&apos;t added anything to your cart yet. Let&apos;s
          change that and find some amazing products for you!
        </p>
      </div>

      <Link
        href="/"
        className="inline-block bg-blue-600 text-white text-sm font-semibold tracking-wide rounded-full px-6 py-3 shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Discover Products
      </Link>
    </div>
  );
};

export default EmptyCart;
