import React from "react";
import Image, { StaticImageData } from "next/image";
import p1 from '../images2/p1.png'
import p2 from '../images2/p2.png'
import p3 from '../images2/p3.png'
import p4 from '../images2/p4.png'
import p5 from '../images2/p5.png'
import p6 from '../images2/p6.png'
import p7 from '../images2/p7.png'
import p8 from '../images2/p2.png'


type Product = {
  name: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  image: StaticImageData; 
};

function Best() {
  const products: Product[] = [
    {
      name: "Graphic Designer",
      department: "English Department",
      originalPrice: "16.48",
      discountedPrice: "6.48",
      image: p1,
    },
    {
      name: "Web Developer",
      department: "Technology Department",
      originalPrice: "18.99",
      discountedPrice: "8.99",
      image: p2,
    },
    {
      name: "UI/UX Designer",
      department: "Design Department",
      originalPrice: "20.99",
      discountedPrice: "12.99",
      image: p3,
    },
    {
      name: "Product Manager",
      department: "Product Department",
      originalPrice: "25.99",
      discountedPrice: "15.99",
      image: p4,
    },
    {
      name: "Digital Marketer",
      department: "Marketing Department",
      originalPrice: "30.99",
      discountedPrice: "18.99",
      image: p5,
    },
    {
      name: "SEO Specialist",
      department: "SEO Department",
      originalPrice: "22.99",
      discountedPrice: "14.99",
      image: p6,
    },
    {
      name: "Content Writer",
      department: "Content Department",
      originalPrice: "14.99",
      discountedPrice: "9.99",
      image: p7,
    },
    {
      name: "UI/UX Designer",
      department: "Social Media Department",
      originalPrice: "19.99",
      discountedPrice: "10.99",
      image: p8,
    },
    {
      name: "Graphic Designer",
      department: "English Department",
      originalPrice: "16.48",
      discountedPrice: "6.48",
      image: p1,
    },
    {
      name: "Web Developer",
      department: "Technology Department",
      originalPrice: "18.99",
      discountedPrice: "8.99",
      image: p2,
    },
    {
      name: "UI/UX Designer",
      department: "Design Department",
      originalPrice: "20.99",
      discountedPrice: "12.99",
      image: p3,
    },
    {
      name: "Product Manager",
      department: "Product Department",
      originalPrice: "25.99",
      discountedPrice: "15.99",
      image: p4,
    },
  ];

  return (
    <div className="container mx-auto p-4 max-w-[1050px]">
      {/* Heading */}
      <div className="py-8 border-b">
        <h1 className="text-4xl font-bold">BESTSELLER PRODUCTS</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg p-4 flex flex-col items-center justify-center"
          >
            {/* Product Image */}
            <div className="relative w-full h-96 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover rounded"
              />
            </div>

            {/* Product Details */}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.department}</p>

            {/* Prices */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through">
                ${product.originalPrice}
              </span>
              <span className="text-green-500 font-semibold">
                ${product.discountedPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;
