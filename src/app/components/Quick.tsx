import React from 'react';
import Image from 'next/image';
import img from '../images/image.png';
import { FaChevronRight } from "react-icons/fa";

function Quick() {
  // Array for repeated content
  const repeatedContent = [
    "The quick fox jumps over the lazy dog.",
    "Met minim molile not desert Alamo Lorem ipsum dolor sit.",
    "Distinctio doloremque explicabo eius voluptatem.",
    "Voluptas impedit maxime velit, aperiam adipisci aspernatur."
  ];

  return (
    <div className="py-24 px-4 container mx-auto max-w-[1050px]">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Image Section */}
        <div className="flex justify-center">
          <Image src={img} alt="Quick Fox" className="rounded-lg w-full max-w-[300px]" />
        </div>

        {/* Column 2: Text Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            The quick fox jumps over
          </h1>
          <p className="pt-5 text-gray-600 leading-relaxed">
            Met minim molile not desert Alamo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi laborum velit odio, distinctio doloremque explicabo eius voluptatem, fugit dolor perspiciatis natus sunt error.
          </p>
          <p className="pt-5 text-gray-600 leading-relaxed">
            Met minim molile not desert Alamo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi laborum velit odio, distinctio doloremque explicabo eius voluptatem, fugit dolor perspiciatis natus sunt error.
          </p>
          <p className="pt-5 text-gray-600 leading-relaxed">
            Met minim molile not desert Alamo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi laborum velit odio, distinctio doloremque explicabo eius voluptatem, fugit dolor perspiciatis natus sunt error.
          </p>
        </div>

        {/* Column 3: Dynamic Content with Icons */}
         <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            The quick fox jumps over
          </h2>
          <ul className="space-y-3">
            {repeatedContent.map((content, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <FaChevronRight className="text-primary" />
                {content}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 pt-10">
            The quick fox jumps over
          </h2>
          <ul className="space-y-3">
            {repeatedContent.map((content, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <FaChevronRight className="text-primary" />
                {content}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Quick;
