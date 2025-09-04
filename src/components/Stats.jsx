import React from "react";
import { motion } from "framer-motion";
import statsImage1 from "../assets/home/h4.jpg"; // Replace with your pest-related images
import statsImage2 from "../assets/home/h5.jpg";

import { FaUsers, FaBug, FaHome, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Years of Experience",
    value: "10+",
    icon: <FaAward className="text-2xl sm:text-3xl md:text-4xl text-[#3CB371]" />,
  },
  {
    label: "Happy Clients",
    value: "2K+",
    icon: <FaUsers className="text-2xl sm:text-3xl md:text-4xl text-[#3CB371]" />,
  },
  {
    label: "Services Provided",
    value: "20+",
    icon: <FaBug className="text-2xl sm:text-3xl md:text-4xl text-[#3CB371]" />,
  },
  {
    label: "Locations Covered",
    value: "Delhi ",
    icon: <FaHome className="text-2xl sm:text-3xl md:text-4xl text-[#3CB371]" />,
  },
];

const Stats = () => {
  return (
    <section
      className="w-full relative py-12 md:py-10 bg-white px-6 overflow-hidden font-[poppins]"
    
    >
      {/* Overlay subtle glow effect */}
      <div className="absolute inset-0 bg-[#3CB37110] blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
  <h2 className="text-2xl sm:text-4xl md:text-5xl tracking-wide text-[#3CB371] font-semibold">
    "Protecting Homes, Ensuring Safety"
  </h2>
  <p className="mt-3 text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
    Delivering trusted, eco-friendly <span className="text-[#35a768]"> pest control solutions </span> with unmatched expertise, ensuring your home and workplace remain safe, hygienic, and worry-free.
  </p>
</div>


        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Images & Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center items-center min-h-[480px]"
          >
            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, y: -10 }}
              className="absolute -top-2 left-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={statsImage1}
                alt="Pest Control"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, y: 10 }}
              className="absolute bottom-4 right-2 w-[300px] h-[250px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={statsImage2}
                alt="Pest Control Team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-[#3CB371]/30 py-6 px-8 rounded-2xl shadow-xl text-center w-[280px] md:w-[320px]">
              <p className="text-2xl font-semibold mb-2 tracking-wider bg-gradient-to-r from-[#3CB371] to-[#1B4332] bg-clip-text text-transparent">
                Safe & Reliable
              </p>
              <h3 className="text-base font-semibold text-[#1C1C1C] leading-snug tracking-wide">
                Expert pest control solutions keeping your home and workplace hygienic and safe.
              </h3>
              <Link to="/contact">
                <button className="mt-4 cursor-pointer px-5 py-2 border border-[#3CB371] hover:bg-gradient-to-r hover:from-[#3CB371] hover:to-[#1B4332] hover:text-white transition-all duration-300 text-sm font-semibold rounded-full text-[#1C1C1C]">
                  Book a Service
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-5xl text-[#1C1C1C] mb-6 leading-snug font-semibold">
              Our{" "}
              <span className=" text-[#3CB371]  ">
                Achievements
              </span>
              <hr className="bg-text-[#3CB371]"/>
            </h2>
            <p className="text-[#1C1C1C] text-base sm:text-lg mb-10 max-w-xl leading-relaxed tracking-wide">
              Neat & Clean Pest Control has been providing trusted, eco-friendly pest solutions across Delhi. We combine experience, advanced techniques, and a dedicated team to ensure complete customer satisfaction.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="p-3 sm:p-4 bg-white/10 rounded-full shadow-md"
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-xl md:text-3xl font-bold text-[#1C1C1C]">
                      {stat.value}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#3CB371] tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
