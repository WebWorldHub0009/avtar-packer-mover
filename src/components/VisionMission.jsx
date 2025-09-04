
import React from "react";
import visionBg from "../assets/home/v2.jpg";
import mobileVisionBg from "../assets/home/v1.jpg";

const VisionMission = () => {
  return (
    <>
      {/* Desktop / Tablet View */}
      <section
        className="relative hidden md:flex h-screen w-full bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${visionBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-6 lg:px-12 flex justify-end">
          <div className="w-full lg:w-1/2 text-white space-y-10  p-10 md:p-14 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            {/* Vision */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-[poppins] tracking-wide bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-4 text-md md:text-lg text-gray-200 leading-relaxed tracking-wide">
                To create safe, pest-free, and hygienic environments by offering
                eco-friendly pest management solutions that protect homes,
                businesses, and communities while caring for nature.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#3CB371] to-[#2E8B57] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2 className="text-4xl md:text-5xl font-[poppins] font-extrabold tracking-wide bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-4 text-md md:text-lg text-gray-200 leading-relaxed tracking-wide">
                To deliver reliable, premium-quality pest control services using
                innovative techniques, trained professionals, and sustainable
                practices — ensuring healthier spaces and peace of mind for our
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        className="relative flex md:hidden h-screen w-full bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${mobileVisionBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-6 flex justify-center">
          <div className="w-full text-white space-y-8 p-6 rounded-2xl shadow-xl text-center ">
            {/* Vision */}
            <div>
              <h2 className="text-3xl font-[poppins] font-extrabold bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                To create safe, pest-free, and hygienic environments with
                eco-friendly pest management that protects homes and nature.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-[#3CB371] to-[#2E8B57] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl font-[poppins] font-extrabold bg-gradient-to-r from-[#3CB371] to-[#2E8B57] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                To provide trusted pest control services with modern techniques,
                skilled experts, and sustainable solutions that guarantee peace
                of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
