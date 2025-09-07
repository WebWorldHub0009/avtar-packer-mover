// src/components/MapSection.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#F7F5F2] flex flex-col lg:flex-row items-stretch font-[Poppins]">
      {/* Left: Info */}
      <div className="w-full lg:w-1/2 flex items-center justify-center text-black p-10 md:p-14 relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
          Find Us On Map Avtar Packer & Mover
          </h2>
          <p className="text-gray-800 mb-6 text-lg leading-relaxed">
            We ensure safe and reliable relocation services across India.
            Visit us or get in touch today for a premium moving experience.
          </p>
        </div>
      </div>

      {/* Right: Map */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d129040.05940915602!2d77.32815019150028!3d28.606776183263182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ceffbc62ecae7%3A0x8df317dc779b45f1!2sGaur%20city%2C%20Plot%20186%2F187%20Sain%20farm%20Richpal%20Gari%2C%202%2C%20Greater%20Noida%20W%20Rd%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201309!3m2!1d28.600618899999997!2d77.4323428!5e0!3m2!1sen!2sin!4v1757135917958!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
