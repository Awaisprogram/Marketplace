"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import { FaChevronRight } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    question: "This is the first paragraph on the left side.",
    answer:
      "This is the additional information related to the first paragraph on the left side.",
  },
  {
    question: "This is the second paragraph on the left side.",
    answer:
      "This is the additional information related to the second paragraph on the left side.",
  },
  {
    question: "This is the third paragraph on the left side.",
    answer:
      "This is the additional information related to the third paragraph on the left side.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    question: "This is the first paragraph on the right side.",
    answer:
      "This is the additional information related to the first paragraph on the right side.",
  },
  {
    question: "This is the second paragraph on the right side.",
    answer:
      "This is the additional information related to the second paragraph on the right side.",
  },
  {
    question: "This is the third paragraph on the right side.",
    answer:
      "This is the additional information related to the third paragraph on the right side.",
  },
];

function FaqAccordionItem({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 text-left group"
      >
        <FaChevronRight
          className={`text-base sm:text-lg text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-90 text-Color" : ""
          }`}
        />
        <p
          className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
            isOpen ? "text-Color" : "text-gray-900 group-hover:text-Color"
          }`}
        >
          {item.question}
        </p>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600 pl-7 sm:pl-8 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

function Faq() {
  // store as "left-0", "right-2", etc so left/right open independently
  const [openKey, setOpenKey] = useState<string | null>("left-0");

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <div>
        <Heading
          title="Pricing FAQS"
          paragraph="Problems trying to resolve the conflict between two major realms of Classical physics: Newtonian mechanics."
        />
      </div>

      <div className="max-w-[1310px] mx-auto p-4 sm:p-8">
        {/* Bold Line */}
        <div className="border-t-4 border-black mb-8"></div>

        {/* Paragraphs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {/* Left Section */}
          <div className="w-full">
            {leftFaqs.map((item, i) => (
              <FaqAccordionItem
                key={`left-${i}`}
                item={item}
                isOpen={openKey === `left-${i}`}
                onClick={() => toggle(`left-${i}`)}
              />
            ))}
          </div>

          {/* Right Section */}
          <div className="w-full">
            {rightFaqs.map((item, i) => (
              <FaqAccordionItem
                key={`right-${i}`}
                item={item}
                isOpen={openKey === `right-${i}`}
                onClick={() => toggle(`right-${i}`)}
              />
            ))}
          </div>
        </div>

        <div className="text-center py-16">
          <h1 className="font-bold text-lg">Have not got your Answer?</h1>
          <p className="mt-2">
            Contact our{" "}
            <a href="/contact" className="text-Color hover:underline font-semibold">
              support
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Faq;