import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Colors from "./color";


interface type {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

async function getData() {
  const res = client.fetch(
    `*[_type == "product"][0...8]{
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
  const colors = ["blue", "green", "orange", "purple"];

  return (
    <div className="container mx-auto p-4 max-w-[1050px]">
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
      <div className="flex items-center  justify-center flex-wrap gap-2 mt-6">
        {data.map((product, index) => (

          <div
            key={index}
            className="rounded-lg p-4  flex flex-col items-center justify-center"
          >
            {/* Product Image */}
            <Link href={`/add/${product._id}`}>
            <div className="relative cursor-pointer lg:w-[200px] w-[260px] h-96 mb-4">

              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover rounded"
                />
            </div>
                </Link>

            {/* Product Details */}
            <h3 className="text-lg font-semibold">{product.name}</h3>

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
    </div>
  );
}

export default Features;
