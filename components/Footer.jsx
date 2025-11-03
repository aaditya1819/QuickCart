import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 text-gray-600 bg-gray-50">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-300/40">
        
        {/* Logo & Description */}
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="QuickCart logo" />
          <p className="mt-6 text-sm leading-relaxed text-gray-700">
            <b>QuickCart</b> is your one-stop destination for fast, reliable, and
            secure online shopping. We combine innovation and technology to bring you
            an effortless buying experience — developed by passionate students aiming
            to create real-world solutions.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-600 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>📞 +91 98765 43210</p>
              <p>📧 support@quickcart.dev</p>
              <p>🏢 Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-orange-600 font-semibold">QuickCart</span>. 
        Developed by Aaditya Dhanwate, Shaheed Patel, Bhoomi Bhudhani, and Bhoomi Dhoka. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
