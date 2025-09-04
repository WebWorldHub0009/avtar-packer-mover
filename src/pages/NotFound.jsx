import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001a33] via-[#002b4d] to-[#004080] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* 404 Number */}
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-[#FFC107] drop-shadow-2xl animate-bounce">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-200 max-w-xl mx-auto mb-8 text-lg">
          The page you are looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFC107] to-[#FFD54F] text-black rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            <FaHome /> Back to Home
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-[#FFC107] rounded-full hover:bg-[#FFC107] hover:text-black transition-all duration-300 font-semibold"
          >
            <FaArrowLeft /> Contact Support
          </Link>
        </div>
      </div>

      {/* Floating Decorative Circles */}
      <div className="absolute w-72 h-72 bg-[#FFC107]/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-[#FFC107]/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
    </section>
  );
}
