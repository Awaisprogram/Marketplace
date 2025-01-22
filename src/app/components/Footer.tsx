import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; 
import Link from 'next/link';

function Footer() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-100 border-b py-16 px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-black">
          Bandage
        </Link>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-blue-500">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="ml-3 text-gray-600 hover:text-pink-500">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="https://github.com" target="_blank" className="ml-3 text-gray-600 hover:text-black">
            <FaGithub className="w-5 h-5" />
          </Link>
        </span>
      </div>

      {/* Footer Section */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Navigation Columns */}
            <div className="px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Resources
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <Link href="/team" className="text-gray-600 hover:text-gray-800">
                  Our Team
                </Link>
                <Link href="/careers" className="text-gray-600 hover:text-gray-800">
                  Careers
                </Link>
                <Link href="/press" className="text-gray-600 hover:text-gray-800">
                  Press
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div className="px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Help
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <Link href="/faq" className="text-gray-600 hover:text-gray-800">
                  FAQs
                </Link>
                <Link href="/support" className="text-gray-600 hover:text-gray-800">
                  Support
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-800">
                  Terms of Use
                </Link>
                <Link href="/sitemap" className="text-gray-600 hover:text-gray-800">
                  Sitemap
                </Link>
              </nav>
            </div>

            {/* Newsletter Section */}
            <div className="w-full px-4">
              <div className="flex flex-col">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  Stay Connected
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Subscribe to our newsletter to get the latest updates.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Emial"
                    className="w-full bg-gray-100 bg-opacity-50 rounded-l border border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-2 px-8 transition-colors duration-200 ease-in-out"
                  />
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center justify-between">
            <p className="text-sm text-gray-500">
              &copy; 2025 Bandage. All Rights Reserved.
            </p>
            <span className="inline-flex">
              <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-blue-500">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="ml-3 text-gray-600 hover:text-pink-500">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="https://github.com" target="_blank" className="ml-3 text-gray-600 hover:text-black">
                <FaGithub className="w-5 h-5" />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
