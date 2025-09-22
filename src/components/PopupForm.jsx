// src/components/PopupForm.jsx
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/avatarpackers1@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Submission failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center bg-black/40 backdrop-blur-sm">
      {/* Sidebar Form */}
      <div className="relative w-full sm:w-[400px] h-auto max-h-[90vh] bg-white rounded-l-2xl shadow-2xl border-l-4 border-[#FFC107] flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-[#003366] transition"
          onClick={() => setShow(false)}
        >
          <FaTimes size={22} />
        </button>

        {/* Header */}
        <div className="bg-[#003366] text-white text-center py-4 px-6 rounded-tl-2xl">
          <h2 className="text-lg md:text-xl font-bold">
            📦 पैकर्स मूवर्स सेवा के लिए कॉल करें
          </h2>
          <p className="text-sm mt-1 text-[#FFC107] font-semibold">
            <a href="tel:+919773760041" className="hover:underline">
              📞 +91 97737 60041
            </a>
          </p>
        </div>

        {/* Form Content */}
        <div className="p-5 overflow-y-auto flex-1">
          {submitted ? (
            <p className="text-center text-[#3CB371] font-semibold text-lg">
              ✅ Your details have been submitted successfully! <br />
              Our team will contact you shortly.
            </p>
          ) : (
            <form className="grid gap-3" onSubmit={handleSubmit}>
              {/* Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://www.avatarpackersandmovers.com/"
              />

              {/* Input Fields */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
              <input
                type="text"
                name="address"
                placeholder="Current Address"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="moveFrom"
                  placeholder="Move From (City)"
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
                <input
                  type="text"
                  name="moveTo"
                  placeholder="Move To (City)"
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
              </div>

              <input
                type="date"
                name="date"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 rounded-lg font-bold text-white bg-[#003366] hover:bg-[#FFC107] hover:text-[#003366] transition duration-300 shadow-md ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit Details"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
