// src/components/HeroSection.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiPackage, FiTruck, FiHome, FiBox } from "react-icons/fi";
import baseImage from "../assets/home/car.jpg";

// Packer Mover related images
import localMove from "../assets/home/av12.jpg";
import officeMove from "../assets/home/ah4.jpeg";
import houseShift from "../assets/home/ah5.jpg";
import carTransport from "../assets/home/car.jpg";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Safe, Fast & Reliable",
    subtitle: "Trusted Packers & Movers for every shifting need",
    rightTitle: "For Shifting",
    rightSubtitle: "Quick & Hassle-Free",
    icon: <FiHome />,
    img: localMove || baseImage,
    phone: "+91 9773760041",   // ✅ Added
  },
  {
    id: 2,
    title: "Corporate & Office Moves",
    subtitle: "Seamless relocation for businesses & teams",
    rightTitle: "Office Relocation",
    rightSubtitle: "Professional Handling",
    icon: <FiPackage />,
    img: officeMove || baseImage,
    phone: "+91 9773760042",   // ✅ Added
  },
  {
    id: 3,
    title: "Stress-Free Home Shifting",
    subtitle: "Door-to-door premium household moving solutions",
    rightTitle: "Household Shifting",
    rightSubtitle: "All India Service",
    icon: <FiTruck />,
    img: houseShift || baseImage,
    phone: "+91 9540457075",   // ✅ Added
  },
  {
    id: 4,
    title: "Secure Car & Bike Transport",
    subtitle: "Safe, reliable, and on-time vehicle delivery",
    rightTitle: "Vehicle Transport",
    rightSubtitle: "Nationwide Service",
    icon: <FiBox />,
    img: carTransport || baseImage,
    // no phone here
  },
];


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // 🔍 Search states
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const activeSlide = slides[activeIndex];
  const bgKey = useMemo(() => `bg-${activeIndex}`, [activeIndex]);

  // Manual slide change
  const handleSlideClick = (i) => {
    setActiveIndex(i);
    setLoaded(false);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = slides.filter(
      (s) =>
        s.title.toLowerCase().includes(value) ||
        s.subtitle.toLowerCase().includes(value) ||
        s.rightTitle.toLowerCase().includes(value) ||
        s.rightSubtitle.toLowerCase().includes(value)
    );

    setSuggestions(filtered);
  };

  // Enter key → jump to first suggestion
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      const firstMatchIndex = slides.findIndex(
        (s) => s.id === suggestions[0].id
      );
      if (firstMatchIndex >= 0) {
        setActiveIndex(firstMatchIndex);
        setSuggestions([]);
        setQuery("");
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background with Blur Loader */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgKey}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeSlide.img || baseImage})`,
            }}
          >
            {!loaded && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse" />
            )}
            <img
              src={activeSlide.img}
              alt={activeSlide.title}
              loading="eager"
              onLoad={() => setLoaded(true)}
              className="hidden"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-black/70" />
      </div>

      {/* LEFT SLIDE LIST (desktop only) */}
      <div className="absolute top-0 left-0 h-full text-gray-400 w-1/3 bg-black/60 hidden lg:block">
        <div className="h-full w-full flex items-center pl-6 md:pl-16 pr-6 py-8">
          <div className="relative w-full max-w-sm">
            <ul className="space-y-6">
              {slides.map((slide, i) => {
                const isActive = i === activeIndex;
                return (
                  <li
                    key={slide.id}
                    className="relative cursor-pointer"
                    onClick={() => handleSlideClick(i)}
                  >
                    {isActive && (
                      <span className="absolute -left-6 top-0 bottom-0 w-1 rounded bg-red-800" />
                    )}
                    <p
                      className={`text-sm mb-1 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {slide.id.toString().padStart(2, "0")} .
                    </p>
                    <div>
                      <h3
                        className={`leading-tight ${
                          isActive
                            ? "text-2xl md:text-[28px] font-semibold text-white"
                            : "text-lg text-gray-300"
                        }`}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className={`mt-0.5 ${
                          isActive ? "opacity-90" : "opacity-70"
                        } text-sm`}
                      >
                        {slide.subtitle}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="absolute inset-x-0 top-24 md:top-1/2 md:right-24 md:inset-x-auto md:-translate-y-1/2 text-white px-6 text-center lg:text-right">
        <h2 className="text-sm md:text-xl font-light mb-2 text-white">
          {activeSlide.rightSubtitle}
        </h2>
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
          {activeSlide.rightTitle}
        </h1>
          {/* Show phone if available */}
 {activeSlide.phone && (
  <a
    href={`tel:${activeSlide.phone.replace(/\s+/g, "")}`}
    className="group mt-2 inline-flex items-center gap-3 text-lg md:text-xl font-semibold text-white px-6 py-3  relative overflow-hidden"
  >
    {/* Pulsing circle behind icon */}
    <span className="absolute left-3 w-10 h-10 rounded-full bg-green-700 opacity-30 animate-ping"></span>

    {/* Phone Icon */}
    <span className="relative z-10 flex items-center  justify-center w-10 h-10 rounded-full bg-green-800 group-hover:bg-green-900 transition">
      <FaPhoneAlt/>
    </span>

    {/* Phone Number */}
    <span className="relative z-10 group-hover:text-gray-100 transition">
      {activeSlide.phone}
    </span>
  </a>
)}



        {/* 🔍 Search box */}
        <div className="relative mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto">
          <div className="flex items-center border-b border-white/90 pb-2">
            <FiSearch className="text-white text-xl mr-3" />
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent w-full focus:outline-none placeholder-white/80 text-base md:text-lg"
            />
          </div>

          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-2 left-0 w-full bg-black/80 backdrop-blur-md rounded-lg shadow-lg border border-white/20 z-50 max-h-40 overflow-y-auto">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-4 py-2 text-sm text-white hover:bg-white/20 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(slides.findIndex((sl) => sl.id === s.id));
                    setSuggestions([]);
                    setQuery("");
                  }}
                >
                  {s.rightTitle} —{" "}
                  <span className="opacity-70">{s.subtitle}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 📱 MOBILE CENTER PREMIUM CONTENT */}
      <div className="absolute inset-x-0 top-72 flex justify-center items-center sm:top-36 text-center px-6 block lg:hidden">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" px-6 py-6 max-w-sm mx-auto"
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="text-white text-3xl">{activeSlide.icon}</div>
           
            <p className=" text-gray-100 opacity-90 text-2xl leading-relaxed">
              {activeSlide.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* MOBILE SLIDE LIST (premium style) */}
      <div className="absolute bottom-6 left-0 w-full px-4 block lg:hidden">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => handleSlideClick(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm transition shadow-md ${
                i === activeIndex
                  ? "text-red-800 text-black font-semibold shadow-lg scale-105"
                  : "bg-white/20 text-white/80 hover:bg-white/30"
              }`}
            >
              <span className="text-base">{slide.icon}</span>
              {slide.rightTitle}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
