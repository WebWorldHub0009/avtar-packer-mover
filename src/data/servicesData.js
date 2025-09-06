// src/data/servicesData.js
import relocation from "../assets/service/relocation.jpg";
import pack from "../assets/service/packing.jpg";
import move from "../assets/service/movea.jpg";
import car from "../assets/home/car.jpg";
import cargo from "../assets/service/cargoa.jpg";
import commercial from "../assets/service/cmove.jpg";

const servicesData = [
  {
    id: 1,
    image: relocation,
    slug: "relocation-services",
    title: "Relocation Services",
    shortDescription:
      "Seamless domestic and international relocation solutions with expert handling.",
    longDescription:
      "Our Relocation Services are designed to make your move stress-free, efficient, and completely secure. Whether you're shifting within the city, across states, or moving internationally, we ensure that your belongings are packed with precision, transported safely, and delivered on time. With years of expertise and modern infrastructure, we manage every aspect of the relocation process including packing, loading, transportation, unloading, and unpacking. Our dedicated relocation managers provide personalized support to ensure your move is smooth and worry-free.",
    quickPoints: [
      "Door-to-door shifting solutions",
      "Expert packing with quality materials",
      "Local, domestic & international moves",
      "Real-time tracking facility",
      "Safe and timely delivery",
      "Dedicated relocation manager",
    ],
    advantages: [
      "End-to-end relocation assistance",
      "Highly trained professional staff",
      "Advanced packing techniques",
      "Customizable service packages",
    ],
    disadvantages: [
      "Can be slightly costlier for long-distance",
      "Dependent on external transportation conditions",
      "Requires advance scheduling",
      "Limited flexibility for last-minute changes",
    ],
    faq: [
      {
        q: "Do you provide international relocation?",
        a: "Yes, we handle both domestic and international moves with customs clearance support.",
      },
      {
        q: "How do you ensure the safety of fragile items?",
        a: "We use multi-layer packing with bubble wrap, foam, and customized crates for delicate items.",
      },
      {
        q: "Can I track my shipment during relocation?",
        a: "Yes, we provide a real-time tracking system for all relocations.",
      },
      {
        q: "Do you assist with unpacking at the new location?",
        a: "Yes, our team will unpack and arrange items as per your instructions.",
      },
    ],
  },
  {
    id: 2,
    image: pack,
    slug: "packing-services",
    title: "Packing Services",
    shortDescription:
      "Professional packing services with high-quality materials and techniques.",
    longDescription:
      "Our Packing Services are designed to provide maximum safety for your belongings during relocation or storage. We use high-quality packing materials including bubble wrap, corrugated sheets, foam, stretch films, and customized wooden crates. Our trained staff ensures that every item, from delicate crockery to heavy furniture, is packed securely with proper labeling. With our professional packing, you can be assured that your belongings will remain intact and damage-free throughout the moving process.",
    quickPoints: [
      "Premium quality packing materials",
      "Special handling for fragile items",
      "Customized wooden crating",
      "Waterproof and dustproof packing",
      "Systematic labeling for easy unpacking",
      "Professional and trained staff",
    ],
    advantages: [
      "Reduces risk of damage",
      "Efficient and time-saving",
      "Professional quality assurance",
      "Organized labeling system",
    ],
    disadvantages: [
      "Additional cost for premium packing",
      "Requires extra time for thorough packing",
      "Bulky packing may need more space",
      "Not suitable for very last-minute moves",
    ],
    faq: [
      {
        q: "Do you provide packing materials?",
        a: "Yes, we provide all premium packing materials as part of the service.",
      },
      {
        q: "Can I choose eco-friendly packing?",
        a: "Yes, we also offer eco-friendly packing options on request.",
      },
      {
        q: "Do you pack both household and office items?",
        a: "Yes, our packing services cover residential and commercial items.",
      },
      {
        q: "Will you unpack items at the destination?",
        a: "Yes, unpacking is available as part of our complete service package.",
      },
    ],
  },
  {
    id: 3,
    image: move,
    slug: "moving-services",
    title: "Moving Services",
    shortDescription:
      "Complete household and office moving with safety and efficiency.",
    longDescription:
      "Our Moving Services offer reliable and efficient transportation of your goods from one location to another. We provide customized moving solutions based on your requirements—whether it's local shifting, intercity, or corporate office moving. With advanced fleet vehicles, GPS tracking, and trained moving staff, we ensure that your belongings are transported safely and delivered on schedule. Our moving process is systematic, ensuring that loading, unloading, and handling are done with utmost care.",
    quickPoints: [
      "Safe and timely transportation",
      "Suitable for local & intercity moves",
      "GPS tracking enabled vehicles",
      "Experienced and skilled movers",
      "Flexible moving packages",
      "Insurance coverage available",
    ],
    advantages: [
      "End-to-end moving support",
      "Customizable transport solutions",
      "Trained workforce with expertise",
      "On-time delivery commitment",
    ],
    disadvantages: [
      "Dependent on traffic conditions",
      "Risk of weather-related delays",
      "Additional charges for bulky items",
      "Scheduling required in advance",
    ],
    faq: [
      {
        q: "Do you provide insurance for moving?",
        a: "Yes, insurance is available to cover potential damages.",
      },
      {
        q: "Can I book same-day moving?",
        a: "Same-day moving is possible for local shifts, subject to availability.",
      },
      {
        q: "How do you handle heavy furniture?",
        a: "We use specialized equipment and trained manpower for heavy items.",
      },
      {
        q: "Do you provide moving services for offices?",
        a: "Yes, we have dedicated solutions for commercial and office moving.",
      },
    ],
  },
  {
    id: 4,
    image: car,
    slug: "transport-services",
    title: "Transport Services",
    shortDescription:
      "Reliable transportation solutions for goods of all sizes.",
    longDescription:
      "Our Transport Services provide safe and efficient logistics solutions for the movement of goods across the city or country. With a large fleet of vehicles including small carriers, large trucks, and container vehicles, we cater to both personal and business transport requirements. Each transport is handled with proper documentation, trained drivers, and real-time monitoring. We ensure that goods are delivered in perfect condition and within committed timelines.",
    quickPoints: [
      "Large fleet of transport vehicles",
      "Suitable for small & bulk consignments",
      "Trained and verified drivers",
      "Real-time tracking & monitoring",
      "Flexible pricing options",
      "Insurance and documentation support",
    ],
    advantages: [
      "Wide transport network",
      "Affordable and reliable services",
      "Quick response and scheduling",
      "Suitable for personal & business needs",
    ],
    disadvantages: [
      "Subject to road and traffic conditions",
      "Fuel surcharges may apply",
      "Limited customization for smaller loads",
      "Dependent on vehicle availability",
    ],
    faq: [
      {
        q: "Do you provide transport for small items?",
        a: "Yes, we provide vehicle options for both small and large consignments.",
      },
      {
        q: "Is real-time tracking available?",
        a: "Yes, all our vehicles are GPS-enabled for live tracking.",
      },
      {
        q: "Do you handle commercial logistics?",
        a: "Yes, we cater to both residential and commercial transportation.",
      },
      {
        q: "Can I book transport on short notice?",
        a: "Yes, but subject to vehicle availability at that time.",
      },
    ],
  },
  {
    id: 5,
    image: cargo,
    slug: "cargo-services",
    title: "Cargo Services",
    shortDescription:
      "Comprehensive cargo handling solutions for domestic and international shipments.",
    longDescription:
      "Our Cargo Services are designed to ensure safe, secure, and efficient handling of goods. From small packages to large-scale consignments, we provide complete logistics solutions including packaging, warehousing, documentation, and transportation. Whether it's air cargo, sea freight, or road cargo, our team ensures that every shipment is managed with care and delivered on time. With advanced tracking and customs support, we make cargo movement seamless and reliable.",
    quickPoints: [
      "Domestic & international cargo handling",
      "Air, sea, and road freight services",
      "Warehousing & storage options",
      "Secure packaging & labeling",
      "Documentation & customs clearance",
      "On-time and safe delivery",
    ],
    advantages: [
      "Multiple freight options",
      "Strong global logistics network",
      "Full cargo tracking support",
      "Professional documentation assistance",
    ],
    disadvantages: [
      "Customs clearance may cause delays",
      "Weather can affect transit times",
      "Higher costs for urgent shipments",
      "Size restrictions for certain cargo",
    ],
    faq: [
      {
        q: "Do you provide air cargo services?",
        a: "Yes, we provide both domestic and international air cargo services.",
      },
      {
        q: "Is customs clearance included?",
        a: "Yes, our team handles all customs documentation and clearance.",
      },
      {
        q: "Can I store my cargo before shipment?",
        a: "Yes, we offer secure warehousing and storage facilities.",
      },
      {
        q: "Do you handle fragile cargo?",
        a: "Yes, fragile cargo is packed and transported with special care.",
      },
    ],
  },
  {
    id: 6,
    image: commercial,
    slug: "commercial-moving",
    title: "Commercial Moving",
    shortDescription:
      "Efficient and secure commercial moving for offices, shops, and industries.",
    longDescription:
      "Our Commercial Moving services are tailored for businesses that require safe and efficient relocation of offices, shops, or industrial units. From heavy machinery to sensitive documents, we provide secure packing, transportation, and setup at the new location. Our team ensures minimal downtime so that your business operations can resume quickly. With a systematic moving plan and expert staff, we deliver professional commercial relocation solutions.",
    quickPoints: [
      "Office & industrial moving",
      "Specialized handling for machinery",
      "Secure document packing & shifting",
      "Minimal business downtime",
      "Dedicated moving coordinators",
      "End-to-end relocation support",
    ],
    advantages: [
      "Specialized in business relocations",
      "Efficient planning and execution",
      "Secure handling of office assets",
      "Minimal disruption to operations",
    ],
    disadvantages: [
      "Planning required well in advance",
      "Cost varies based on scale of move",
      "Special permits may be needed",
      "Downtime risk if not planned properly",
    ],
    faq: [
      {
        q: "Do you move office equipment and furniture?",
        a: "Yes, we handle all types of office equipment and furniture with care.",
      },
      {
        q: "How do you ensure minimal business downtime?",
        a: "We plan the move in phases and work after office hours if required.",
      },
      {
        q: "Can you handle large industrial machines?",
        a: "Yes, we use specialized equipment for moving heavy machinery.",
      },
      {
        q: "Do you provide relocation insurance?",
        a: "Yes, insurance coverage is available for all commercial relocations.",
      },
    ],
  },
];

export default servicesData;
