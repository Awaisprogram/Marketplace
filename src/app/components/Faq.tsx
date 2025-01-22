import React from 'react';
import Heading from './Heading';
import { FaChevronRight } from "react-icons/fa";


function Faq() {
  return (
    <> 
      <div>
        <Heading 
          title="Pricing FAQS" 
          paragraph="Problems trying to resolve the conflict between two major realms of Classical physics: Newtonian mechanics." 
        />
      </div>

      <div className="container mx-auto p-8">
        {/* Bold Line */}
        <div className="border-t-4 border-black mb-8"></div>

        {/* Paragraphs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="w-full">
            <div className="flex items-center mb-4">
              <FaChevronRight className="text-2xl text-gray-500 mr-2" />
              <p className="text-lg font-bold">This is the first paragraph on the left side.</p>
            </div>
            <p className="text-sm text-gray-600">This is the additional information related to the first paragraph on the left side.</p>

            <div className="flex items-center mb-4">
              <FaChevronRight className="text-2xl text-gray-500 mr-2" />
              <p className="text-lg font-bold">This is the second paragraph on the left side.</p>
            </div>
            <p className="text-sm text-gray-600">This is the additional information related to the second paragraph on the left side.</p>

            <div className="flex items-center mb-4">
              <FaChevronRight className="text-2xl text-gray-500 mr-2" />
              <p className="text-lg font-bold">This is the third paragraph on the left side.</p>
            </div>
            <p className="text-sm text-gray-600">This is the additional information related to the third paragraph on the left side.</p>
          </div>

          {/* Right Section */}
          <div className="w-full">
            <div className="flex items-center mb-4">
              <FaChevronRight className="text-2xl text-gray-500 mr-2" />
              <p className="text-lg font-bold">This is the first paragraph on the right side.</p>
            </div>
            <p className="text-sm text-gray-600">This is the additional information related to the first paragraph on the right side.</p>

            <div className="flex items-center mb-4">
              <FaChevronRight className="text-2xl text-gray-500 mr-2" />
              <p className="text-lg font-bold">This is the second paragraph on the right side.</p>
            </div>
            <p className="text-sm text-gray-600">This is the additional information related to the second paragraph on the right side.</p>

            <div className="flex items-center mb-4">
              <FaChevronRight className="text-2xl text-gray-500 mr-2" />
              <p className="text-lg font-bold">This is the third paragraph on the right side.</p>
            </div>
            <p className="text-sm text-gray-600">This is the additional information related to the third paragraph on the right side.</p>
          </div>
        </div>
        <div className='text-center font-lg py-16'>
          <h1 className='font-bold '>Have not got your Answer?</h1>
          <br />Contact our support
        </div>
      </div>
    </>
  );
}

export default Faq;
