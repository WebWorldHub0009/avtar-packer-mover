import React from "react";
import ServicesHero from "../components/ServiceHero";
import ServicesSection from "../components/ServiceSection";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />

      {/* 🔥 Premium Additional Content Section */}
      <section className="relative w-full py-20 bg-[#F9F9F9] text-black font-[Poppins] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-red-800 mb-6 tracking-wide">
            Why Choose Avtar Packer & Mover?
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Moving isn’t just about transporting belongings — it’s about{" "}
            <span className="text-red-800 font-semibold">trust, care, and reliability</span>.  
            At Avtar Packer & Mover, we combine modern technology with 
            years of expertise to deliver an experience that feels effortless, premium, and stress-free.  
            Every service is designed with <span className="italic">your peace of mind</span> in focus.
          </p>

          {/* Premium Features Grid */}
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {/* Feature 1 */}
            <div className="bg-white/5 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#FFD700] transition">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                🛡️ Safety First
              </h3>
              <p className="text-gray-800 leading-relaxed">
                From packing fragile items to secure loading, 
                we ensure maximum safety at every stage of your move.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#FFD700] transition">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                🚚 Door-to-Door Service
              </h3>
              <p className="text-black leading-relaxed">
                We handle everything — from pickup at your current location 
                to safe delivery right to your new doorstep.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#FFD700] transition">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                🌍 Nationwide Network
              </h3>
              <p className="text-black leading-relaxed">
                Whether local or across India, our trusted network ensures 
                seamless relocation anywhere you need.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#FFD700] transition">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                📦 Premium Packaging
              </h3>
              <p className="text-black leading-relaxed">
                We use top-quality packing material to safeguard every item, 
                from electronics to furniture and valuables.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#FFD700] transition">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                ⏱️ On-Time Delivery
              </h3>
              <p className="text-black leading-relaxed">
                We value your time and guarantee timely relocation 
                without unnecessary delays.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 border border-[#FFD700]/20 rounded-2xl p-8 shadow-lg hover:scale-105 hover:border-[#FFD700] transition">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                💼 Corporate Expertise
              </h3>
              <p className="text-black leading-relaxed">
                From offices to warehouses, our corporate relocation services 
                minimize downtime and maximize efficiency.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <a
              href="tel:+919773760042"
              className="px-12 py-4 rounded-full bg-black text-white font-bold shadow-xl hover:scale-105 transition-transform"
            >
              📞 Get Your Free Moving Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
