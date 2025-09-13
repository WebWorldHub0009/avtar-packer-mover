import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaSmile,
  FaCheckCircle,
} from "react-icons/fa";

export default function QuoteForm() {
  return (
    <section className="relative bg-[#001a33] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Column - Info */}
        <div className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-800 mb-6 leading-snug">
            Get Your Free Moving Quote
          </h2>
          <p className="text-gray-800 text-base sm:text-lg italic mb-8">
            “Safe, Reliable & On-Time Moving Solutions You Can Trust.”
          </p>

          <ul className="space-y-4 sm:space-y-5 text-gray-800 text-sm sm:text-base">
            <li className="flex items-start space-x-3">
              <FaShieldAlt className="text-red-800 text-lg sm:text-xl mt-1" />
              <span>Trusted and Secured Relocation Services</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaClock className="text-red-800 text-lg sm:text-xl mt-1" />
              <span>On-Time Pickup & Delivery</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaSmile className="text-red-800 text-lg sm:text-xl mt-1" />
              <span>Professional & Friendly Team</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaCheckCircle className="text-red-800 text-lg sm:text-xl mt-1" />
              <span>Affordable Pricing with No Hidden Charges</span>
            </li>
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="bg-[#f0ecec] p-6 sm:p-8 lg:p-12">
         <form
  action="https://formsubmit.co/avatarpackers1@gmail.com"
  method="POST"
  className="space-y-6"
>
  {/* Hidden Inputs */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input
    type="hidden"
    name="_subject"
    value="New Quote Request - Avatar Packers & Movers"
  />
  {/* ✅ Redirect back to your domain */}
  <input
    type="hidden"
    name="_next"
    value="https://avatarpackersandmovers.com"
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    {/* Name */}
    <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
      <FaUser className="text-gray-600 mr-2" />
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
      />
    </div>

    {/* Email */}
    <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
      <FaEnvelope className="text-gray-600 mr-2" />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
      />
    </div>

    {/* Phone */}
    <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
      <FaPhone className="text-gray-600 mr-2" />
      <input
        type="text"
        name="number"
        placeholder="Phone Number"
        required
        className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
      />
    </div>

    {/* Date */}
    <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
      <FaCalendarAlt className="text-gray-600 mr-2" />
      <input
        type="date"
        name="date"
        required
        className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
      />
    </div>
  </div>

  {/* Moving From */}
  <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
    <FaMapMarkerAlt className="text-gray-600 mr-2" />
    <input
      type="text"
      name="movingFrom"
      placeholder="Moving From"
      required
      className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
    />
  </div>

  {/* Moving To */}
  <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
    <FaMapMarkerAlt className="text-gray-600 mr-2" />
    <input
      type="text"
      name="movingTo"
      placeholder="Moving To"
      required
      className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
    />
  </div>

  {/* Service */}
  <div className="flex items-center border rounded-lg px-3 bg-gray-200 focus-within:ring-2 focus-within:ring-[#FFC107]">
    <FaTruck className="text-gray-600 mr-2" />
    <select
      name="service"
      required
      className="w-full p-2 sm:p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
    >
      <option value="">Select Service</option>
      <option value="Relocation Services">Relocation Services</option>
      <option value="Packing Services">Packing Services</option>
      <option value="Moving Services">Moving Services</option>
      <option value="Transport Services">Transport Services</option>
      <option value="Cargo Services">Cargo Services</option>
      <option value="Commercial Moving">Commercial Moving</option>
    </select>
  </div>

  {/* Submit */}
  <div className="text-center">
    <button
      type="submit"
      className="w-full sm:w-auto px-8 sm:px-10 py-3 cursor-pointer bg-black text-white font-semibold text-base sm:text-lg 
                 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
    >
      Submit Request
    </button>
  </div>
</form>

        </div>
      </div>
    </section>
  );
}
