import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// ✅ Example Packer & Mover service images (replace with real images)
import relocation from "../assets/service/relocation.jpg";
import pack from "../assets/service/packing.jpg";
import move from "../assets/service/movea.jpg";
import car from "../assets/home/car.jpg";
import cargo from "../assets/service/cargoa.jpg";
import commercial from "../assets/service/cmove.jpg";


const services = [
  { title: "Relocation Services", slug: "relocation-services", image: relocation },
  { title: "Packing Services", slug: "packing-services", image:pack },
  { title: "Moving Services", slug: "moving-services", image: move },
  { title: "Transport Services", slug: "transport-services", image: car },
  { title: "Cargo Services", slug: "cargo-services", image: cargo },
  { title: "Commercial Moving", slug: "commercial-moving", image: commercial },
];

export default function ServicesSection() {
  return (
    <section className="relative font-[poppins] py-8 overflow-hidden">
      {/* Section Heading */}
      <div className="relative  mx-auto px-6 text-center mb-16">
        <h2 className="font-cursive1 text-5xl md:text-6xl text-[#1A365D] tracking-wide drop-shadow-lg">
          Our Premium <span className="text-red-800">Services</span>
        </h2>
        <p className="mt-4 font-body text-gray-800 max-w-xl mx-auto text-lg">
          At <span className="text-red-800 font-semibold">Avatar Packers And Movers</span>, 
          we provide safe, professional and reliable moving solutions across India.  
          From packing to relocation, we handle everything with care and precision.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-lg shadow-black/50 bg-black/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Overlay with Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:via-black/80 transition-all duration-500"></div>

                  {/* Floating Service Number */}
                  <div className="absolute top-6 left-6 font-cursive2 text-white text-7xl opacity-15">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Service Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-cursive2 text-2xl md:text-3xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-300 mt-2 opacity-90">
                      Reliable, fast & professional {service.title.toLowerCase()} for all your needs.
                    </p>
                    <button className="mt-4 px-5 cursor-pointer py-1 bg-[#FFD700] text-black font-semibold rounded-xl shadow-md hover:bg-yellow-400 transition-all">
                      Explore More
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Subtle background animation */}
      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
            50% { transform: translateY(-12px) scale(1.1); opacity: 1; }
          }
          .animate-glow {
            animation: floatGlow 6s infinite ease-in-out;
          }
        `}
      </style>

      {/* Decorative glowing circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#FFD700]/20 rounded-full blur-3xl animate-glow"></div>
    </section>
  );
}
