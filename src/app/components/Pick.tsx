import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import img1 from "../images/filter.png";
import img2 from "../images/filter (1).png";
import img5 from "../images/pick.png";
import img4 from "../images/filter (3).png";

const items = [
  { img: img1, label: "MEN", category: "men" },
  { img: img2, label: "WOMEN", category: "women" },
  { img: img5, label: "ACCESSORIES", category: "accessories" },
  { img: img4, label: "KIDS", category: "kids" },
];

function Pick() {
  return (
    <div className="mx-auto p-4 max-w-[1310px]">
      <div>
        <Heading
          title="EDITORS PICK"
          paragraph="Problems trying to resolve the conflict between "
          className="para"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 mt-6">
        {/* Image 1: MEN */}
        <Link
          href={`/shop?category=${items[0].category}`}
          className="group relative overflow-hidden w-full lg:flex-[2.1] h-[280px] sm:h-[350px] lg:h-[500px] block"
        >
          <Image
            src={items[0].img}
            alt={items[0].label}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base group-hover:bg-Color group-hover:text-white transition duration-300 z-10">
            {items[0].label}
          </span>
        </Link>

        {/* Image 2: WOMEN */}
        <Link
          href={`/shop?category=${items[1].category}`}
          className="group relative overflow-hidden w-full lg:flex-1 h-[280px] sm:h-[350px] lg:h-[500px] block"
        >
          <Image
            src={items[1].img}
            alt={items[1].label}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 20vw"
          />
          <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base group-hover:bg-Color group-hover:text-white transition duration-300 z-10">
            {items[1].label}
          </span>
        </Link>

        {/* Images 3 & 4: ACCESSORIES / KIDS */}
        <div className="flex flex-row lg:flex-col gap-4 w-full lg:flex-1">
          <Link
            href={`/shop?category=${items[2].category}`}
            className="group relative overflow-hidden w-1/2 lg:w-full h-[140px] sm:h-[170px] lg:h-[242px] block"
          >
            <Image
              src={items[2].img}
              alt={items[2].label}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
            <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white text-black px-2 sm:px-6 md:px-8 py-1 sm:py-3 text-[10px] sm:text-sm md:text-base group-hover:bg-Color group-hover:text-white transition duration-300 z-10">
              {items[2].label}
            </span>
          </Link>

          <Link
            href={`/shop?category=${items[3].category}`}
            className="group relative overflow-hidden w-1/2 lg:w-full h-[140px] sm:h-[170px] lg:h-[242px] block"
          >
            <Image
              src={items[3].img}
              alt={items[3].label}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
            <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white text-black px-2 sm:px-6 md:px-8 py-1 sm:py-3 text-[10px] sm:text-sm md:text-base group-hover:bg-Color group-hover:text-white transition duration-300 z-10">
              {items[3].label}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pick;