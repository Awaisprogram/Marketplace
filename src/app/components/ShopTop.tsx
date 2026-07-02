"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s5 from "../images/s5.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import { MdWindow } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import Navigation from "./Navigation";
import Colors from "./color";
import SortDropdown, { SortOption } from "./SortDropdown";

interface Product {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
  category: string;
}

interface ShopTopProps {
  products?: Product[] | null;
}

type ViewMode = "grid" | "list";

const categories = [
  { key: "women", label: "Women", image: s1 },
  { key: "men", label: "Men", image: s2 },
  { key: "accessories", label: "Accessories", image: s3 },
  { key: "kids", label: "Kids", image: s4 },
  { key: "sale", label: "Sale", image: s5 },
];

function ShopTop({ products = [] }: ShopTopProps) {
  const safeProducts = Array.isArray(products) ? products : [];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>("grid");
  const [sortBy, setSortBy] = useState<SortOption>("popularity");

  const filteredData = useMemo(() => {
    let data = activeCategory
      ? safeProducts.filter((p) => p.category === activeCategory)
      : [...safeProducts];

    switch (sortBy) {
      case "price-low":
        data = [...data].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        data = [...data].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        data = [...data].sort((a, b) => b._id - a._id);
        break;
      default:
        break;
    }
    return data;
  }, [safeProducts, activeCategory, sortBy]);

  const countForCategory = (key: string) =>
    safeProducts.filter((p) => p.category === key).length;

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: wire this to your real cart logic (context/store/API call)
    console.log("Add to cart:", product.name);
  };

  return (
    <div className="max-w-[1310px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-10">
        <h1 className="text-2xl font-black text-black">Shop</h1>
        <Navigation current="Shop" />
      </div>

      {/* Category filter grid */}
      <div className="text-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 px-5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() =>
                  setActiveCategory(isActive ? null : cat.key)
                }
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "ring-4 ring-Color ring-offset-2"
                    : "hover:opacity-90"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 text-center">
                  <h2 className="text-base font-bold uppercase">{cat.label}</h2>
                  <span className="text-sm">
                    {countForCategory(cat.key)} Item
                    {countForCategory(cat.key) !== 1 ? "s" : ""}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {activeCategory && (
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className="mt-4 text-sm text-Color underline hover:opacity-80"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex justify-between flex-wrap items-center gap-4 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            Showing {filteredData.length} result
            {filteredData.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex gap-3 items-center">
          <button
            type="button"
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            onClick={() => setView("grid")}
            className={`flex items-center justify-center w-10 h-10 border rounded-md transition-colors duration-200 ${
              view === "grid"
                ? "bg-Color border-Color text-white"
                : "border-gray-300 text-gray-600 hover:border-Color hover:text-Color"
            }`}
          >
            <span className="text-lg">
              <MdWindow />
            </span>
          </button>

          <button
            type="button"
            aria-label="List view"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
            className={`flex items-center justify-center w-10 h-10 border rounded-md transition-colors duration-200 ${
              view === "list"
                ? "bg-Color border-Color text-white"
                : "border-gray-300 text-gray-600 hover:border-Color hover:text-Color"
            }`}
          >
            <span className="text-lg">
              <TbListCheck />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <SortDropdown value={sortBy} onChange={setSortBy} />
          <button
            type="button"
            className="px-4 py-2 bg-Color text-white text-sm rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Products */}
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-400 py-16">
          No products found in this category.
        </p>
      ) : (
        <div
          className={
            view === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-7 px-5 pb-16"
              : "flex flex-col gap-4 px-5 pb-16"
          }
        >
          {filteredData.map((product) =>
            view === "grid" ? (
              <Link
                key={product._id}
                href={`/add/${product._id}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  

                  {/* Gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Slide-up Add to Cart */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product)}
                      className="inline-flex items-center gap-2 bg-white text-black text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-full shadow-lg hover:bg-Color hover:text-white transition-colors duration-300"
                    >
                      <FiShoppingCart className="text-sm" />
                      Add to cart
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-center text-sm sm:text-base truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {product.subtext}
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2 mt-2">
                    <span className="text-green-500 text-center font-semibold">
                      ${product.price}
                    </span>
                    <Colors />
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                key={product._id}
                href={`/add/${product._id}`}
                className="group flex items-center gap-4 border border-gray-100 rounded-xl p-3 bg-white transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400">{product.subtext}</p>
                  <span className="font-bold text-sm sm:text-base">
                    ${product.price}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Add to cart"
                  onClick={(e) => handleAddToCart(e, product)}
                  className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-Color hover:text-white hover:border-Color"
                >
                  <FiShoppingCart className="text-base" />
                </button>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ShopTop;