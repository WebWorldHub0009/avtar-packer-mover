// src/components/OurTeam.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";

const teamMembers = [
  { name: "Manoj Vats", position: "Owner", linkedin: "#" },
  { name: "Randhir Rai", position: "Supervisor", linkedin: "#" },
  { name: "Saurabh Rai", position: "Market Head", linkedin: "#" },
  { name: "Pooja Singh", position: "Account", linkedin: "#" },
  { name: "Anjali Yadav", position: "Admin HR", linkedin: "#" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Floating icon effect
const floatAnimation = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function OurTeam() {
  return (
    <section className="relative py-15 px-4 md:px-20 bg-gradient-to-br from-[#003366] via-[#1C1C1C] to-[#003366] text-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full mx-auto text-center"
      >
        {/* Heading */}
        <motion.h4
          variants={itemVariants}
          className="text-[#FFC107] font-semibold mb-2 text-sm uppercase tracking-wide"
        >
          Strong Leadership
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-serif font-extrabold mb-4"
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 max-w-3xl mx-auto mb-5 text-lg"
        >
          The driving force behind{" "}
          <span className="text-[#FFC107] font-semibold">
            Avatar Packers And Movers
          </span>{" "}
          — experienced leaders who ensure trust, reliability, and excellence
          in every relocation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-6"
        >
          <Link to="/contact">
            <button className="bg-gradient-to-r cursor-pointer from-[#FFC107] to-[#FF9800] text-[#1C1C1C] px-7 py-2 rounded-full  hover:opacity-90 transition text-lg shadow-lg">
              Get in Touch
            </button>
          </Link>
          <Link to="/services">
            <button className="border-2 cursor-pointer border-[#FFC107] text-[#FFC107] px-7 py-2 rounded-full  hover:bg-[#FFC107] hover:text-[#1C1C1C] transition text-lg shadow-lg">
              Explore Services
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <ProfileCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 relative z-10">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

// Profile Card Component
function ProfileCard({ member }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      className="flex flex-col items-center space-y-4  p-6 hover:border-[#FFC107]/60 transition"
    >
      <motion.div
        {...floatAnimation}
        className="w-28 h-28 rounded-full border-2 border-[#FFC107] shadow-xl flex items-center justify-center bg-[#003366]/40"
      >
        <FaUserTie className="text-6xl text-[#FFC107]" />
      </motion.div>
      <h4 className="font-bold text-2xl text-white">{member.name}</h4>
      <p className="text-base text-gray-300">{member.position}</p>
      <div className="flex gap-4 text-2xl text-gray-300 hover:text-[#FFC107] transition">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
}
