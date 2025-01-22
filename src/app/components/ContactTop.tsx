import React from 'react';
import {  FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import Image from 'next/image'; 
import contact from '../images/contact.png'
import Location from './Location';

function ContactSection() {
  return (
    <> 
    <div className="container mx-auto p-8 flex flex-col text-center lg:text-left items-center justify-center lg:flex-row gap-8  max-w-[1050px]">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col justify-start ">
        {/* Contact Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

        {/* Get in Touch Today */}
        <h3 className="text-6xl font-bold text-black1 mb-5 ">Get in touch
           today!</h3>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6">
          We would love to hear from you! Whether you have a question, suggestion, or simply want to reach out, feel free to get in touch.
        </p>

        {/* Phone */}
        <div className="flex items-center mb-4">
         
          <span className="font-bold">+1 (123) 456-7890</span>
        </div>

        {/* Fax */}
        <div className="flex items-center mb-4">
         
          <span className="font-bold">+1 (123) 456-7891</span>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-6 ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-black1 hover:text-blue-800" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-black1 hover:text-blue-800" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-black1 hover:text-blue-800" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-black1 hover:text-blue-800" />
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2">
        <Image 
          src={contact} 
          alt="Contact Image" 
          width={500} 
          height={500} 
          className="w-full h-auto "
        />
      </div>
     
    </div>
    <Location/>
    </>
  );
}

export default ContactSection;
