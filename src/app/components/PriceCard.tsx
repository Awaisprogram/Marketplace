import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  price: string;
  offers: string[];
  isHighlighted?: boolean; 
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, offers, isHighlighted = false }) => {
  return (
    <div
      className={`p-6 mt-10 flex flex-col items-center text-center rounded lg:rounded-lg border-2 ${
        isHighlighted
          ? 'bg-black text-white border-black '
          : 'bg-white text-black border-Color'
      }`}
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      <h2 className="text-center pt-10 text-md mb-8 lg:px-5 px-20">
        Organize across all apps by hand
      </h2>
      <div className="relative mt-4 mb-6">
        <div className="flex items-center">
          <p className="text-6xl font-bold text-Color">{price}</p>
          <div className="flex flex-col items-center">
            <p className="text-Color -translate-x-1/2">$</p>
            <span className="text-Color text-sm">/month</span>
          </div>
        </div>
      </div>
      <ul className="space-y-4">
        {offers.map((offer, index) => (
          <li
            key={index}
            className="flex items-center gap-4 lg:gap-6"
          >
            <FaCheckCircle
              className={`rounded-full p-1 ${
                index < 3 ? 'text-green-500 bg-green-100' : 'text-gray-500'
              }`}
              size={index < 3 ? 32 : 28} 
            />
            <span className="text-lg lg:text-xl">{offer}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 rounded-md py-2 px-4 ${
          isHighlighted
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        Try for Free
      </button>
    </div>
  );
};

export default PricingCard;
