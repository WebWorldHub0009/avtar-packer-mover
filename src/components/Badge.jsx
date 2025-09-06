import React from "react";
import { Link } from "react-router-dom";

export default function AvatarBadge() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] py-6 px-6 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#111111]/80 border border-[#3CB371]/40 shadow-lg rounded-2xl px-6 md:px-10 py-6 backdrop-blur-md">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3CB371] tracking-wide">
            Reliable Moving Solutions
          </h3>
          <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
            At <span className="font-semibold text-[#3CB371]">Avatar Packers & Movers</span>, 
            we provide <span className="text-[#3CB371] font-semibold">safe, efficient, and affordable</span> 
            relocation services. Whether you are moving your home or office, we ensure 
            a stress-free experience with <span className="text-[#3CB371] font-semibold">trusted professionals</span> 
            handling every detail.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="mt-4 md:mt-0">
          <Link
            to='/contact'
            className="px-8 py-2 text-lg rounded-full bg-[#3CB371] text-black hover:bg-[#34a261] transition-all shadow-md hover:shadow-xl font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
