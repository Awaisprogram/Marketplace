"use client";

import React, { useState } from "react";
import { useCart } from "@/app/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getProductById } from "@/app/utils/api";
import { useToastContext } from "@/app/toastContext";
import { v4 as uuidv4 } from 'uuid';

function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToastContext();

  // State to store order details
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  // State to indicate that the order was placed successfully
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle placing the order
  const handlePlaceOrder = async () => {
    if (!cartItems.length) {
      addToast({
        title: "Warning",
        description: "Your cart is empty. Add items to place an order."
      });
      return;
    }
  
    setLoading(true); // Set loading state
  
    const orderData = {
      _type: "order",
      firstName: orderDetails.firstName,
      lastName: orderDetails.lastName,
      address: orderDetails.address,
      city: orderDetails.city,
      zipCode: orderDetails.zipCode,
      phone: orderDetails.phone,
      email: orderDetails.email,
      cartItems: cartItems.map((item) => ({
        _key: uuidv4(),
        product: { _type: "reference", _ref: item.id },
        quantity: item.quantity,
      })),
      total: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      orderDate: new Date().toISOString(),
    };
  
    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating order:", errorData.error);
        addToast({
          title: "Error",
          description: "Failed to place the order. Please try again."
        });
        return;
      }
  
      addToast({
        title: "Confirmation",
        description: "Order placed successfully!"
      });
      setOrderPlaced(true);
    } catch (error) {
      console.error("Error creating order:", error);
      addToast({
        title: "Error",
        description: "Failed to place the order. Please try again."
      });
    } finally {
      setLoading(false); 
    }
  };
  

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const products = await Promise.all(
        cartItems.map(async (item) => {
          const product = await getProductById(item.id.toString());
          return {
            name: product.name,
            amount: product.price * 100,
            currency: product.currency || "usd",
            quantity: item.quantity,
          };
        })
      );

      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      });

      if (response.ok) {
        const { url } = await response.json();
        router.push(url);
      } else {
        const error = await response.json();
        console.error("Checkout Error:", error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Cart Summary */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-700 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Column: Checkout Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                value={orderDetails.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={orderDetails.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={orderDetails.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={orderDetails.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code:
              </label>
              <input
                type="text"
                name="zipCode"
                value={orderDetails.zipCode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
          {/* Place Order button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            
            {loading ? "Processing..." : "Place Order"}
          </button>

          {/* Conditionally render the Checkout button after order is placed */}
          {orderPlaced && (
            <button
              onClick={handleCheckout}
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {loading ? "Processing..." : "Checkout"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;