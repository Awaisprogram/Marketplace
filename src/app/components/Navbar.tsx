"use client";

import {
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from "../cartContext";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import SearchBar from "./searchbar";

const shopCategories = [
  { label: "All products", value: "" },
  { label: "Women", value: "women" },
  { label: "Men", value: "men" },
  { label: "Accessories", value: "accessories" },
  { label: "Kids", value: "kids" },
  { label: "Sale", value: "sale" },
];

const Navbar = () => {
  const { cartItemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { isSignedIn, user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-Background lg:h-[78px] flex justify-between items-center relative z-20">
      <div className="max-w-[1310px] mx-auto w-full p-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="flex justify-center items-center gap-10 lg:gap-20">
          <Link href="/" className="text-2xl font-black text-black">
            Bandage
          </Link>

          {/* Navbar Links - Desktop Version */}
          <div className="hidden lg:flex text-sm space-x-8 items-center">
            <Link href="/" className="font-bold hover:text-Color transition ease duration-500">
              Home
            </Link>

            {/* Shop dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setShopDropdownOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={shopDropdownOpen}
                className="hover:text-Color font-bold flex justify-center items-center gap-2 transition ease duration-500"
              >
                Shop
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    shopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-3 w-48 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top ${
                  shopDropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {shopCategories.map((cat) => (
                  <Link
                    key={cat.value || "all"}
                    href={cat.value ? `/shop?category=${cat.value}` : "/shop"}
                    onClick={() => setShopDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-Color transition-colors duration-200"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

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
        className={`lg:hidden fixed top-0 left-0 h-full bg-Background text-light w-3/4 max-w-sm p-6 flex flex-col justify-center items-center gap-1 transition-transform duration-300 ease-in-out z-30 overflow-y-auto ${
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

        {/* Mobile Shop dropdown */}
        <div className="w-full flex flex-col items-center">
          <button
            type="button"
            onClick={() => setMobileShopOpen((prev) => !prev)}
            className="flex items-center gap-2 py-2 font-semibold hover:text-Color"
          >
            Shop
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                mobileShopOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`flex flex-col items-center overflow-hidden transition-all duration-300 ${
              mobileShopOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {shopCategories.map((cat) => (
              <Link
                key={cat.value || "all"}
                href={cat.value ? `/shop?category=${cat.value}` : "/shop"}
                onClick={() => {
                  setMobileShopOpen(false);
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 text-sm text-gray-600 hover:text-Color"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>

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