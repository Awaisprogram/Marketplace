import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import i1 from '../images/team-1-user-1.jpg';
import i2 from '../images/team-1-user-2.jpg';
import i3 from '../images/team-1-user-3.jpg';

function Team() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 max-w-[1050px] mx-auto">
          <div className="flex flex-col text-center items-center justify-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              MEET OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Meet our amazing team of professionals dedicated to delivering
              excellence and innovation in every project.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center -m-4">
            {/* Card 1 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 w-full h-96 lg:h-56 object-cover object-center mb-4"
                  src={i1}
                  width={500}
                  height={500}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Alper Kamu
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI Developer</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 w-full h-96 lg:h-56 object-cover object-center mb-4"
                  src={i2}
                  width={500}
                  height={500}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 w-full h-96 lg:h-56 object-cover object-center mb-4"
                  src={i3}
                  width={500}
                  height={800}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Jane Doe
                  </h2>
                  <h3 className="text-gray-500 mb-3">Project Manager</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
