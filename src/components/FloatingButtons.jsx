// src/components/FloatingButtons.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Headphones, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Buttons when open */}
      <AnimatePresence>
        {open && (
          <>
            {/* Call Button */}
            <motion.a
              href="tel:+919773760041"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 flex items-center justify-center rounded-full 
                         bg-[#004C8C] text-white 
                         shadow-lg hover:bg-[#2B9CD7] 
                         hover:scale-110 hover:shadow-2xl transition-all"
              title="Call Now"
            >
              <Phone size={22} />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+919540457075" 


              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="w-12 h-12 flex items-center justify-center rounded-full 
                         bg-[#25D366] shadow-lg 
                         hover:scale-110 hover:shadow-2xl transition-all"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} className="text-white" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-16 h-16 flex items-center justify-center 
                   rounded-full bg-gradient-to-r from-[#79afff] via-[#066aff] to-[#0077ff] 
                   text-white shadow-2xl hover:scale-110 
                   hover:shadow-[#2B9CD7]/50 transition-transform"
      >
        {open ? (
          <X size={26} className="text-[#F9FAFB]" />
        ) : (
          <Headphones size={26} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;