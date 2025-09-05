// src/components/MainAbout.jsx
import React from "react";
import aboutImg from "../assets/home/abav.jpg";
import {
  FaTruckMoving,
  FaUsers,
  FaHistory,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaTruckMoving />,
    title: "5000+ Moves",
    desc: "Successful Relocations Nationwide",
  },
  {
    icon: <FaUsers />,
    title: "10+ Years",
    desc: "Trusted by Families & Businesses",
  },
  {
    icon: <FaHistory />,
    title: "24/7 Support",
    desc: "Always Available Assistance",
  },
  {
    icon: <FaShieldAlt />,
    title: "100% Safe",
    desc: "Secure & Hassle-Free Service",
  },
];

export default function MainAbout() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4F6] py-8 overflow-hidden font-[poppins]">
      {/* Background Accent Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#003366]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC107]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-extrabold text-[#003366] mb-4">
            About Avtar Packer & Mover
          </h2>
          <p className="text-lg sm:text-xl text-[#4A4A4A] font-medium max-w-2xl mx-auto">
            “Reliable. Professional. Safe. Moving your world with care and
            precision.”
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-8">
          {/* Left Content */}
          <div>
            <h3 className="text-4xl font-bold text-[#FFC107] mb-5">
              Trusted Packers & Movers Across India
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              At{" "}
              <span className="font-semibold text-[#003366]">
                Avtar Packer & Mover
              </span>
              , we specialize in providing{" "}
              <span className="font-semibold text-[#FFC107]">
                safe, seamless, and stress-free
              </span>{" "}
              relocation services. From household moves to office shifting and
              vehicle transport, we handle every detail with care.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a decade of trusted expertise, our skilled team ensures your
              belongings reach their destination securely. We go beyond moving
              boxes—we deliver peace of mind.
            </p>
          </div>

          {/* Right Image with Overlay Effect */}
          <div className="relative flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <img
                src={aboutImg}
                alt="Avtar Packer & Mover"
                className="w-full h-auto object-cover"
              />
              {/* Golden Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-[#003366] text-white px-6 py-3 rounded-xl shadow-lg">
                <span className="text-2xl font-bold text-[#FFC107]">10+</span>{" "}
                Years of Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center border-t-4 border-[#003366] transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-4 text-4xl text-[#FFC107]">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#003366] mb-2">
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
