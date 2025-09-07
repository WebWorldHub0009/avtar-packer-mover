import React from "react";
import {
  FaTruckMoving,
  FaClipboardCheck,
  FaCalendarCheck,
  FaSmileBeam,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Share Your Moving Details",
    description:
      "Tell us where you’re moving from and to, along with your preferred date. We’ll tailor the service to your exact needs.",
    icon: <FaClipboardCheck className="text-4xl text-red-800" />,
    extra: "Getting started is quick and hassle-free.",
  },
  {
    id: 2,
    title: "Get a Customized Plan",
    description:
      "Our experts assess your requirements and offer you the most reliable, affordable, and stress-free moving plan.",
    icon: <FaTruckMoving className="text-4xl text-red-800" />,
    extra: "Every move is customized for your convenience.",
  },
  {
    id: 3,
    title: "Book in Just Minutes",
    description:
      "Confirm your plan online with ease. Receive instant booking confirmation via WhatsApp, SMS, or Email.",
    icon: <FaCalendarCheck className="text-4xl text-red-800" />,
    extra: "No paperwork. Instant, digital confirmation.",
  },
  {
    id: 4,
    title: "Enjoy a Smooth Move",
    description:
      "Sit back and relax while our professional team carefully packs, transports, and sets up your belongings safely.",
    icon: <FaSmileBeam className="text-4xl text-red-800" />,
    extra: "Safe. Reliable. On-Time. Every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-[#f9fafc] to-[#eaf1f8] relative">
      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <p className="text-sm font-semibold text-black uppercase tracking-widest">
          Avatar Packers And Movers
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
          How Our Moving Process Works
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          From your first call to your final delivery, our process ensures a
          smooth, secure, and stress-free move.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto relative z-10">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group rounded-2xl p-8 bg-white shadow-lg border border-gray-100 
                       hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
          >
            {/* Number Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[#003366] 
                              text-black font-bold text-base group-hover:bg-[#003366] group-hover:text-white transition-all duration-500">
                <span className="group-hover:hidden">{idx + 1}</span>
                <FaCheck className="hidden group-hover:block text-white text-sm" />
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-6">{step.icon}</div>

            {/* Title */}
            <h3 className="text-center font-semibold text-xl mb-3 text-gray-800">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm mb-3 leading-relaxed">
              {step.description}
            </p>

            {/* Extra */}
            <p className="text-center text-gray-500 text-xs italic">
              {step.extra}
            </p>

            {/* Hover Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6">
              <div className="opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link to="/contact">
                  <button className="w-full cursor-pointer rounded-full bg-red-800 text-black text-sm py-2 font-semibold shadow-md hover:shadow-xl transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-7 text-center px-6 max-w-3xl mx-auto relative z-10">
        <p className="text-lg text-gray-700 font-medium mb-6">
          Move with peace of mind — Avatar Packers And Movers ensures your
          relocation is seamless and stress-free.
        </p>
        <Link to="/contact">
          <button className="bg-black cursor-pointer text-white px-8 py-3 rounded-2xl text-lg  shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
            Book Your Move Today
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
