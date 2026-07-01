import React from "react";
import Image from "next/image";
import Button from "./Button";
import Neutral from "./Neutral";
import Link from "next/link";
import { client } from "../../sanity/lib/client";

interface type {
  heading: string;
  description: string;
  subtext: string;
  price: number;
  imgUrl: string;
}

async function getData() {
  const res = client.fetch(
    `*[_type == "banner"]{
    subtext,
    heading,
    description,
    price,
    "imgUrl": image.asset->url}`
  );
  return res;
}

const Banner = async () => {
  const data: type[] = await getData();
  return (
    <div>
      <div className="bg-dark">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-white mx-auto max-w-[1310px] p-4 pt-12 lg:pt-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
          >
            {/* Left Section: Text Content */}
            <div className="flex flex-col space-y-4 items-center lg:items-start w-full lg:w-1/2">
              <h5 className="text-base sm:text-lg uppercase font-semibold">
                {item.subtext}
              </h5>
              <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[58px] font-black mb-2 sm:mb-4 text-center lg:text-start leading-tight">
                {item.heading}
              </h1>
              <p className="text-white text-sm sm:text-base lg:text-lg text-center lg:text-start font-light mb-4 sm:mb-6">
                {item.description}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-xl sm:text-2xl font-semibold">
                  {item.price}
                </span>
                <Link href="/shop">
                  <Button text="SHOP NOW" />
                </Link>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="relative w-full sm:w-[400px] lg:w-1/2 aspect-square">
              <Image
                src={item.imgUrl}
                alt={item.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
      <Neutral />
    </div>
  );
};

export default Banner;