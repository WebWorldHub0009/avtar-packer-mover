import React from "react";
import { motion } from "framer-motion";
import { BadgeIndianRupee, Truck, Info } from "lucide-react";

// Brand palette for Avatar Packers & Movers
const COLORS = {
  royal: "#003366", // Royal Blue (Trust & Reliability)
  gold: "#FFC107", // Golden Yellow (Premium + Highlight)
  black: "#1C1C1C", // Charcoal Black (Strength & Professionalism)
  gray: "#D9D9D9", // Platinum Gray (Neutral Balance)
  white: "#FFFFFF", // White (Clean Background)
};

const headers = [
  { key: "type", label: "Shifting Type" },
  { key: "50", label: "Up to 50 KM" },
  { key: "500", label: "Up to 500 KM" },
  { key: "1000", label: "Up to 1000 KM" },
  { key: "1500", label: "Up to 1500 KM" },
  { key: "2500", label: "Within 2500 KM" },
];

const rows = [
  {
    type: "1 BHK Home",
    "50": "Rs. 7,000 – 11,000",
    "500": "Rs. 12,000 – 16,000",
    "1000": "Rs. 20,000 – 25,000",
    "1500": "Rs. 26,000 – 32,000",
    "2500": "Rs. 30,000 – 35,000",
  },
  {
    type: "2 BHK Home",
    "50": "Rs. 12,000 – 15,000",
    "500": "Rs. 20,000 – 23,000",
    "1000": "Rs. 25,000 – 30,000",
    "1500": "Rs. 32,000 – 40,000",
    "2500": "Rs. 40,000 – 45,000",
  },
  {
    type: "3 BHK Home",
    "50": "Rs. 15,000 – 18,000",
    "500": "Rs. 25,000 – 30,000",
    "1000": "Rs. 35,000 – 40,000",
    "1500": "Rs. 45,000 – 50,000",
    "2500": "Rs. 50,000 – 65,000",
  },
  {
    type: "4 BHK / Villa",
    "50": "Rs. 25,000 – 30,000",
    "500": "Rs. 35,000 – 40,000",
    "1000": "Rs. 50,000 – 60,000",
    "1500": "Rs. 55,000 – 65,000",
    "2500": "Rs. 70,000 – 90,000",
  },
  {
    type: "Car Transportation",
    "50": "Rs. 9,000 – 11,500",
    "500": "Rs. 12,000 – 14,500",
    "1000": "Rs. 17,000 – 20,000",
    "1500": "Rs. 21,000 – 25,000",
    "2500": "–",
  },
  {
    type: "Bike Transportation",
    "50": "Rs. 3,000 – 7,000",
    "500": "Rs. 7,000 – 10,500",
    "1000": "Rs. 10,000 – 15,000",
    "1500": "Rs. 15,000 – 18,000",
    "2500": "–",
  },
];

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-md"
      style={{
        background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.royal} 100%)`,
        color: COLORS.black,
      }}
    >
      <Truck className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

export default function RatesChargesPremium() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: COLORS.white }}>
      {/* Background gradient accents */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-[120px] opacity-20"
        style={{ background: COLORS.royal }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full blur-[120px] opacity-25"
        style={{ background: COLORS.gold }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            <span className="mr-2">Rates & Charges –</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.royal}, ${COLORS.gold})` }}
            >
              Avatar Packers And Movers
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg font-medium" style={{ color: COLORS.black }}>
            Premium relocation at transparent rates – tailored for your needs.
          </p>
        </motion.div>

        {/* Table */}
        <div
          className="relative overflow-x-auto rounded-2xl shadow-2xl ring-1"
          style={{ background: COLORS.white, borderColor: COLORS.gray }}
        >
          {/* Gradient top bar */}
          <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${COLORS.royal}, ${COLORS.gold})` }} />

          <table className="min-w-[900px] w-full">
            <thead>
              <tr>
                {headers.map((h, idx) => (
                  <th
                    key={h.key}
                    className="px-5 py-4 text-left text-sm md:text-base font-semibold uppercase tracking-wide"
                    style={{
                      color: COLORS.white,
                      background: idx === 0
                        ? `linear-gradient(90deg, ${COLORS.black}, ${COLORS.royal})`
                        : COLORS.royal,
                    }}
                  >
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={row.type} className="transition-colors hover:bg-gray-50">
                  {headers.map((h, cIdx) => {
                    const value = row[h.key] ?? "–";
                    return (
                      <td
                        key={h.key}
                        className={`px-5 py-4 text-sm md:text-base ${cIdx === 0 ? "font-semibold" : ""}`}
                        style={{
                          borderTop: `1px solid ${COLORS.gray}`,
                          color: COLORS.black,
                        }}
                      >
                        {cIdx === 0 ? (
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-2.5 w-2.5 rounded-full"
                              style={{ background: rIdx % 2 === 0 ? COLORS.royal : COLORS.gold }}
                            />
                            {value}
                          </div>
                        ) : (
                          <span className="whitespace-nowrap">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-6 flex items-center gap-3 text-sm max-w-3xl mx-auto text-center justify-center">
          <Info className="h-4 w-4" color={COLORS.royal} />
          <p style={{ color: COLORS.black }}>
            <span className="font-semibold">Note:</span> Prices are approximate and may vary depending on distance, goods volume, packing quality, and additional services.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/contact"
            className="rounded-full px-6 py-3 font-semibold shadow-xl transition-transform hover:scale-105"
            style={{ background: `linear-gradient(90deg, ${COLORS.royal}, ${COLORS.gold})`, color: COLORS.black }}
          >
            Get Free Quote
          </a>
         
        </div>
      </div>
    </section>
  );
}
