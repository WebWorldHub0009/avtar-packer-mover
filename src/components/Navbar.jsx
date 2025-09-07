// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo2 from "../assets/avlogo.png";

const navItemsLeft = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-1" /> },
];

const navItemsRight = [
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
  { name: "Certificates", path: "/certificate", icon: <FaEnvelope className="inline mr-1" /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com",
  whatsapp: "https://api.whatsapp.com/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 hover:text-red-800 ${
      pathname === path ? "text-[#003366] font-semibold" : "text-[#1C1C1C]"
    }`;

  return (
    <>
      {/* ✅ Slim Top Header */}
      <div className="w-full bg-gradient-to-r from-[#002244] via-[#003366] to-[#004080] text-white font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-1 px-4 text-xs md:text-sm">
          {/* Left: Number */}
          <p className="flex items-center gap-2">
            📞 <a href="tel:+919773760041" className="hover:underline">+91 97737 60041</a>
          </p>

          {/* Right: Email */}
          <a
            href="mailto:Info@avatarpackersandmovers.com"
            className="flex items-center gap-2 hover:underline"
          >
            ✉️ Info@avatarpackersandmovers.com
          </a>
        </div>

        {/* ✅ Extra Info only on Desktop */}
        <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between px-4 pb-1 text-xs">
          <p className="flex items-center gap-2">
            🧾 GSTIN/UIN: <span className="font-semibold">09CZMPS9024H1ZQ</span>
          </p>
          <p className="flex items-center gap-2">🏢 UDYAM-UP-28-0107517</p>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-2 bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Left Items */}
          <ul className="hidden md:flex gap-6 text-sm font-medium uppercase">
            {navItemsLeft.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={navLinkClasses(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo2}
              alt="Avatar Packers and Movers Logo"
              className="h-14 md:h-18 object-cover"
            />
          </Link>

          {/* Right Items */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium uppercase">
              {navItemsRight.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={navLinkClasses(item.path)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3 ml-6 text-[#1C1C1C]">
              {Object.entries(socialLinks).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-800"
                >
                  {React.createElement(
                    {
                      facebook: FaFacebookF,
                      instagram: FaInstagram,
                      twitter: FaTwitter,
                      youtube: FaYoutube,
                      linkedin: FaLinkedinIn,
                      skype: FaSkype,
                      whatsapp: FaWhatsapp,
                    }[k],
                    { size: 16 }
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-[#1C1C1C]">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-xl" />
          </div>
        </div>

        {/* ✅ Mobile Panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Slide-out */}
            <div
              ref={panelRef}
              className="w-72 h-full bg-white shadow-xl px-6 py-4 flex flex-col"
            >
              {/* Mobile brand row */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={logo2}
                    alt="Avatar Packers and Movers Logo"
                    className="h-20 md:h-20 object-contain"
                  />
                </Link>
                <FaTimes
                  className="text-xl text-[#1C1C1C] cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4" />

              {/* Mobile Nav Items */}
              <nav className="flex flex-col gap-3 text-sm">
                {[...navItemsLeft, ...navItemsRight].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 ${
                      pathname === item.path
                        ? "font-semibold text-[#003366]"
                        : "text-[#1C1C1C]"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Quick WhatsApp */}
            <div className="mt-6">
  <a
    href="https://wa.me/919540457075"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold py-2 shadow hover:opacity-95 transition"
  >
    <FaWhatsapp /> WhatsApp Us
  </a>
</div>


              {/* Mobile Extra Info */}
              <div className="mt-4 rounded-xl border border-[#D9D9D9] bg-gradient-to-r from-[#F9FAFB] to-white p-3 text-xs text-[#003366]">
                <p>📞 +91 97737 60041</p>
                <p>🧾 GSTIN/UIN: 09CZMPS9024H1ZQ</p>
                <p>🏢 UDYAM-UP-28-0107517</p>
              </div>

              {/* Mobile Social */}
              <div className="mt-auto pt-4 border-t text-xs">
                <div className="flex gap-3 mt-3 text-lg text-[#1C1C1C]">
                  {Object.entries(socialLinks).map(([k, url]) => (
                    <a
                      key={k}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-800"
                    >
                      {React.createElement(
                        {
                          facebook: FaFacebookF,
                          instagram: FaInstagram,
                          twitter: FaTwitter,
                          youtube: FaYoutube,
                          linkedin: FaLinkedinIn,
                          skype: FaSkype,
                          whatsapp: FaWhatsapp,
                        }[k]
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/10 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
