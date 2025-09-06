import React from "react";
import why1 from "../assets/home/ah1.jpg"; // replace with moving images
import why2 from "../assets/home/car.jpg";
import bg from "../assets/home/abg.jpg"; // background image

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full text-white py-6 px-6 md:px-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-center text-4xl sm:text-6xl md:text-6xl font-bold tracking-wider mb-10">
          WHY <span className="text-[#3CB371]">AVATAR PACKERS AND MOVERS</span>
        </h2>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center border-t border-b border-gray-500 py-10">
          {/* Image */}
          <div className="order-1 md:order-1">
            <img
              src={why1}
              alt="Safe & Reliable Shifting"
              className="w-full h-[260px] sm:h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-2 text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              At <span className="text-[#3CB371] font-semibold">Avatar Packers And Movers</span>, 
              we deliver <span className="text-[#FFD700]">safe, fast, and premium relocation</span> services.  
              From local shifting to nationwide moves, our trained team ensures your valuables are packed 
              and transported with utmost care. We use high-quality materials, advanced logistics, and 
              reliable vehicles to make every move stress-free and secure.
            </p>
            <p>
              Our approach is not just about transporting goods—it’s about providing 
              <span className="text-[#3CB371]"> complete peace of mind</span>. Every relocation is 
              carefully planned, from inspection and packing to loading, tracking, and timely delivery.  
              With us, you can trust that your household items, office equipment, or even delicate goods 
              are handled with the professionalism they deserve.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center border-b border-gray-500 py-10 mt-10">
          {/* Text */}
          <div className="order-2 md:order-1 text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              With years of expertise, we specialize in 
              <span className="text-[#3CB371]"> home, office, and vehicle shifting</span>.  
              Choosing us means choosing <span className="text-[#FFD700] font-semibold">reliability, trust, 
              and on-time delivery</span>. Our customized solutions ensure your move is smooth from start 
              to finish — 
              we make relocation <span className="text-[#3CB371]">simple, safe, and stress free</span>.
            </p>
            <p>
              We believe every move is unique, which is why we offer 
              <span className="text-[#FFD700]"> tailored packages</span> to suit your budget and requirements.  
              From using specialized packing materials for fragile items to providing secure transportation 
              for vehicles, our services are designed to match international quality standards.  
              With <span className="text-[#3CB371] font-semibold">Avatar Packers And Movers</span>, you don’t just move — 
              you experience <span className="text-[#FFD700]">excellence, care, and trust</span>.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src={why2}
              alt="Professional Relocation"
              className="w-full h-[260px] sm:h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
