


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
           className="h-full flex"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/WHO WE ARE.png"
              alt="Technoworld"
              width={760}
              height={880}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

       


        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold bg-[#3592ea]/10 text-[#3592ea] px-4 py-2 rounded-full">
            WHO WE ARE
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-5 leading-snug">
            Discover About Our <br /> Commitment To Smart Living.
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg">
            As pioneers in smart housing, we transform ordinary
            living spaces into extraordinary experiences. 
          </p>

          <button
            className="mt-6 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition hover:opacity-90"
            style={{ background: "linear-gradient(to right, #3592ea, #0a63b1)" }}
          >
            Learn More →
          </button>

          {/* --- ROW: Video thumbnail (left) + Gradient feature (right) --- */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            {/* Thumbnail occupies first column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/31.png"
                  alt="Smart Panel"
                  width={340}
                  height={220}
                  className="object-cover w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                    className="bg-white/90 p-3 rounded-full"
                  >
                    <Play className="text-[#3592ea]" size={22} />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Gradient feature occupies columns 2-3 on small screens (so it looks wide) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true }}
              className="col-span-1 sm:col-span-2"
            >
              <div className="rounded-2xl bg-gradient-to-r from-[#07122b] via-[#0f2b50] to-[#0b1f3a] text-white p-6 flex items-center gap-6 shadow-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Innovative Technology</h3>
                  <p className="text-sm opacity-90 mt-2">
                    Smart automation powered by intelligent devices.
                  </p>
                </div>
                {/* optional small accent circle */}
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v6" stroke="#FFD166" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M6 8h12" stroke="#FFD166" strokeWidth="1.4" strokeLinecap="round"/>
                    <circle cx="12" cy="15" r="4" stroke="#FFD166" strokeWidth="1.4"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- CUSTOMER-CENTRIC box (full width under video+feature) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <h4 className="text-lg font-bold text-gray-900">Customer-Centric Approach</h4>
              <p className="text-sm text-gray-600 mt-2">
                Putting customers first — always. We tailor our services to match 
                their needs and deliver seamless experiences.
              </p>
            </div>

            {/* Quote / paragraph under it */}
            <p className="mt-6 text-gray-500 italic max-w-xl">
             Our homes are thoughtfully designed with cutting-edge,
technology and eco-friendly solutions, ensuring a seamless blend of
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

// <section className="w-full py-24 bg-white">
//   <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-stretch">
//     {/* LEFT IMAGE */}
//     <motion.div
//       initial={{ opacity: 0, x: -70 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//       className="h-full flex"
//     >
//       <div className="rounded-3xl overflow-hidden shadow-xl w-full h-full">
//         <Image
//           src="/future.jpg"
//           alt="Technoworld"
//           width={760}
//           height={880}
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </motion.div>

//     {/* RIGHT CONTENT */}
//     <motion.div
//       initial={{ opacity: 0, x: 70 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//       className="h-full flex flex-col justify-between"
//     >
//       {/* (Your right content remains unchanged) */}
//       <span className="text-xs font-semibold bg-[#3592ea]/10 text-[#3592ea] px-4 py-2 rounded-full">
//         WHO WE ARE
//       </span>

//       <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-5 leading-snug">
//         Discover About Our <br /> Commitment To Smart Living.
//       </h2>

//       <p className="text-gray-600 mt-4 max-w-lg">
//         As pioneers in smart housing, we transform ordinary
//         living spaces into extraordinary experiences. 
//       </p>

//       <button
//         className="mt-6 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition hover:opacity-90"
//         style={{ background: "linear-gradient(to right, #3592ea, #0a63b1)" }}
//       >
//         Learn More →
//       </button>

//       {/* --- (Video section + bottom box unchanged) --- */}
//       {/* Keep your existing motion.div blocks below */}
//       {/* ... */}
//     </motion.div>
//   </div>
// </section>

  );
}
