// src/components/ServicesHero.jsx
import React from "react";
import bg from "../assets/home/ksbg.jpg";

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] font-[Poppins] overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Premium Relocation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-[4px] md:tracking-[6px] uppercase text-[#010952] drop-shadow-md">
          Move With Care. Move With Confidence.
        </h1>
        <p className="mt-6 text-base md:text-xl text-gray-200 leading-relaxed">
          With{" "}
          <span className="text-[#FFD700] font-semibold">
            Avatar Packers And Movers
          </span>
          , every relocation becomes a{" "}
          <span className="text-[#FFD700]">premium experience</span>. From{" "}
          <span className="italic">household moves</span> to{" "}
          <span className="italic">corporate shifting</span> and{" "}
          <span className="italic">vehicle transport</span>, we combine safety,
          trust, and precision to deliver a smooth journey to your new
          destination.
        </p>
      </div>

      {/* Bottom Mini Menu */}
      <div className="absolute bottom-4 w-full px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-wide overflow-x-auto scrollbar-hide">
          {[
            "Household Shifting",
            "Office Relocation",
            "Vehicle Transport",
            "Packing & Unpacking",
            "Storage Solutions",
            "Insurance Support",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-[#010952] hover:text-[#FFD700] whitespace-nowrap transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
