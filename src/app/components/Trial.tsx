import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram,FaLinkedin  } from "react-icons/fa";
function Trial() {
  return (
    <div>
      <section className="text-center py-4 pb-10">
        <h1 className="lg:text-[58px] text-[40px]  font-black mb-4">
          Start your
          <br className="lg:block" />
          14 days free trial
        </h1>

        {/* Paragraph */}
        <p className="text-black1 lg:text-xl md:text-lg sm:text-md font-light mb-6 leading-relaxed">
          We know how large objects will act,
          <br className="lg:block" />
          but things on a
          <br className="block lg:hidden" />
          small scale
        </p>

        <button className="bg-Color text-white px-6 py-3 rounded-lg hover:bg-dark transition">
          Try it free now
        </button>

        <div className="flex justify-center gap-8 mt-6">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center text-Color "
            aria-label="Twitter"
          >
            <FaTwitter size={36} />
          </a>
          <a
            href="#"
            className="p-1 flex items-center justify-center bg-blue-600 text-white rounded-xd hover:bg-blue-900 transition"
            aria-label="Facebook"
          >
            <FaFacebookF 
            size={26}/>
          </a>
          
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center  rounded-xd hover:opacity-80 transition"
            aria-label="Instagram"
          >
            <FaInstagram 
            size={36}/>
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center  rounded-xd 
            text-blue-800 hover:opacity-80 transition"
            aria-label="Instagram"
          >
            <FaLinkedin 
            size={36}/>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Trial;
