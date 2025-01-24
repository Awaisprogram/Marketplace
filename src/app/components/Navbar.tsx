"use client";

import {
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from "../cartContext";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import SearchBar from "./searchbar";

const Navbar = () => {
  const { cartItemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get user state
  const { isSignedIn, user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-Background max-w-[1437px] lg:h-[78px] flex justify-between items-center relative z-20">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex justify-center items-center gap-20">
          <Link href="/" className="text-2xl font-black text-black">
            Bandage
          </Link>

          {/* Navbar Links - Desktop Version */}
          <div className="hidden lg:flex text-sm space-x-8">
            <Link href="/" className="font-bold hover:text-Color transition ease duration-500">
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-Color font-bold flex justify-center items-center gap-4 transition ease duration-500"
            >
              Shop <IoIosArrowDown />
            </Link>
            <Link href="/about" className="hover:text-Color font-bold transition ease duration-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-Color font-bold transition ease duration-500">
              Contact
            </Link>
            <Link href="/support" className="hover:text-Color font-bold transition ease duration-500">
              Pages
            </Link>
            <Link href="/pricing" className="hover:text-Color font-bold transition ease duration-500">
              Pricings
            </Link>
            {isAdmin && (
              <Link href="/admin" className="hover:text-red-500 font-bold transition ease duration-500">
                Admin
              </Link>
            )}
          </div>
        </div>

        {/* User Login/Signup */}
        <div className="lg:flex items-center space-x-4 hidden text-Color">
          <div className="flex items-center space-x-4">
            <SearchBar />
            <FaHeart className="text-xl text-Color cursor-pointer" />
            <button className="relative transition ease-in hover:text-color">
              <Link href="/cartpage">
                <FaShoppingCart className="text-xl text-Color cursor-pointer" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 text-xs text-white p-2 bg-red-500 rounded-full w-3 h-3 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </button>
          </div>

          {!isSignedIn && <SignInButton />}
          {isSignedIn && <UserButton />}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden flex items-center space-x-4">
          {!isSignedIn && <SignInButton />}
          {isSignedIn && <UserButton />}
          <SearchBar />
          <button className="relative transition ease-in hover:text-color">
            <Link href="/cartpage">
              <FaShoppingCart className="text-xl cursor-pointer hover:text-Color" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 text-xs text-white p-2 bg-red-500 rounded-full w-3 h-3 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </button>

          {/* Hamburger Icon */}
          <button className="text-xl" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
  className={`lg:hidden fixed top-0 left-0 h-full bg-Background text-light w-3/4 max-w-sm p-6 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out z-30 ${
    mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <button
    className="absolute top-4 right-4 text-black text-2xl"
    onClick={toggleMobileMenu}
  >
    &times;
  </button>
  <Link href="/" className="block py-2 font-semibold hover:text-Color">
    Home
  </Link>
  <Link href="/shop" className="block py-2 font-semibold hover:text-Color">
    Shop
  </Link>
  <Link href="/about" className="block py-2 font-semibold hover:text-Color">
    About
  </Link>
  <Link href="/contact" className="block py-2 font-semibold hover:text-Color">
    Contact
  </Link>
  <Link href="/support" className="block py-2 font-semibold hover:text-Color">
    Pages
  </Link>
  <Link href="/pricing" className="block py-2 font-semibold hover:text-Color">
    Pricings
  </Link>
  {isAdmin && (
    <Link href="/admin" className="block py-2 font-semibold hover:text-red-500">
      Admin
    </Link>
  )}
</div>

    </nav>
  );
};

export default Navbar;
