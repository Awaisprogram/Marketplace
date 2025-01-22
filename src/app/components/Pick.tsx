import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import img1 from "../images/filter.png";
import img2 from "../images/filter (1).png";
import img5 from "../images/pick.png";
import img4 from "../images/filter (3).png";




 function Pick() {
  return (
    <div className="bg-gray-100">
      <div>
        <Heading
          title="EDITORS PICK"
          paragraph="Problems trying to resolve the conflict between "
          className="para"
        />
      </div>

      <div className="container mx-auto p-4 max-w-[1050px]">
        {/* Image Layout Section */}
        <div className="flex justify-center items-center lg:flex-row flex-col gap-4">
          {/* Image 1: 510x500 */}
          <div className="relative  overflow-hidden">
            <Image src={img1} alt="Image 1" className="custom-img" />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-base hover:bg-Color hover:text-white transition duration-300">
              MEN
            </button>
          </div>

          {/* Image 2: 240x500 */}
          <div className="relative  overflow-hidden">
            <Image src={img2} alt="Image 2" className="custom-img" />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-base hover:bg-Color hover:text-white transition duration-300">
              WOMEN
            </button>
          </div>

          {/* Images 3 and 4: 240x240 each */}
          <div className="flex  lg:flex-col flex-row gap-4">
            {/* Image 3 */}
            <div className="relative  overflow-hidden">
              <Image src={img5} alt="Image 3" className="custom-img" />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-base hover:bg-Color hover:text-white transition duration-300">
                ACCESSORIES
              </button>
            </div>
            {/* Image 4 */}
            <div className="relative  overflow-hidden">
              <Image src={img4} alt="Image 4" className="custom-img" />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-base hover:bg-Color hover:text-white transition duration-300">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pick;
