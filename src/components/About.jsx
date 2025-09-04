// src/components/AboutSection.jsx
import React from "react";
import { FiTruck, FiPackage, FiShield } from "react-icons/fi";
import aboutImg from "../assets/home/ah2.jpg"; // replace with mover image

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9fafc] to-[#eaf1f8]px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-[Poppins] text-[#1A365D] leading-snug">
            Moving Made Easy, <br /> With <span className="text-[#FFC107]">Avtar Packers & Movers</span>
          </h2>

          <p className="text-gray-600 text-lg">
            At <span className="font-semibold text-[#FFC107]">Avtar Packers & Movers</span>, 
            we ensure your relocation is smooth, secure, and stress-free. 
            With premium packing, safe transport, and reliable professionals, 
            we handle every move with care—whether it’s local shifting, office relocation, 
            or vehicle transport across India.
          </p>

          {/* Promise Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F0FA] text-[#1A365D] mb-3 group-hover:scale-110 transition">
                <FiShield className="text-xl" />
              </div>
              <h3 className="text-base font-semibold text-[#1A365D]">Trusted & Secure</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Safety-first approach with guaranteed protection.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF7E0] text-[#FFD700] mb-3 group-hover:scale-110 transition">
                <FiPackage className="text-xl" />
              </div>
              <h3 className="text-base font-semibold text-[#1A365D]">Premium Packing</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                High-quality material ensures damage-free delivery.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FEE2E2] text-[#FFC107] mb-3 group-hover:scale-110 transition">
                <FiTruck className="text-xl" />
              </div>
              <h3 className="text-base font-semibold text-[#1A365D]">On-Time Delivery</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Fast & reliable transport across all locations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Avtar Packers & Movers"
            className="rounded-xl shadow-xl object-cover w-full h-[400px] md:h-[500px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-5 md:px-8 py-3 border border-gray-200 flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium">
            <FiShield className="text-[#FFD700] text-lg" />
            <span className="text-gray-800 whitespace-nowrap">
              15+ Years of Trusted Service
            </span>
          </div>
        </div>
      </div>

      {/* Highlight Text Below */}
      <div className="text-center mt-14 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="text-[#FFC107] font-semibold"> Avtar Packers & Movers </span> 
          is a name synonymous with trust, efficiency, and premium relocation services. 
          From careful packing to safe transportation, we bring peace of mind to 
          thousands of families and businesses nationwide.
        </p>
      </div>
    </section>
  );
}
