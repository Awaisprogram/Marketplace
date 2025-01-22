import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';import { SlActionRedo } from "react-icons/sl";

import Heading from './Heading'

function Location() {
  return (
    <>
      <Heading
        title="VISIT OUR OFFICE"
        subtitle=""
        paragraph="We help small businesses with big ideas"
        className="para"
      />

      <div className="flex justify-between flex-col lg:flex-row  gap-0 container px-5 py-24 max-w-[1050px] mx-auto">
        <div className="w-full lg:w-1/3 px-4 py-20 bg-white text-center">
          <FaMapMarkerAlt className="text-4xl mb-4 text-Color flex items-ceeter"
          size={60} />
          <h4 className="text-xl font-semibold mb-2">Location</h4>
          <p className="text-gray-700 mb-2">123 Business St.</p>
          <p className="text-gray-700 mb-2">Suite 456</p>
          <p className="text-gray-700 mb-4">City, Country</p>
          <button className="bg-transparent text-Color border border-Color py-4 px-8 rounded-full hover:border-none transition ease duration-600">
          Submit Request
          </button>
        </div>

        {/* Center Card - Blacked Out */}
        <div className="w-full lg:w-1/3 px-4 py-20 bg-black1 text-center text-white">
          <FaPhoneAlt className="text-4xl mb-4 flex text-Color items-center" 
          size={60}/>
          <h4 className="text-xl font-semibold mb-2">Contact</h4>
          <p className="mb-2">+1 (123) 456-7890</p>
          <p className="mb-2">Mon-Fri, 9:00 AM - 6:00 PM</p>
          <p className="mb-4">Support for all your needs</p>
          <button className="bg-transparent text-Color border border-Color py-4 px-8 rounded-full hover:border-none transition ease duration-600">
          Submit Request
          </button>
        </div>

        {/* Third Card - Email */}
        <div className="w-full lg:w-1/3 px-4 py-20 bg-white text-center">
          <FaEnvelope className="text-4xl mb-4 text-Color  flex items-ceeter" 
          size={60}/>
          <h4 className="text-xl font-semibold mb-2">Email</h4>
          <p className="text-gray-700 mb-2">contact@business.com</p>
          <p className="text-gray-700 mb-2">support@business.com</p>
          <p className="text-gray-700 mb-4">We respond within 24 hours</p>
          <button className="bg-transparent text-Color border border-Color py-4 px-8 rounded-full hover:border-none transition ease duration-600">
            Submit Request
          </button>
        </div>
      
      </div>
      <div className='p-10 flex flex-col items-center justify-center space-y-2'>
       <SlActionRedo
        size={44} className='text-Color mb-10'/>
        <h1 className='font-bold text-sm  '>We can not Wait To Meet You</h1>
        <h1 className='text-4xl font-bold mb-10'>Lets Talk</h1>
        <button className="bg-Color text-white border border-Color py-4 px-8 rounded-xl hover:bg-dark transition ease duration-600">
           Try it free now
          </button>
        </div>
    </>
  );
}

export default Location;
