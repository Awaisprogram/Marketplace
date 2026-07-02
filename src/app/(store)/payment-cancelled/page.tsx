"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiShoppingBag,
  FiRefreshCw,
  FiShield,
  FiClock,
  FiChevronDown,
  FiCreditCard,
  FiHeadphones,
} from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";

const reasons = [
  {
    title: "Payment window closed",
    description: "You pressed the back button or closed the payment tab before it finished processing.",
  },
  {
    title: "Session timed out",
    description: "Checkout sessions expire after a period of inactivity for your security.",
  },
  {
    title: "Card declined",
    description: "Your bank may have flagged the transaction. Try a different card or contact your bank.",
  },
  {
    title: "Insufficient funds",
    description: "The transaction couldn't complete due to available balance or credit limit.",
  },
];

const faqs = [
  {
    q: "Was I charged anything?",
    a: "No. Since the payment was cancelled before completion, no charge was made to your card or account. If you do see a pending charge, it will automatically drop off within 3-5 business days.",
  },
  {
    q: "Is my cart still saved?",
    a: "Yes, everything you added is still in your cart. You can pick up right where you left off by clicking 'Try Again' below.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, PayPal, and Apple Pay. If one method isn't working, try switching to another at checkout.",
  },
  {
    q: "Who do I contact if this keeps happening?",
    a: "Reach out to our support team via the contact page or live chat, and we'll help you complete your order manually if needed.",
  },
];

function PaymentCancelledPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-red-50/40 to-white">
      {/* Decorative background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="max-w-[900px] mx-auto px-4 py-12 sm:py-16">
        {/* Hero card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ">
          <div className="bg-gradient-to-r from-red-500 to-rose-600 p-8 sm:p-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-10 h-10 text-red-500 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Payment Cancelled</h1>
            <p className="text-red-100 mt-2 text-sm sm:text-base">
              Your order wasn't processed — but nothing is lost.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <p className="text-gray-700 text-lg font-medium">
                Don't worry, no charge was made.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Your cart items are still saved. You can return to checkout anytime.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 max-w-sm mx-auto">
              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-6 rounded-xl hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold"
              >
                <FiRefreshCw className="w-5 h-5" />
                Try Again
              </Link>

              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <FiShoppingBag className="w-5 h-5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="grid grid-cols-3 gap-4 mt-8 "
          style={{ animationDelay: "100ms" }}
        >
          {[
            { icon: FiShield, label: "Secure Payment", color: "blue" },
            { icon: FiClock, label: "No Charge Made", color: "green" },
            { icon: FiShoppingBag, label: "Cart Saved", color: "purple" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  item.color === "blue"
                    ? "bg-blue-100 text-blue-600"
                    : item.color === "green"
                    ? "bg-green-100 text-green-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-xs text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Why did this happen */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-8 "
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            Why might this happen?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            A few common reasons payments get interrupted.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    {reason.title}
                  </p>
                  <p className="text-xs text-amber-600 mt-1 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment methods */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-8 "
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <FiCreditCard className="text-Color text-xl" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Try a different payment method
            </h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            If one method doesn't work, switching often resolves the issue instantly.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 hover:border-Color transition-colors duration-200">
              <FaCcVisa className="text-2xl text-blue-700" />
              <span className="text-sm font-medium text-gray-700">Visa</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 hover:border-Color transition-colors duration-200">
              <FaCcMastercard className="text-2xl text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Mastercard</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 hover:border-Color transition-colors duration-200">
              <FaCcPaypal className="text-2xl text-blue-500" />
              <span className="text-sm font-medium text-gray-700">PayPal</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2.5 hover:border-Color transition-colors duration-200">
              <FaCcApplePay className="text-2xl text-gray-800" />
              <span className="text-sm font-medium text-gray-700">Apple Pay</span>
            </div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-8 "
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                        isOpen ? "text-Color" : "text-gray-800"
                      }`}
                    >
                      {item.q}
                    </span>
                    <FiChevronDown
                      className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-Color" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-500 leading-relaxed pr-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Support banner */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 mt-8 "
          style={{ animationDelay: "500ms" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FiHeadphones className="text-white text-xl" />
            </div>
            <div>
              <p className="text-white font-semibold">Still having trouble?</p>
              <p className="text-gray-400 text-sm">
                Our support team can help you complete your order.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-white text-gray-900 text-sm font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancelledPage;