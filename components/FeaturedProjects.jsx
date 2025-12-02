// // "use client";

// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";

// // const projects = [
// //   {
// //     title: "Smart Apartment Launch",
// //     subtitle: "Home Automation & Security",
// //     image: "/project1.jpg",
// //     href: "/projects/smart-apartment",
// //   },
// //   {
// //     title: "Eco-Smart Villa Setup",
// //     subtitle: "Energy Efficient IoT Home",
// //     image: "/project2.jpg",
// //     href: "/projects/eco-villa",
// //   },
// //   {
// //     title: "Office Automation Hub",
// //     subtitle: "Enterprise Smart Controls",
// //     image: "/project3.jpg",
// //     href: "/projects/office-hub",
// //   },
// // ];

// // export default function FeaturedProjects() {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // TOP-LEVEL transforms (RULES FOLLOWED 👍)
// //   const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
// //   const scale2 = useTransform(scrollYProgress, [0, 1], [1.08, 0.92]);
// //   const scale3 = useTransform(scrollYProgress, [0, 1], [1.15, 0.98]);

// //   const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
// //   const y2 = useTransform(scrollYProgress, [0, 1], [40, -80]);
// //   const y3 = useTransform(scrollYProgress, [0, 1], [80, -40]);

// //   const opacity1 = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
// //   const opacity2 = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
// //   const opacity3 = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

// //   const scales = [scale1, scale2, scale3];
// //   const offsets = [y1, y2, y3];
// //   const opacities = [opacity1, opacity2, opacity3];

// //   return (
// //     <section className="py-32 bg-[#f3f6fa]">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <h2 className="text-4xl font-bold text-center text-[#0F1B2B] mb-16">
// //           Featured Projects
// //         </h2>

// //         <div ref={containerRef} className="relative h-[200vh]">
// //           {projects.map((proj, i) => (
          

// //             <motion.div
// //   key={i}
// //   style={{
// //     scale: scales[i],
// //     y: offsets[i],
// //     opacity: opacities[i],
// //     zIndex: 10 - i,
// //   }}
// //   className="sticky top-[10vh] w-full max-w-6xl mx-auto 
// //   bg-gradient-to-b from-[#0c111c] to-[#0a0e19]
// //   rounded-[36px] overflow-hidden shadow-[0px_0px_50px_rgba(0,0,0,0.45)]
// //   border border-[#1d2330]"
// // >
// //   <div className="grid grid-cols-1 lg:grid-cols-2">
    
// //     {/* LEFT: IMAGE */}
// //     <div className="relative h-[350px] md:h-[430px]">
// //       <Image
// //         src={proj.image}
// //         alt={proj.title}
// //         fill
// //         className="object-cover"
// //       />
// //     </div>

// //     {/* RIGHT: DETAILS */}
// //     <div className="p-10 flex flex-col justify-center">
      
// //       {/* CATEGORY */}
// //       <span className="px-6 py-2 text-sm font-semibold rounded-full
// //       bg-[#1e2430] text-[#d2a34a] inline-block w-fit">
// //         RESIDENTIAL
// //       </span>

// //       {/* TITLE + TEXT */}
// //       <h3 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
// //         {proj.title}
// //       </h3>

// //       <p className="mt-4 text-sm md:text-[16px] text-white/70 leading-relaxed">
// //         Transforming modern Indian homes with seamless smart automation and
// //         intuitive energy control. Designed for comfort, built for security.
// //       </p>

// //       {/* ICON LIST */}
// //       <div className="flex gap-6 mt-6 text-[#d2a34a] text-sm md:text-base">
// //         <div className="flex items-center gap-2">
// //           <span className="text-lg">🏠</span> Energy Control
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <span className="text-lg">🔐</span> Smart Security
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <span className="text-lg">🎛</span> Automation Hub
// //         </div>
// //       </div>

// //       {/* DIVIDER */}
// //       <div className="w-full h-[1px] bg-white/10 my-6"></div>

// //       {/* BRAND ICON */}
// //       <p className="text-[15px] font-semibold text-white mb-3">
// //         Main Brand Used :
// //       </p>

// //       <div className="flex items-center gap-6 opacity-80 mb-8">
// //         <Image src="/philips.png" width={45} height={45} alt="brand1" />
// //         <Image src="/tuya.png" width={45} height={45} alt="brand2" />
// //         <Image src="/sonoff.png" width={45} height={45} alt="brand3" />
// //       </div>

// //       {/* CTA BUTTON */}
// //       <Link href={proj.href}>
// //         <button
// //           className="px-8 py-3 rounded-full font-semibold text-[#0c111c]
// //           bg-gradient-to-r from-[#f6c054] to-[#8fb1ff]
// //           hover:shadow-[0_0_25px_#8fb1ff90] transition-all
// //           text-sm md:text-base"
// //         >
// //           See Details →
// //         </button>
// //       </Link>

// //     </div>
// //   </div>
// // </motion.div>

// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const projects = [
//   {
//     title: "Smart Apartment Launch",
//     subtitle: "Home Automation & Security",
//     image: "/project1.jpg",
//     href: "/projects/smart-apartment",
//   },
//   {
//     title: "Eco-Smart Villa Setup",
//     subtitle: "Energy Efficient IoT Home",
//     image: "/project2.jpg",
//     href: "/projects/eco-villa",
//   },
//   {
//     title: "Office Automation Hub",
//     subtitle: "Enterprise Smart Controls",
//     image: "/project3.jpg",
//     href: "/projects/office-hub",
//   },
// ];

// export default function FeaturedProjects() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /** REAL TEMPLATE-LIKE ANIMATION */
//   const scales = [
//     useTransform(scrollYProgress, [0, 1], [1, 0.92]),
//     useTransform(scrollYProgress, [0, 1], [1.04, 0.96]),
//     useTransform(scrollYProgress, [0, 1], [1.08, 1]),
//   ];

//   const offsets = [
//     useTransform(scrollYProgress, [0, 1], [0, -90]),
//     useTransform(scrollYProgress, [0, 1], [50, -40]),
//     useTransform(scrollYProgress, [0, 1], [100, 0]),
//   ];

//   const opacities = [
//     useTransform(scrollYProgress, [0.6, 1], [1, 0]),
//     useTransform(scrollYProgress, [0.7, 1], [1, 0]),
//     useTransform(scrollYProgress, [0.8, 1], [1, 0]),
//   ];

//   return (
//     <section className="py-32 bg-[#f3f6fa]">
//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-4xl font-bold text-center text-[#0F1B2B] mb-20">
//           Featured Projects
//         </h2>

//         {/* FULL SCROLL CONTAINER */}
//         <div ref={containerRef} className="relative h-[210vh]">

//           {projects.map((proj, i) => (
//             <motion.div
//               key={i}
//               style={{
//                 scale: scales[i],
//                 y: offsets[i],
//                 opacity: opacities[i],
//                 zIndex: 100 - i,
//               }}
//               className="sticky top-[14vh] w-full mx-auto max-w-6xl
//               rounded-[32px] overflow-hidden shadow-xl
//               bg-white border border-[#e3e6ef]
//               transition-all"
//             >
//               <div className="grid grid-cols-1 lg:grid-cols-2">

//                 {/* IMAGE */}
//                 <div className="relative h-[350px] md:h-[440px]">
//                   <Image
//                     src={proj.image}
//                     alt={proj.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* DETAILS */}
//                 <div className="p-10 flex flex-col justify-center">

//                   <span className="px-5 py-1.5 bg-[#eaf1ff] text-[#2267ff]
//                     font-semibold text-sm rounded-full w-fit">
//                     RESIDENTIAL
//                   </span>

//                   <h3 className="mt-6 text-3xl md:text-4xl font-bold text-[#0F1B2B]">
//                     {proj.title}
//                   </h3>

//                   <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
//                     Transforming modern homes with smart automation,
//                     energy monitoring and powerful security integrations.
//                   </p>

//                   <div className="flex flex-wrap gap-5 mt-6 text-gray-700 text-sm">
//                     <span className="flex items-center gap-2">🏠 Energy Control</span>
//                     <span className="flex items-center gap-2">🔐 Smart Security</span>
//                     <span className="flex items-center gap-2">🎛 Automation Hub</span>
//                   </div>

//                   <div className="w-full h-[1px] bg-gray-200 my-6"></div>

//                   <p className="font-semibold text-gray-700">Main Brand Used :</p>

//                   <div className="flex items-center gap-6 mt-3 opacity-80 mb-8">
//                     <Image src="/philips.png" width={45} height={45} alt="brand1" />
//                     <Image src="/tuya.png" width={45} height={45} alt="brand2" />
//                     <Image src="/sonoff.png" width={45} height={45} alt="brand3" />
//                   </div>

//                   <Link href={proj.href}>
//                     <button className="px-8 py-3 rounded-full font-semibold 
//                       bg-[#2267ff] text-white hover:bg-[#0049d4] transition-all">
//                       See Details →
//                     </button>
//                   </Link>

//                 </div>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Smart Apartment Launch",
    subtitle: "Home Automation & Security",
    image: "/Smart Apartment.png",
    href: "/projects/smart-apartment",
  },
  {
    title: "Eco-Smart Villa Setup",
    subtitle: "Energy Efficient IoT Home",
    image: "/ECO villa.png",
    href: "/projects/eco-villa",
  },
  {
    title: "Office Automation Hub",
    subtitle: "Enterprise Smart Controls",
    image: "/Office Auto.png",
    href: "/projects/office-hub",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-[#f3f6fa]">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center text-[#0F1B2B] mb-20">
          Featured Projects
        </h2>

        <div className="space-y-20">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl 
              rounded-3xl overflow-hidden border border-gray-200"
            >
              
              {/* IMAGE */}
              <div className="relative h-[350px] md:h-[430px]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-10 flex flex-col justify-center">

                <span className="px-5 py-1.5 bg-[#eaf1ff] text-[#2267ff]
                  font-semibold text-sm rounded-full w-fit">
                  RESIDENTIAL
                </span>

                <h3 className="mt-6 text-3xl md:text-4xl font-bold text-[#0F1B2B]">
                  {proj.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                  Transforming modern homes with smart automation, security,
                  and energy monitoring solutions.
                </p>

                <div className="flex flex-wrap gap-5 mt-6 text-gray-700 text-sm">
                  <span className="flex items-center gap-2">🏠 Energy Control</span>
                  <span className="flex items-center gap-2">🔐 Smart Security</span>
                  <span className="flex items-center gap-2">🎛 Automation Hub</span>
                </div>

                <div className="w-full h-[1px] bg-gray-200 my-6"></div>

                <p className="font-semibold text-gray-700">Main Brand Used :</p>

                <div className="flex items-center gap-6 mt-3 opacity-80 mb-8">
                  <Image src="/philips.png" width={45} height={45} alt="brand1" />
                  <Image src="/tuya.png" width={45} height={45} alt="brand2" />
                  <Image src="/sonoff.png" width={45} height={45} alt="brand3" />
                </div>

                <Link href={proj.href}>
                  <button className="px-8 py-3 rounded-full font-semibold 
                    bg-[#2267ff] text-white hover:bg-[#0049d4] transition-all">
                    See Details →
                  </button>
                </Link>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

