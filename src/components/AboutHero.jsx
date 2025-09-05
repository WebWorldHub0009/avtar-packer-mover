import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving } from "react-icons/fa";
import bgImage from "../assets/home/abav.jpg";
import { Link } from "react-router-dom";
const AboutHero = () => {
  return (
    <section
      className="relative  py-20 px-6 md:px-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] -z-20"></div>

    
     
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-wider text-[#003366] uppercase mb-4">
          Who We Are
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1C] leading-tight">
          <span className="text-[#003366]">Trusted Packers & Movers</span>{" "}
          <br />
          <span className="text-[#FFC107]">for Every Relocation</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
          At{" "}
          <span className="font-semibold text-[#003366]">
            Avtar Packer & Mover
          </span>
          , we specialize in delivering{" "}
          <span className="text-[#FFC107] font-semibold">
            safe, reliable, and hassle-free
          </span>{" "}
          relocation services. With years of experience and a trusted team, we
          move your world with care and professionalism.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            to="/services"
            className="px-8 py-3 rounded-full bg-[#003366] text-white font-semibold shadow-md hover:shadow-lg hover:bg-[#002244] transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-[#FFC107] text-black font-semibold shadow-md hover:shadow-lg hover:bg-yellow-400 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Icon Accent */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#003366]/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaTruckMoving size={80} />
      </motion.div>
    </section>
  );
};

export default AboutHero;
