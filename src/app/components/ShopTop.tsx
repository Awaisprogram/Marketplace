import React from "react";
import Image from "next/image";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s5 from "../images/s5.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import Products from "./Product";
import { MdWindow } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";
import Navigation from "./Navigation";

function ShopTop() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-10 max-w-[1050px] container mx-auto">
        <h1 className="text-xl font-black text-black">Shop</h1>
        <Navigation current="Shop"/>
      </div>

      <div className="text-center py-10 max-w-[1050px] container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 px-5">
          {/* Image 1 */}
          <div className="relative">
            <Image
              src={s1}
              alt="Clothes Item 1"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-lg"
              unoptimized
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 text-center">
              <h1 className="text-base font-bold">CLOTHES</h1>
              <span className="text-sm">5 Item</span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <Image
              src={s2}
              alt="Clothes Item 2"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 text-center">
              <h1 className="text-base font-bold">CLOTHES</h1>
              <span className="text-sm">5 Item</span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <Image
              src={s3}
              alt="Clothes Item 3"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 text-center">
              <h1 className="text-base font-bold">CLOTHES</h1>
              <span className="text-sm">5 Item</span>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative">
            <Image
              src={s4}
              alt="Clothes Item 4"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 text-center ">
              <h1 className="text-base font-bold">CLOTHES</h1>
              <span className="text-sm">5 Item</span>
            </div>
          </div>

          {/* Image 5 */}
          <div className="relative">
            <Image
              src={s5}
              alt="Clothes Item 5"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs px-2 py-1 text-center">
              <h1 className="text-base font-bold">CLOTHES</h1>
              <span className="text-sm">5 Item</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center div */}
      <div className="flex  justify-between flex-wrap items-center px-5 py-4 max-w-[1050px] container mx-auto ">
        <div className="flex items-center gap-2">
          <span className="text-sm">Showing all 12 results</span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center w-10 h-10  border rounded-md">
            <span className="text-lg font-bold cursor-pointer">
              <MdWindow />
            </span>
          </div>

          <div className="flex items-center justify-center w-10 h-10  border rounded-md">
            <span className="text-lg font-bold cursor-pointer">
              <TbListCheck />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select className="px-3 py-1 border rounded-md text-sm">
            <option value="popularity">Popularity</option>
            <option value="Featured">Featured</option>
          </select>
          <button className="px-4 py-2 bg-Color text-white text-sm rounded-md">
            Filter
          </button>
        </div>
      </div>

      {/* Products */}
      <Products />
      
    </>
  );
}

export default ShopTop;
