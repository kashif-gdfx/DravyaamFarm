// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black pb-10 text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-semibold text-white">Dravyam Farms</h2>
          <p className="mt-4 text-base text-gray-400 leading-7">
            Pure. Organic. Sustainable.  
            We bring nature’s best from our farms to your home.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition">
              <FaFacebookF className="text-xl text-white" />
            </a>
            <a className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition">
              <FaInstagram className="text-xl text-white" />
            </a>
            <a className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition">
              <FaTwitter className="text-xl text-white" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-5">
            Quick Links
          </h3>
          <ul className="space-y-4 text-lg text-gray-400">
            <li  className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Products
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Gallery
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* OUR PRODUCTS */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-5">
            Our Products
          </h3>
          <ul className="space-y-4 text-lg text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Organic Vegetables
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Dairy Products
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Fresh Fruits
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Natural Honey
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-5">Contact</h3>

          <div className="flex items-start gap-4 text-lg text-gray-400 mb-4">
            <MdLocationOn className="text-2xl text-green-500" />
            <p>Dravyam Farms, Bulandshahr, Uttar Pradesh</p>
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-400 mb-4">
            <FaPhoneAlt className="text-2xl text-green-500" />
            <p>+91 9876543210</p>
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-400">
            <MdEmail className="text-2xl text-green-500" />
            <p>info@dravyamfarms.com</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-base mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Dravyam Farms. All rights reserved.
      </div>
    </footer>
  );
}
