"use client";

import { useCart } from "@/app/cartContext";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";


const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  // Calculate the total price of the cart
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Increase item quantity
  const handleIncrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Decrease item quantity (minimum 1)
  const handleDecrement = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  // Delete item from cart
  const handleDelete = (id: number) => {
    removeFromCart(id);
  };

  // Navigate to the checkout form page
  const goToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="flex justify-center flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="text-4xl font-semibold">Your cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 h-[60dvh] flex justify-center items-center text-3xl font-bold">
         Your cart is empty
        </p>
      ) : (
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={150}
                  unoptimized
                  className="flex-shrink-0 object-contain w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-semibold leading-snug sm:pr-8">
                        {item.name}
                      </h3>
                      <p className="text-sm dark:text-gray-600">Classic</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center px-2 py-1 pl-0 space-x-1 cursor-pointer"
                    >
                      <AiOutlineDelete size={20} className="bg-gray-900 text-white" />
                    </button>
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <FaMinus />
                    </button>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}

          <div className="flex items-center flex-wrap justify-between pt-2">
            <button
              className="bg-Color py-2 px-6 text-white cursor-pointer hover:opacity-90 flex items-center justify-center"
              onClick={goToCheckout}
            >
              Place Order
            </button>
            <p className="text-xl font-bold text-gray-900">
              Total: ${getTotal().toFixed(2)}
            </p>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
