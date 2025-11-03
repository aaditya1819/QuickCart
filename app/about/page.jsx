'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4">
          About QuickCart
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Welcome to <b>QuickCart</b> — a modern, reliable, and fast e-commerce platform
          designed to make online shopping seamless and secure. We’re passionate about
          simplifying the buying experience while empowering users through innovation
          and technology.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 mb-10 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to deliver a smooth shopping journey by integrating smart user
          authentication, instant order confirmation, and reliable delivery tracking.
          QuickCart isn’t just an online store — it’s a platform built by students
          passionate about web technology, user experience, and real-world innovation.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Developers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'Aaditya Dhanwate', role: 'Frontend & Full Stack Developer' },
            { name: 'Shaheed Patel', role: 'Backend & Database Engineer' },
            { name: 'Bhoomi Bhudhani', role: 'UI/UX Designer' },
            { name: 'Bhoomi Dhoka', role: 'Quality Analyst & Research' },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 rounded-xl py-6 px-4 hover:shadow-lg transition duration-200"
            >
              <div className="h-24 w-24 bg-orange-200 rounded-full flex items-center justify-center mb-3 text-3xl font-bold text-orange-600">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 mt-10 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          We envision <b>QuickCart</b> as a powerful yet simple shopping solution that
          inspires trust, speed, and transparency. Our goal is to keep enhancing the
          project with modern technologies like Clerk authentication, Resend email
          notifications, and advanced analytics.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} QuickCart — Developed with ❤️ by the QuickCart Team
      </footer>
    </div>
  );
};

export default About;
