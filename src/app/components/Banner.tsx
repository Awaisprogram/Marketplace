import React from "react";
import Image from "next/image";
import bannerImage from "../images/shop-hero-2-png-picture-1.png"; 
import Button from "./Button";
import Neutral from "./Neutral";
import { client } from "../../sanity/lib/client";

interface type {
  heading: string;
  description: string;
  subtext:string;
  price:number;
  imgUrl: string;
}

async function getData(){
  const res = client.fetch(
    `*[_type == "banner"]{
    subtext,
    heading,
    description,
    price,
    "imgUrl": image.asset->url}`
  )
  return res
}

const Banner = async() => {
  const data:type[] = await getData()
  return (
    <div>
      
      <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="text-white bg-dark pt-20 container mx-auto px-10 flex flex-col lg:flex-row items-center justify-around gap-20"
        >
          {/* Left Section: Text Content */}
          <div className="flex flex-col space-y-4 lg:items-start items-center w-full lg:w-1/2">
            <h5 className="text-lg uppercase font-semibold">{item.subtext}</h5>
            <h1 className="text-white lg:text-[58px] text-[40px] font-black mb-4 text-center lg:text-start">
              {item.heading}
            </h1>
            <p className="text-white lg:text-lg md:text-md sm:text-md text-center lg:text-start font-light mb-6">
              {item.description}
            </p>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold">{item.price}</span>
              <Button text="ADD TO CART" />
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="relative">
            <Image
              src={item.imgUrl}
              alt={item.heading}
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
     
    </div>
      <Neutral/>
      
    </div>
  );
};

export default Banner;
