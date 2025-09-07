import React from 'react'
import ContactHero from '../components/ContactHero'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt} from "react-icons/fa";
import bg from "../assets/home/ah2.jpg";
import MapSection from '../components/MapSection';


const Contact = () => {
  return (
  <>
  <ContactHero/>

 <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#FFFFFF] text-[#1C1C1C] mt-1 font-body">
  {/* Left Panel: Info */}
  <div className="w-full lg:w-1/2 bg-[#F9F9F9] px-8 py-16 shadow-2xl">
    <h2 className="text-4xl font-cursive1 font-bold mb-6 pb-3 inline-block border-b-4 border-red-800 text-[#003366]">
      Let’s Connect
    </h2>
    <p className="text-lg text-[#5E5E5E] mb-10 font-body leading-relaxed">
      At{" "}
      <span className="font-cursive2 text-xl text-[#003366]">
        Avatar Packers & Movers
      </span>
      , we ensure safe, professional, and stress-free relocation services
      tailored to your needs.
    </p>

    <div className="space-y-2 text-sm sm:text-base">
      <div>
        <h4 className="font-semibold text-red-800">Owner</h4>
        <p className=" font-bold text-xl">-</p>

      </div>

      <div>
        <h4 className="font-semibold mb-1 text-red-800">Contact Numbers</h4>
        <p>📞 <a href="tel:+919773760041" className="hover:text-[#003366]">+91 97737 60041</a></p>
        <p>📞 <a href="tel:+919773760042" className="hover:text-[#003366]">+91 97737 60042</a></p>
        <p>📞 <a href="tel:+919540457075" className="hover:text-[#003366]">+91 95404 57075</a></p>
      </div>

      <div>
        <h4 className="font-semibold mb-1 text-red-800">Email</h4>
        <p>
          ✉️ <a href="mailto:Info@avatarpackersandmovers.com" className="hover:text-[#003366]">
            Info@avatarpackersandmovers.com
          </a>
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-1 text-red-800">Office Address</h4>
        <p className="leading-relaxed">
          Plot 186/187, Sain Farm, Richpal Gari, Gaur City 2, <br />
          Greater Noida W Rd, Greater Noida, Uttar Pradesh - 201309
        </p>
      </div>
    </div>

    {/* Social Icons */}
    <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
      {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map((Icon, i) => (
        <Icon
          key={i}
          className="hover:text-red-800 transition-colors cursor-pointer"
        />
      ))}
    </div>
  </div>

  {/* Right Panel: Form */}
  <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    />
    <div className="absolute inset-0 bg-black/60 " />

    {/* Form */}
    <form
      action="https://formsubmit.co/Info@avatarpackersandmovers.com"
      method="POST"
      className="relative z-10 w-full max-w-lg px-8 py-6 "
    >
      <h3 className="text-2xl font-cursive2 font-bold text-red-800 mb-6 border-b-2 border-[#FFC107] inline-block">
        Get in Touch
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#FFC107] outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#FFC107] outline-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          required
          className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#FFC107] outline-none"
        />
        <input
          type="text"
          name="move_from"
          placeholder="Moving From"
          required
          className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#FFC107] outline-none"
        />
        <input
          type="text"
          name="move_to"
          placeholder="Moving To"
          required
          className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#FFC107] outline-none"
        />

        {/* Services Dropdown */}
        <select
          name="service"
          required
          className="bg-transparent border-b border-[#D9D9D9] text-white py-2 focus:border-[#FFC107] outline-none"
        >
          <option value="" disabled selected className="text-gray-400">
            Select Service
          </option>
          <option value="Home Shifting" className="text-black">
            Home Shifting
          </option>
          <option value="Office Relocation" className="text-black">
            Office Relocation
          </option>
          <option value="Car/Bike Transportation" className="text-black">
            Car/Bike Transportation
          </option>
          <option value="Local Shifting" className="text-black">
            Local Shifting
          </option>
          <option value="Domestic Relocation" className="text-black">
            Domestic Relocation
          </option>
          <option value="Warehouse & Storage" className="text-black">
            Warehouse & Storage
          </option>
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="col-span-full bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#FFC107] outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white py-3 font-cursive2 font-semibold rounded-full hover:bg-yellow-500 transition duration-300 shadow-lg"
      >
        🚚 Send Message
      </button>

      {/* Formsubmit config */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.avatarpackersandmovers.com/" />
    </form>
  </div>
</section>
<MapSection/>

  </>
   
  )
}

export default Contact