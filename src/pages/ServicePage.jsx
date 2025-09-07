// src/pages/ServicePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaQuestionCircle,
  FaAngleRight,
  FaShippingFast,
  FaBoxOpen,
  FaHandsHelping,
  FaShieldAlt,
  FaArrowRight,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AvatarBadge from "../components/Badge";

const ServicePage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.slug === slug);
    setService(foundService);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-600 font-bold">
        Service Not Found
      </div>
    );
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-gray-100 to-white text-gray-900 font-sans">

      {/* HERO */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        {/* Bottom-left Hero Content */}
        <div className="absolute bottom-6 left-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold flex items-center gap-2 text-gray-800"
          >
            <FaShippingFast className="text-green-500 animate-pulse" />
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-2 text-black text-lg"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto py-10 px-6 md:px-12 space-y-20">

        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-green-600">
            <FaShippingFast className="animate-pulse" /> Overview
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
            {service.longDescription}
          </p>
        </motion.div>

        {/* QUICK POINTS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-red-800">
            <FaBoxOpen className="animate-bounce" /> Quick Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.quickPoints.map((point, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white shadow-md p-4 rounded-2xl flex items-center gap-3 hover:bg-yellow-100 cursor-pointer transition duration-300"
              >
                <FaAngleRight className="text-red-800" />
                <p className="text-gray-900 font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ADVANTAGES & DISADVANTAGES */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ADVANTAGES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 text-green-600">
              <FaCheckCircle /> Advantages
            </h2>
            <ul className="space-y-3">
              {service.advantages.map((adv, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-green-50 p-4 rounded-xl hover:bg-green-100 transition duration-300 shadow-sm hover:shadow-lg"
                >
                  <FaHandsHelping className="text-green-500 animate-pulse" />
                  <span className="text-gray-900">{adv}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DISADVANTAGES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 text-red-600">
              <FaTimesCircle /> Disadvantages
            </h2>
            <ul className="space-y-3">
              {service.disadvantages.map((dis, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-red-50 p-4 rounded-xl hover:bg-red-100 transition duration-300 shadow-sm hover:shadow-lg"
                >
                  <FaShieldAlt className="text-red-500" />
                  <span className="text-gray-900">{dis}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-blue-500">
            <FaQuestionCircle className="animate-bounce" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-gray-900 font-semibold text-lg"
                >
                  {item.q}
                  {activeFaq === idx ? (
                    <FaMinus className="text-blue-500" />
                  ) : (
                    <FaPlus className="text-blue-500" />
                  )}
                </button>
                <div
                  className={`px-5 pb-5 text-gray-700 text-base transition-all duration-500 ${
                    activeFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.a}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      
      </div>
    </div>
    <AvatarBadge/>
    </>
  );
};

export default ServicePage;
