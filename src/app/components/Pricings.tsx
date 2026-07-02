"use client";

import React from "react";
import PricingCard from "./PriceCard";

interface PricingSectionProps {
  isYearly?: boolean;
}

const pricingCards = [
  {
    title: "Basic Plan",
    monthlyPrice: 9.9,
    offers: [
      "5 Projects",
      "Basic Support",
      "Access to Tutorials",
      "Community Access",
      "Monthly Updates",
    ],
  },
  {
    title: "Pro Plan",
    monthlyPrice: 29.9,
    offers: [
      "20 Projects",
      "Priority Support",
      "Advanced Tools",
      "Custom Reports",
      "Dedicated Resources",
    ],
    isHighlighted: true,
  },
  {
    title: "Enterprise",
    monthlyPrice: 49.9,
    offers: [
      "Unlimited Projects",
      "24/7 Support",
      "Custom Solutions",
      "Team Management",
      "Analytics Dashboard",
    ],
  },
];

const PricingSection = ({ isYearly = false }: PricingSectionProps) => {
  return (
    <section className="overflow-hidden h-full lg:h-[300px]">
      <div className="max-w-[1320px] mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {pricingCards.map((card, index) => {
            const displayPrice = isYearly
              ? (card.monthlyPrice * 12 * 0.75).toFixed(1)
              : card.monthlyPrice.toFixed(1);

            return (
              <PricingCard
                key={index}
                title={card.title}
                price={displayPrice}
                offers={card.offers}
                isHighlighted={card.isHighlighted ?? false}
                isYearly={isYearly}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
