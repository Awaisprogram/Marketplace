import React from "react";
import Navigation from "./Navigation";
import Toggle from "./Toggle";
import Pricings from "./Pricings";
import Sponser from "./Sponser";
import Faq from "./Faq";
import Trial from "./Trial";

function PriceTop() {
  return (
    <>
      <div className="container mx-auto p-24 max-w-[1050px] flex flex-col items-center justify-center leading-relaxed">
        <h3 className="text-black1 text-base mb-4 font-bold">PRICING</h3>

        {/* Big Heading */}
        <h1 className="text-black lg:text-[58px] text-center text-[40px]  font-black mb-4">
          Simple Pricing
        </h1>
        <Navigation current="Pricing" />
      </div>
      <div className="bg-Background text-center">
        <h1 className="text-black lg:text-[58px] text-[40px]  font-black1 mb-4">
          Pricing
        </h1>

        {/* Paragraph */}
        <p className="text-black lg:text-lg md:text-md sm:text-sm font-light mb-6 leading-relaxed">
          Problems trying to resolve the conflict between
          <br className="lg:block" />
          two major realms of Classical physics:
          <br className="block lg:hidden" />
          Newtonaian mechanics
        </p>

        <div className="flex flex-wrap justify-center items-center container mx-auto p-2 lg:p-24 max-w-[1050px] ">
          <div className="flex items-center justify-between gap-5 px-4 w-full">
            {/* Monthly and Toggle */}
            <div className="flex items-center gap-5">
              <h1 className="font-bold text-lg">Monthly</h1>
              <Toggle />
            </div>

            {/* Yearly and Save 25% */}
            <div className="flex items-center gap-5">
              <h1 className="font-bold">Yearly</h1>
              <span className="bg-blue-300 text-black px-8 py-4 rounded-full">
                Save 25%
              </span>
            </div>
          </div>

          <Pricings />
          <Sponser heading="Trusted By Over 4000 Big Companies" />
          <Faq />
        </div>
        <Trial />
      </div>
    </>
  );
}

export default PriceTop;
