import React from 'react';
import PricingCard from './PriceCard';

const PricingSection = () => {
  const pricingCards = [
    {
      title: "Basic Plan",
      price: "9.9",
      offers: ["5 Projects", "Basic Support", "Access to Tutorials", "Community Access", "Monthly Updates"],
    },
    {
      title: "Pro Plan",
      price: "29.9",
      offers: ["20 Projects", "Priority Support", "Advanced Tools", "Custom Reports", "Dedicated Resources"],
      isHighlighted: true,
    },
    {
      title: "Enterprise",
      price: "49.9",
      offers: ["Unlimited Projects", "24/7 Support", "Custom Solutions", "Team Management", "Analytics Dashboard"],
    },
  ];

  return (
    <section className="overflow-hidden h-full lg:h-[300px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {pricingCards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
