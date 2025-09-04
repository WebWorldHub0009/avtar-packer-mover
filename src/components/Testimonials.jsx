// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Amit Verma",
    title: "Homeowner, South Delhi",
    text: "Neat & Clean Pest Control made our home pest-free in just one visit. Professional, eco-friendly, and highly reliable!",
  },
  {
    name: "Ritu Sharma",
    title: "Restaurant Owner, Connaught Place",
    text: "Their rodent control service saved our restaurant from recurring issues. Very effective and long-lasting results.",
  },
  {
    name: "Sanjay Mehra",
    title: "Office Manager, Gurgaon",
    text: "We opted for their sanitisation service, and the team exceeded expectations. The workplace feels fresh and safe.",
  },
  {
    name: "Priya Singh",
    title: "Apartment Resident, Dwarka",
    text: "Bed bugs had made life miserable, but their treatment worked wonders. Highly recommend their services!",
  },
  {
    name: "Mohit Kapoor",
    title: "Hotel Manager, Aerocity",
    text: "We rely on Neat & Clean Pest Control for regular pest management. Professional, discreet, and effective service every time.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-[#F9FFF9] py-20 px-4 md:px-10 font-[poppins] relative overflow-hidden">
      {/* Decorative background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E6F9ED] via-white to-[#F9FFF9]"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#3CB371]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#1B4332]/10 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto text-center mb-12 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332]">
          What Our Clients{" "}
          <span className="bg-gradient-to-r from-[#3CB371] to-[#1B4332] bg-clip-text text-transparent">
            Say About Us
          </span>
        </h2>
        <p className="italic text-[#3D5A40] mt-3 text-sm md:text-lg max-w-xl mx-auto">
          “Trusted by homes and businesses across Delhi for eco-friendly and
          reliable pest control solutions.”
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-2xl p-8 h-full bg-white shadow-lg border border-[#3CB371]/20 
              text-[#1B4332] transition-transform hover:scale-105 hover:shadow-xl"
            >
              <FaQuoteLeft className="text-3xl mb-4 text-[#3CB371]" />
              <p className="mb-6 italic text-[#3D5A40]">"{item.text}"</p>
              <div>
                <p className="font-semibold text-lg text-[#1B4332]">
                  {item.name}
                </p>
                <p className="text-sm text-[#3D5A40]">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
