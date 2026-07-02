"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/cartContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  FiHome,
  FiPackage,
  FiChevronDown,
  FiHeadphones,
  FiCopy,
  FiCheck,
  FiMail,
  FiTruck,
  FiBox,
} from "react-icons/fi";

const timeline = [
  {
    icon: FiCheck,
    title: "Order confirmed",
    description: "We've received your order and payment.",
    status: "done",
  },
  {
    icon: FiBox,
    title: "Preparing your order",
    description: "Your items are being picked and packed.",
    status: "current",
  },
  {
    icon: FiTruck,
    title: "On its way",
    description: "You'll get a tracking link once it ships.",
    status: "upcoming",
  },
  {
    icon: FiHome,
    title: "Delivered",
    description: "Estimated delivery in 3-5 business days.",
    status: "upcoming",
  },
];

const faqs = [
  {
    q: "When will I get my confirmation email?",
    a: "It should arrive within a few minutes. If you don't see it, check your spam folder or contact support with your order reference.",
  },
  {
    q: "Can I still change my order?",
    a: "If your order hasn't shipped yet, contact support as soon as possible and we'll do our best to update it before it's packed.",
  },
  {
    q: "How do I track my package?",
    a: "Once your order ships, you'll receive a tracking link by email. You can also check status anytime on the Track Order page.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day return window on unused items in original packaging. Visit our returns page for full details.",
  },
];

function PaymentConfirmationPage() {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const handleCopy = () => {
    if (!sessionId) return;
    navigator.clipboard.writeText(sessionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-green-50/40 to-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="max-w-[900px] mx-auto px-4 py-12 sm:py-16">
        {/* Hero card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 sm:p-10 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Payment Successful!
            </h1>
            <p className="text-green-100 mt-2 text-sm sm:text-base">
              Your order has been confirmed
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <p className="text-gray-700 text-lg font-medium">
                Thank you for your purchase! 🎉
              </p>
              <p className="text-gray-500 text-sm mt-2">
                We've sent a confirmation email with your order details.
              </p>
            </div>

            {/* Order reference */}
            {sessionId && (
              <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-gray-500 block mb-1">
                    Order Reference
                  </span>
                  <span className="text-sm font-mono text-gray-700">
                    {sessionId.slice(0, 16)}...
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-green-400 hover:text-green-600 transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-green-500" /> Copied
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3 max-w-sm mx-auto">
              <Link
                href="/tracking"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold"
              >
                <FiPackage className="w-5 h-5" />
                Track Order
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 py-3 px-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <FiHome className="w-5 h-5" />
                Go to Home
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
            { path: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", label: "Secure Payment", color: "blue" },
            { path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Fast Delivery", color: "purple" },
            { path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Quality Guaranteed", color: "orange" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  item.color === "blue"
                    ? "bg-blue-100 text-blue-600"
                    : item.color === "purple"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                </svg>
              </div>
              <p className="text-xs text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* What happens next — timeline */}
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-8 "
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            What happens next
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Here's the journey your order takes from here.
          </p>

          <div className="space-y-0">
            {timeline.map((step, i) => (
              <div key={i} className="flex gap-4">
                {/* Icon + connecting line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.status === "done"
                        ? "bg-green-500 text-white"
                        : step.status === "current"
                        ? "bg-green-100 text-green-600 ring-4 ring-green-50"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  {i < timeline.length - 1 && (
                    <div
                      className={`w-0.5 flex-1 min-h-[32px] ${
                        step.status === "done" ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>

                {/* Text */}
                <div className={i < timeline.length - 1 ? "pb-6" : ""}>
                  <p
                    className={`text-sm sm:text-base font-semibold ${
                      step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                    {step.status === "current" && (
                      <span className="ml-2 text-[10px] font-bold uppercase bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                        In progress
                      </span>
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation email note */}
        <div
          className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-8 "
          style={{ animationDelay: "300ms" }}
        >
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <FiMail className="text-blue-600 text-lg" />
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-800">
              Check your inbox
            </p>
            <p className="text-xs sm:text-sm text-blue-600 mt-1 leading-relaxed">
              A confirmation email with your receipt and order details is on its way. Don't see it in a few minutes? Check your spam folder or reach out to support.
            </p>
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
                        isOpen ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {item.q}
                    </span>
                    <FiChevronDown
                      className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-green-600" : ""
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
              <p className="text-white font-semibold">Questions about your order?</p>
              <p className="text-gray-400 text-sm">
                Our support team is here to help anytime.
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

export default PaymentConfirmationPage;