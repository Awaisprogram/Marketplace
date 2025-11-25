'use client'

import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { FaStar, FaHeart, FaShoppingCart, FaShippingFast, FaShieldAlt, FaUndo, FaTruck, FaCheckCircle, FaEye } from 'react-icons/fa';
import Image from "next/image";
import { useCart } from "@/app/cartContext";
import { useEffect, useState } from "react";
import Best from '@/app/components/BestSeller';
import Sponser from '@/app/components/Sponser';
import LoadingSkeleton from "@/app/components/Loading";
import { useToastContext } from "@/app/toastContext";
import CartTop from '@/app/components/CartTop';

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
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [mainImage, setMainImage] = useState('');
  const { addToCart } = useCart(); 
  const { addToast } = useToastContext();

  const colors = [
    { name: 'White', class: 'bg-white' },
    { name: 'Blue', class: 'bg-blue-700' },
    { name: 'Green', class: 'bg-green-700' },
    { name: 'Orange', class: 'bg-orange-500' }
  ];

  // Mock reviews data
  const reviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Excellent product! Highly recommended.", date: "2024-11-20" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Good quality, fast shipping.", date: "2024-11-18" },
    { id: 3, name: "Mike Johnson", rating: 5, comment: "Love it! Worth every penny.", date: "2024-11-15" },
    { id: 4, name: "Sarah Williams", rating: 3, comment: "Decent product but could be better.", date: "2024-11-10" }
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const data = await getProductById(productId);
          setProduct(data);
          setMainImage(data.image);
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
        <h1 className="text-center">Something went wrong. Please try again later.</h1> 
      </div>
    );
  }

  if (!product) {
    return <LoadingSkeleton />;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    });
    addToast({
      title: "Confirmation",
      description: `${quantity} ${product.name}(s) added to cart`
    });
  };

  const estimatedDelivery = () => {
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 5));
    return deliveryDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">

            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex flex-col items-center relative">
              <div className="relative w-full max-w-md mb-4">
                <Image
                  alt={product.name}
                  className="rounded-2xl object-cover border-2 border-gray-200 p-6 cursor-pointer transition-all duration-300"
                  src={mainImage}
                  width={500}
                  height={500}
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  -30%
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                <div className="bg-white rounded-lg p-3 text-center shadow-md border border-gray-100">
                  <FaShippingFast className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-xs font-semibold text-gray-700">Free Shipping</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-md border border-gray-100">
                  <FaShieldAlt className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <p className="text-xs font-semibold text-gray-700">Secure Payment</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-md border border-gray-100">
                  <FaUndo className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <p className="text-xs font-semibold text-gray-700">Easy Returns</p>
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xs font-bold text-blue-600 tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  BRAND NAME
                </h2>
              </div>

              <h1 className="text-gray-900 text-3xl lg:text-4xl title-font font-bold mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-gray-600 ml-3 font-medium">4.0</span>
                <span className="text-gray-400 ml-2">({reviews.length} reviews)</span>
              </div>

              {/* Price */}
              <div className="py-4 border-y-2 border-gray-200">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-bold text-4xl text-gray-900">${product.price}</span>
                  <span className="text-xl text-gray-400 line-through">${(product.price * 1.3).toFixed(2)}</span>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    30% OFF
                  </span>
                </div>
                <div className="font-bold text-lg flex items-center gap-2">
                  Availability : 
                  <span className="text-green-600 flex items-center gap-1">
                    <FaCheckCircle className="w-4 h-4" /> In Stock
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  SKU: <span className="font-semibold">{product._id}</span>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-blue-50 rounded-lg p-4 my-4 border border-blue-100">
                <div className="flex items-center gap-2 text-blue-700">
                  <FaTruck className="w-5 h-5" />
                  <span className="font-semibold">Estimated Delivery: {estimatedDelivery()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 ml-7">Free shipping on orders over $50</p>
              </div>

              {/* Description */}
              <p className="leading-relaxed text-gray-700 text-base mb-6">
                {product.description}
              </p>

              {/* Color selection */}
              <div className="flex items-center pb-6 border-b-2 border-gray-200">
                <span className="mr-4 font-semibold text-gray-900">Color:</span>
                {colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`border-2 ${selectedColor === idx ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-300'} ${color.class} rounded-full w-10 h-10 ml-2 transition-all duration-200 hover:scale-110`}
                    title={color.name}
                  />
                ))}
                <span className="ml-3 text-gray-600">{colors[selectedColor].name}</span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-6 mb-6">
                <span className="font-semibold text-gray-900">Quantity:</span>
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 font-bold text-gray-700 hover:bg-gray-100 transition-colors">-</button>
                  <span className="px-6 py-2 font-semibold border-x-2 border-gray-300">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 font-bold text-gray-700 hover:bg-gray-100 transition-colors">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-Color text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2">
                  <FaShoppingCart className="w-5 h-5" />
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

      {/* Additional Sections */}
      <CartTop/>
      <Best />
      <Sponser />
    </>
  );
};

export default ProductDetails;
