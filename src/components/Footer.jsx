import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Avtar Packers & Movers Services
const services = [
  { title: "Relocation Services", slug: "relocation-services" },
  { title: "Packing Services", slug: "packing-services" },
  { title: "Moving Services", slug: "moving-services" },
  { title: "Transport Services", slug: "transport-services" },
  { title: "Cargo Services", slug: "cargo-services" },
  { title: "Commercial Moving", slug: "commercial-moving" },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-12 pb-12 px-6 md:px-16 font-[poppins] text-white overflow-hidden bg-[#003366]"
    >
      {/* Overlay for slight gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F] via-[#003366] to-[#1C1C1C] opacity-95 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-4xl text-[#FFC107] mb-2">
            Avtar Packers & Movers
          </h4>
          <p className="leading-relaxed text-gray-200">
            Trusted partner for safe, reliable, and affordable relocation, 
            transport, and cargo services across India. We ensure smooth 
            moving with professional care.
          </p>

          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=919773760041&text=Hello%20Avtar%20Packers%20and%20Movers&type=phone_number&app_absent=0",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC107] hover:text-white transition duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="mailto:Info@avatarpackersandmovers.com"
              className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1C1C1C] px-4 py-2 rounded-lg font-semibold hover:bg-white transition duration-300"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-2xl mb-4 text-[#FFC107]">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              ["Certificates", "/certificate", <FaCertificate />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-gray-200 hover:text-[#FFC107] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* IDs */}
          <h4 className="font-semibold text-2xl mt-6 mb-2 text-[#FFC107]">
            Business Info
          </h4>
          <ul className="space-y-2 text-gray-200">
            <li>GSTIN/UIN: 09CZMPS9024H1ZQ</li>
            <li>UDYAM: UP-28-0107517</li>
            <li>Trade Mark No: 6261467</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-2xl mb-4 text-[#FFC107]">
            Our Services
          </h4>
          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving className="text-[#FFC107]" />
                <Link
                  to={`/services/${slug}`}
                  className="text-gray-200 hover:text-[#FFC107] transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-2xl mb-4 text-[#FFC107]">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-200">
          Address: Plot 186/187 Sain farm Richpal Gari Gaurcity 2, Greater Noida W Rd, Gaur City 2, Greater Noida, Uttar Pradesh 201309
          </address>

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-[#FFC107]" /> Owner: Manoj Vats
          </p>
          {["+91 97737 60041", "+91 88607 50143", "+91 97737 60042", "+91 9540457075"].map(
            (num, i) => (
              <p key={i} className="text-sm mb-2 flex items-center gap-2">
                <FaPhoneAlt className="text-[#FFC107]" />
                <a
                  href={`tel:${num.replace(/\s/g, "")}`}
                  className="hover:text-white transition duration-300"
                >
                  {num}
                </a>
              </p>
            )
          )}

          <div className="mb-4 flex justify-start items-center">
            <div className="relative right-6">

            <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-300 border-t border-gray-500 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Avtar Packers & Movers. All rights
          reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#FFC107] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
