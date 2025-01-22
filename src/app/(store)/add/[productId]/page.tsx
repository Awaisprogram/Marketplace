'use client'

import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import Image from "next/image";
import { useCart } from "@/app/cartContext";

import CartTop from '@/app/components/CartTop';
import Quick from '@/app/components/Quick';
import Best from '@/app/components/BestSeller';
import Sponser from '@/app//components/Sponser';

interface Product {
  _id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
}

async function getProductById(productId: string) {
  const res = await client.fetch(
    `*[_type == "product" && _id == "${productId}"]{
      _id,
      name,
      price,
      "image": image.asset->url,
      description,
      currency
    }`
  );
  return res[0];  
}

const ProductDetails = () => {
  const { productId }: any = useParams(); 
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false); 
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const data = await getProductById(productId);
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-2xl font-semibold text-red-500">
        Something went wrong. Please try again later.
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-5xl font-bold">
        Loading...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    alert(`${product.name} added to cart`);
  };

  return (
   <>
    
     <section className="text-gray-600 body-font overflow-hidden">
       <div className="container px-5 py-24 mx-auto">
         <div className="lg:w-4/5 mx-auto flex flex-wrap">
           <div className="lg:w-1/2 w-full flex flex-col items-center relative">
             <Image
               alt="ecommerce"
               className="rounded-lg object-fit border p-5 cursor-pointer shadow-lg"
               src={product.image}
               width={500}
               height={500}
             />
           </div>
           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
             <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
             <div className="flex mb-4">
               <span className="flex items-center">
                 <FaStar className="w-4 h-4 text-yellow-500" />
                 <FaStar className="w-4 h-4 text-yellow-500" />
                 <FaStar className="w-4 h-4 text-yellow-500" />
                 <FaStar className="w-4 h-4 text-yellow-500" />
                 <FaStar className="w-4 h-4 text-gray-500" />
                 <span className="text-gray-600 ml-3">4 Reviews</span>
               </span>
             </div>
             <div className="py-4">
               <span className="font-bold text-2xl">${product.price}</span>
               <div className="font-bold mt-5 text-xl">
                 Availability : <span className="text-green-500">In Stock</span>
               </div>
             </div>
             <p className="leading-relaxed">
               {product.description}
             </p>
             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
               <div className="flex items-center">
                 <span className="mr-3">Color</span>
                 <button className="border-2 border-gray-300 rounded-full w-10 h-10 focus:outline-none" />
                 <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-10 h-10 focus:outline-none" />
                 <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-10 h-10 focus:outline-none" />
                 <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-10 h-10 focus:outline-none" />
               </div>
             </div>
             <div className="flex justify-center items-center">
               <button 
                 onClick={handleAddToCart}
                 className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                 Add to Cart
               </button>
               <div className="flex items-center space-x-4 ml-6">
                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                   <FaHeart className="w-5 h-5" />
                 </button>
                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                   <FaShoppingCart className="w-5 h-5" />
                 </button>
                 <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                   <FaEye className="w-5 h-5" />
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     <CartTop />
     <Quick />
     <Best />
     <Sponser />
   </>
  );
};

export default ProductDetails;
