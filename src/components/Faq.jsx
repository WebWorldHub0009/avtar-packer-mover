// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBug,
  FaShieldAlt,
  FaLeaf,
  FaPhoneAlt,
} from "react-icons/fa";
import bgImage from "../assets/home/fbg.jpg"; // Pest-related clean background

const faqCategories = {
  "Pest Control Basics": {
    icon: <FaBug className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "What types of pests do you handle?",
        answer:
          "We provide solutions for cockroaches, termites, rodents, mosquitoes, ants, bed bugs, and more. Whether it’s your home, office, or garden, we ensure complete protection.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer:
          "Yes, we use eco-friendly and WHO-approved chemicals that are safe for children, pets, and the environment while being highly effective against pests.",
      },
      {
        question: "Do I need to leave home during treatment?",
        answer:
          "In most cases, it’s not required. However, for certain treatments like bed bugs or heavy fogging, we may advise a short stay outside for safety.",
      },
    ],
  },
  "Services & Coverage": {
    icon: <FaShieldAlt className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "Do you provide one-time services or annual contracts?",
        answer:
          "We provide both! You can choose a one-time service or opt for an Annual Maintenance Contract (AMC) for year-round pest-free living.",
      },
      {
        question: "Which areas do you serve?",
        answer:
          "We provide pest control services across Delhi NCR, including homes, apartments, offices, restaurants, hotels, and commercial properties.",
      },
      {
        question: "Do you offer sanitisation services?",
        answer:
          "Yes, we provide professional sanitisation and disinfection services to ensure your space is germ-free and safe.",
      },
    ],
  },
  "Process & Pricing": {
    icon: <FaLeaf className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "How does your pest control process work?",
        answer:
          "Our experts first inspect the site, identify the problem, and then provide a customized treatment plan using eco-safe solutions.",
      },
      {
        question: "What are your charges?",
        answer:
          "Pricing depends on the size of the property, type of pest, and treatment required. We provide transparent quotes with no hidden costs.",
      },
      {
        question: "How long does a treatment last?",
        answer:
          "Effectiveness depends on the pest type and severity. For many pests, results last 3–6 months, while AMCs ensure continuous protection.",
      },
    ],
  },
  "Support & Contact": {
    icon: <FaPhoneAlt className="text-[#3CB371] text-xl" />,
    faqs: [
      {
        question: "How can I book a service?",
        answer:
          "Simply call us, WhatsApp us, or book through our website. Our team will schedule a convenient time for your treatment.",
      },
      {
        question: "Do you provide emergency pest control?",
        answer:
          "Yes, we offer urgent pest control services for severe infestations and emergencies.",
      },
      {
        question: "Do you give a service warranty?",
        answer:
          "Absolutely. Most of our treatments come with a warranty period, ensuring peace of mind and reliable service.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Pest Control Basics");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-5 px-4 md:px-10 bg-cover bg-center text-[#1B4332] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Green overlay for premium look */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* FAQ Container */}
      <div className="relative max-w-7xl mx-auto rounded-3xl shadow-lg bg-transparent z-10 ">
        <div className="text-center py-14 px-6 border-b border-gray-200">
          <h2 className="text-4xl font-bold mb-3 font-[poppins] text-[#1B4332]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3D5A40] max-w-2xl mx-auto text-sm sm:text-base">
            Learn more about{" "}
            <span className="text-[#3CB371] font-semibold">
              Neat & Clean Pest Control
            </span>{" "}
            and how we protect homes and businesses across Delhi NCR.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Tabs with Icons */}
          <div className="md:w-1/3  p-6 border-r border-gray-200 flex flex-col gap-4">
            {Object.entries(faqCategories).map(([category, data], idx) => (
              <motion.button
                key={idx}
                onClick={() => handleTabChange(category)}
                whileTap={{ scale: 0.98 }}
                className={`text-left w-full px-5 font-[poppins] py-4 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base transition-all duration-200 ${
                  activeTab === category
                    ? "bg-gradient-to-r from-[#3CB371] to-[#1B4332] text-white shadow"
                    : "bg-white text-[#3D5A40] hover:bg-[#E6F9ED]"
                }`}
              >
                {data.icon}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Questions */}
          <div className="md:w-2/3 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {faqCategories[activeTab].faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <button
                      className="w-full flex cursor-pointer font-[poppins] justify-between items-center text-left font-medium text-base sm:text-lg text-[#1B4332]"
                      onClick={() =>
                        setOpenIndex(index === openIndex ? null : index)
                      }
                    >
                      {faq.question}
                      <span className="text-[#3CB371] text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#3D5A40] mt-3 text-sm leading-relaxed overflow-hidden"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
