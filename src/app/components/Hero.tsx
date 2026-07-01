import React from "react";
import Button from "./Button";
import { client } from "../../sanity/lib/client";
import Link from "next/link";

interface type {
  heading: string;
  description: string;
  subtext: string;
  imgUrl: string;
}

async function getData() {
  const res = client.fetch(
    `*[_type == "hero"]{
    subtext,
    heading,
    description,
    "imgUrl": image.asset->url}`
  );
  return res;
}

async function Hero() {
  const data: type[] = await getData();

  return (
    <section className="relative bg-[#23A6F0] w-full min-h-[450px] lg:h-[700px] xl:h-[900px] flex items-center overflow-hidden">
      {data.map((item, index) => (
        <div key={index} className="relative w-full h-full">
          {/* Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain sm:bg-cover bg-bottom sm:bg-right-bottom z-0"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          />

          {/* Content, aligned to same container as sections below */}
          <div className="relative z-10 mx-auto max-w-[1310px] p-4 h-full flex items-center">
            <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
              {/* Small Heading */}
              <h3 className="text-white text-sm sm:text-base mb-3 sm:mb-4 font-bold uppercase tracking-wide">
                {item.subtext}
              </h3>

              {/* Big Heading */}
              <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[58px] font-black mb-4 leading-tight">
                {item.heading}
              </h1>

              {/* Paragraph */}
              <p className="text-white text-sm sm:text-base lg:text-xl font-light mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
                {item.description}
              </p>

              {/* Button */}
              <div className="flex justify-center lg:justify-start">
                <Link href="/shop">
                  <Button text="SHOP NOW" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;