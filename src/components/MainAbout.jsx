// src/components/MainAbout.jsx
import React from "react";
import aboutImg from "../assets/home/h6.jpg";
import { FaLeaf, FaUserShield, FaSmileBeam, FaShieldAlt } from "react-icons/fa";

const stats = [
  { icon: <FaLeaf />, title: "2000+ Homes", desc: "Pest-Free & Hygienic" },
  { icon: <FaUserShield />, title: "10+ Years", desc: "Trusted Expertise" },
  { icon: <FaSmileBeam />, title: "2K+ Clients", desc: "Satisfied & Safe" },
  { icon: <FaShieldAlt />, title: "100% Eco-Safe", desc: "Green Pest Solutions" },
];

export default function MainAbout() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FFF9] to-[#E9F8EF] py-10 overflow-hidden font-[poppins]">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-30"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="280" fill="#DFF5E1" />
          <circle cx="650" cy="450" r="180" fill="#C6EED2" />
          <circle cx="400" cy="100" r="100" fill="#B2E5C1" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0D3B2E] mb-4">
            About Neat & Clean Pest Control
          </h2>
          <p className="text-lg sm:text-xl text-[#2D6A4F] font-medium">
            “Safeguarding homes & businesses with eco-friendly pest solutions.”
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-[#0D3B2E] mb-4">
              Premium Pest Control in Delhi
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              At <span className="font-semibold text-[#2D6A4F]">Neat & Clean Pest Control</span>, 
              we combine advanced technology with eco-friendly practices to 
              deliver reliable, long-lasting pest solutions. From termites and 
              cockroaches to rodents and mosquitoes, our services ensure 
              complete safety and hygiene.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With over 15 years of expertise, our certified team provides 
              customized pest management for residential, commercial, and 
              industrial spaces. We are committed to creating healthy, 
              pest-free environments with 100% safe treatments.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={aboutImg}
                alt="Neat & Clean Pest Control"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-3 text-3xl text-[#2D6A4F]">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#0D3B2E] mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
