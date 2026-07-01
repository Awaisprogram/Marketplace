import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Colors from "./color";
import Button from "./Button";

interface type {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

async function getData() {
  const res = client.fetch(
    `*[_type == "product"][0...4]{
      _id,
      name,
      subtext,
      price,
      "image": image.asset->url
    }`
  );
  return res;
}

async function Features() {
  const data: type[] = await getData();

  return (
    <div className="mx-auto p-4 max-w-[1310px] mb-20">
      {/* Heading */}
      <div>
        <Heading
          title="BESTSELLER PRODUCTS"
          subtitle="Featured Products"
          paragraph="Problems trying to resolve the conflict between"
          className="para"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {data.map((product) => (
          <div
            key={product._id}
            className="rounded-lg p-2 sm:p-4 flex flex-col items-center justify-center w-full"
          >
            {/* Product Image */}
            <Link href={`/add/${product._id}`} className="w-full">
              <div className="relative cursor-pointer w-full aspect-[3/4] mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover rounded"
                />
              </div>
            </Link>

            {/* Product Details */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center">
              {product.name}
            </h3>

            {/* Prices */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-500 font-semibold">
                ${product.price}
              </span>
            </div>

            {/* Color Options */}
            <Colors />
          </div>
        ))}
      </div>

      {/* Shop More Button */}
      <div className="flex justify-center mt-10">
        <Link href="/shop">
          <Button text="SHOP MORE" />
        </Link>
      </div>
    </div>
  );
}

export default Features;