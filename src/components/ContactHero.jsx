// src/components/Hero.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import bg from "../assets/home/acb.jpg"

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#003366] text-white font-[poppins] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={bg} 
          alt="Relocation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b bg-black/50"></div>
      </div>

     

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
          Experience{" "}
          <span className="text-[#003366]">Premium Relocation</span> Services
          with Avatar Packers And Movers
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#D9D9D9] max-w-2xl">
          Safe, reliable, and affordable moving solutions across India. We
          ensure your home, office, and valuables are relocated with the utmost
          care.
        </p>

        {/* CTA Buttons */}
     <div className="mt-8 flex gap-4 flex-wrap">
  {/* Email Now Button */}
  <a
    href="mailto:Info@avatarpackersandmovers.com"
    className="px-8 py-3 cursor-pointer rounded-xl bg-[#FFC107] text-[#003366] font-semibold shadow-lg hover:bg-yellow-500 transition"
  >
    Email Now
  </a>

  {/* Call Now Button */}
  <a
    href="tel:+919773760042"
    className="px-8 py-3 cursor-pointer rounded-xl border border-white font-semibold flex items-center gap-2 hover:bg-white hover:text-[#003366] transition"
  >
    <FaPhoneAlt /> Call Now
  </a>
</div>

      </div>

    </section>
  );
}
