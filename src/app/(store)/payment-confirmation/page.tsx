'use client'; 

import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

export default function PaymentConfirmation() {
  const searchParams = useSearchParams(); 
  const sessionId = searchParams?.get('session_id');

  if (!sessionId || typeof sessionId !== 'string') {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-lg font-semibold text-red-600">Error: Invalid session ID!</p>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-800 p-8">
      {/* Go Back Button */}
      <Link
        href="/cartpage"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500 transition"
      >
        <FaArrowLeft />
        <span className="text-lg font-medium">Go Back</span>
      </Link>

      {/* Main Content */}
      <div className="bg-white p-10 rounded-lg border border-gray-300 w-full max-w-md dark:bg-gray-700 dark:text-gray-100">
        {/* Confirmation Header */}
        <div className="text-center">
          <FaCheckCircle className="text-green-500 text-7xl mb-4 flex justify-center items-center w-full" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Payment Successful!
          </h1>
          <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">
            Thank you for your order. Your payment has been confirmed.
          </p>
        </div>

        {/* Order Details */}
        <div className="mt-8">
          <p className="text-base text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Session ID:</span>
            <span className="block mt-1 text-sm font-mono text-gray-700 bg-gray-100 p-2 dark:text-gray-200 break-all">
              {sessionId}
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-8">
          <Link href="/shop">
            <button
              aria-label="button"
              className="w-full px-4 py-3 text-lg font-medium text-white bg-Color rounded-lg shadow hover:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              Continue Shopping
            </button>
          </Link>
          <Link href="/track">
            <button className="w-full px-4 py-3 text-lg font-medium text-white bg-green-400 rounded-lg shadow hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition">
              Track Your Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
