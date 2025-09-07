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
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

// 🖼️ Import background + logo
import footerBg from "../assets/avbg.jpg";
import logo from "../assets/avlogo.png";

// Avatar Packers And Movers Services
const services = [
  { title: "Relocation Services", slug: "relocation-services" },
  { title: "Packing Services", slug: "packing-services" },
  { title: "Moving Services", slug: "moving-services" },
  { title: "Transport Services", slug: "transport-services" },
  { title: "Cargo Services", slug: "cargo-services" },
  { title: "Commercial Moving", slug: "commercial-moving" },
];

export default function Footer() {
  useEffect(() => {
    // Any side effects if needed later
  }, []);

  return (
    <footer className="relative pt-12 pb-12 px-6 md:px-16 font-[poppins] text-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Avatar Packers And Movers Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md"
              />
            </div>
            <p className="text-2xl md:text-4xl font-semibold text-red-800 tracking-wide">
              Avatar Packers & Movers
            </p>
          </div>

          <p className="leading-relaxed text-black text-md mt-2">
            Trusted partner for safe, reliable, and affordable relocation,
            transport, and cargo services across India. We ensure smooth
            moving with professional care.
          </p>

          {/* Social Icons */}
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
                className="text-red-800 hover:text-black transition duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="mailto:Info@avatarpackersandmovers.com"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-white transition duration-300"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-3xl mb-4 text-red-800">
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
                  className="flex items-center gap-2 text-black hover:text-red-800 transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold text-3xl mt-6 mb-2 text-red-800">
            Business Info
          </h4>
          <ul className="space-y-2 text-black">
            <li>GSTIN/UIN: 09CZMPS9024H1ZQ</li>
            <li>UDYAM: UP-28-0107517</li>
            <li>Trade Mark No: 6261467</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-3xl mb-4 text-red-800">
            Our Services
          </h4>
          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving className="text-red-800" />
                <Link
                  to={`/services/${slug}`}
                  className="text-black hover:text-red-800 transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-3xl mb-4 text-red-800">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-black">
            Address: Plot 186/187 Sain farm Richpal Gari Gaurcity 2, Greater
            Noida W Rd, Gaur City 2, Greater Noida, Uttar Pradesh 201309
          </address>

          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-red-800" /> Owner: -
          </p>
          {["+91 9773760041", "+91 9773760042", "+91 9540457075"].map(
            (num, i) => (
              <p key={i} className="text-sm mb-2 flex items-center gap-2">
                <FaPhoneAlt className="text-red-800" />
                <a
                  href={`tel:${num.replace(/\s/g, "")}`}
                  className="hover:text-black transition duration-300"
                >
                  {num}
                </a>
              </p>
            )
          )}

          <div className="mb-4 flex justify-start items-center">
            <div className="relative">
              <Translator />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-black border-t border-gray-500 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Avatar Packers And Movers. All rights
          reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-red-800 transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
