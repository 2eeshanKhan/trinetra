"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function OurValueSection() {
  return (
    <section className="bg-[#fffaf5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-block bg-[#fff2d8] text-[#f6b746] px-5 py-2 rounded-full text-sm font-semibold">
            OUR VALUE
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1B2B] leading-tight max-w-2xl">
            Experience Unparalleled Service And Cutting-Edge Technology.
          </h2>

          <p className="mt-4 text-gray-600 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IMAGE CARD */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src="/value-image-1.jpg"
              alt="Smart Home Needs"
              width={500}
              height={350}
              className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-6 rounded-2xl">
              <h3 className="text-white text-lg font-semibold">
                Your Smart Home Needs.
              </h3>
              <p className="text-gray-200 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a className="text-[#f6b746] text-sm mt-2 inline-block hover:underline">
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* STATS CARD 1 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl p-8 bg-gradient-to-br from-[#6e9be9] to-[#66b3ff] text-white flex flex-col justify-between shadow-md"
          >
            <span className="text-sm uppercase tracking-wider">
              Smart Home Installations
            </span>
            <h3 className="text-4xl font-bold mt-6">1,275+</h3>
          </motion.div>

          {/* STATS CARD 2 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl p-8 bg-gradient-to-br from-[#4285f4] to-[#66b3ff] text-white flex flex-col justify-between shadow-md"
          >
            <span className="text-sm uppercase tracking-wider">
              Happy Homeowners
            </span>
            <h3 className="text-4xl font-bold mt-6">2,756+</h3>
          </motion.div>

          {/* SATISFACTION / RATE CARD */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl p-8 bg-[#0e172d] text-white flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center gap-3">
              {/* Example avatars — replace with your images */}
              <div className="flex -space-x-2">
                <Image src="/avatar1.jpg" width={32} height={32} className="rounded-full border-2 border-white" alt="user1"/>
                <Image src="/avatar2.jpg" width={32} height={32} className="rounded-full border-2 border-white" alt="user2"/>
                <Image src="/avatar3.jpg" width={32} height={32} className="rounded-full border-2 border-white" alt="user3"/>
              </div>
              <span className="text-sm">4.9 Satisfaction Rate</span>
            </div>
            <h3 className="text-5xl font-bold mt-6 text-[#f6b746]">98%</h3>
          </motion.div>

          {/* OPTIONAL: another card */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl shadow-lg group sm:col-span-2"
          >
            <Image
              src="/value-image-2.jpg"
              alt="Smart Home Living"
              width={800}
              height={400}
              className="object-cover w-full h-56 group-hover:scale-105 transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0e172d] hover:scale-110 transition-transform duration-300">
                ►
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}




// "use client";

// import { motion, useAnimation, useInView } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import { ShieldCheck, Lightbulb, Home } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.2 },
//   }),
// };

// const statsData = [
//   {
//     icon: <Home size={40} />,
//     value: 1275,
//     suffix: "+",
//     label: "Smart Home Installations",
//   },
//   {
//     icon: <ShieldCheck size={40} />,
//     value: 2756,
//     suffix: "+",
//     label: "Happy Homeowners",
//   },
//   {
//     icon: <Lightbulb size={40} />,
//     value: 98,
//     suffix: "%",
//     label: "Satisfaction Rate",
//   },
// ];

// export default function OurValueSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [inView, controls]);

//   return (
//     <section className="bg-[#fffaf5] py-24 px-6 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto" ref={ref}>
        
//         {/* HEADER */}
//         <motion.div variants={fadeUp} animate={controls} initial="hidden">
//           <span className="inline-block bg-[#fff2d8] text-[#f6b746] px-6 py-2 rounded-full text-sm font-semibold">
//             OUR VALUE
//           </span>
//           <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#0F1B2B] leading-tight max-w-3xl">
//             The Smartest Innovations For A Safer, More Connected Home.
//           </h2>
//           <p className="mt-5 text-gray-600 max-w-xl leading-relaxed">
//             Transform your living space with automation solutions designed for modern lifestyles.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {/* VIDEO IMAGE CARD */}
//           <motion.div
//             custom={0}
//             variants={fadeUp}
//             animate={controls}
//             initial="hidden"
//             className="relative rounded-3xl overflow-hidden shadow-xl group h-64 cursor-pointer"
//           >
//             <Image
//               src="/value-image-1.jpg"
//               alt="Smart Living"
//               width={600}
//               height={400}
//               className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
//             />
//             <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//               <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0e172d] text-xl font-bold group-hover:scale-110 transition">
//                 ►
//               </button>
//             </div>
//           </motion.div>

//           {/* STATS CARDS */}
//           {statsData.map((stat, i) => (
//             <motion.div
//               key={i}
//               custom={i + 1}
//               variants={fadeUp}
//               animate={controls}
//               initial="hidden"
//               className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition cursor-pointer"
//             >
//               <div className="text-[#f6b746] mx-auto mb-6">{stat.icon}</div>

//               {/* Counter Animation */}
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={inView ? { opacity: 1 } : {}}
//                 transition={{ duration: 2 }}
//                 className="text-5xl font-extrabold text-[#0F1B2B]"
//               >
//                 {stat.value.toLocaleString()}
//                 <span>{stat.suffix}</span>
//               </motion.p>

//               <p className="text-gray-600 font-medium mt-3 text-sm">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
