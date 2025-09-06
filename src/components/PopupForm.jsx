// src/components/PopupForm.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-[#FFC107]"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-[#003366] transition"
              onClick={() => setShow(false)}
            >
              <FaTimes size={22} />
            </button>

            {/* Header */}
            <div className="bg-[#003366] text-white text-center py-5 px-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Get Your Free Moving Quote
              </h2>
              <p className="text-sm mt-1 text-[#FFC107]">
                Fast • Reliable • Hassle-Free
              </p>
            </div>

            {/* Form */}
            <div className="p-6">
              {submitted ? (
                <p className="text-center text-[#3CB371] font-semibold text-lg">
                  ✅ Your details have been submitted successfully! <br />
                  Our team will contact you shortly.
                </p>
              ) : (
                <form
                  action="https://formsubmit.co/Info@avatarpackersandmovers.com"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="grid gap-4"
                >
                  {/* Hidden Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://www.avatarpackersandmovers.com/thank-you"
                  />

                  {/* Fields */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Current Address"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="moveFrom"
                      placeholder="Move From (City)"
                      required
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    />
                    <input
                      type="text"
                      name="moveTo"
                      placeholder="Move To (City)"
                      required
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                    />
                  </div>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-bold text-white bg-[#003366] hover:bg-[#FFC107] hover:text-[#003366] transition duration-300 shadow-md"
                  >
                    Submit Details
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
