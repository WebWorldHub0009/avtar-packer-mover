// src/components/CertificateHero.jsx
import React from "react";
import bg from "../assets/home/cer.jpg"; // 🔥 Use a premium background (office, award wall, handshake etc.)

const CertificateHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] font-[Poppins] overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Trusted & Certified Movers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[5px] text-[#003366] drop-shadow-lg">
          Certified Excellence
        </h1>
        <p className="mt-6 text-base md:text-xl text-gray-800 leading-relaxed">
          <span className="font-semibold text-red-800">
            Avatar Packers And Movers
          </span>{" "}
          is backed by industry-recognized{" "}
          <span className="text-red-800 font-medium">certifications</span> and{" "}
          <span className="text-red-800 font-medium">licenses</span> that
          ensure every move is safe, reliable, and fully compliant.  
          Our dedication to{" "}
          <span className="italic">quality, transparency, and trust</span> has
          made us a preferred choice across the country.
        </p>
      </div>

      {/* Bottom Mini Menu (Certificate Highlights) */}
      <div className="absolute bottom-4 w-full px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-wide overflow-x-auto scrollbar-hide">
          {[
            "ISO 9001:2015 Certified",
            "Govt. Approved",
            
            "Trusted by Corporates",
            
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-[#003366]  hover:text-red-800 whitespace-nowrap transition duration-300 group"
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

export default CertificateHero;
