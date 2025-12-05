// // "use client";

// // import { useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";

// // const projects = [
// //   {
// //     title: "Smart Apartment Launch",
// //     subtitle: "Home Automation & Security",
// //     image: "/Smart Apartment.png",
// //     href: "/projects/smart-apartment",
// //   },
// //   {
// //     title: "Eco-Smart Villa Setup",
// //     subtitle: "Energy Efficient IoT Home",
// //     image: "/ECO villa.png",
// //     href: "/projects/eco-villa",
// //   },
// //   {
// //     title: "Office Automation Hub",
// //     subtitle: "Enterprise Smart Controls",
// //     image: "/Office Auto.png",
// //     href: "/projects/office-hub",
// //   },
// // ];

// // export default function FeaturedProjects() {
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // Each card has different scroll transform for PROPER STACKING
// //   const yTransforms = [
// //     useTransform(scrollYProgress, [0, 0.33, 1], [0, 0, 0]),      // Card 1 never moves
// //     useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [300, 0, 0, 0]), // Card 2 slides fully over Card 1
// //     useTransform(scrollYProgress, [0, 0.66, 1], [600, 300, 0])   // Card 3 slides fully over Card 2
// //   ];

// //   const scaleTransforms = [
// //     useTransform(scrollYProgress, [0, 1], [1, 1]),    // Card 1 stays same
// //     useTransform(scrollYProgress, [0, 1], [1, 1]),    // Card 2 stays same
// //     useTransform(scrollYProgress, [0, 1], [1, 1])     // Card 3 stays same
// //   ];

// //   return (
   
// //     <section className="py-32 bg-[#f3f6fa]">
// //   <div className="max-w-6xl mx-auto px-6">
// //     <div className="text-center mb-14">
// //           <div className="inline-block px-4 py-1 rounded-full bg-[#fff3e0] text-[#be7b2b] text-xs font-semibold">
// //             FEATURED PROJECTS
// //           </div>

// //           <h2 className="text-4xl md:text-5xl font-extrabold text-[#071327] mt-6 leading-tight">
// //             Take A Look At Some Of Our <br />
// //             Recent Smart Home Projects.
// //           </h2>

// //           <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
// //             Smart home automation projects designed with innovation, security, 
// //             and modern living in mind. Explore how we transform everyday spaces 
// //             into intelligent environments.
// //           </p>
// //         </div>

// //     {/* Scroll Container */}
// //     <div
// //       ref={containerRef}
// //       className="relative"
// //       style={{ height: "250vh" }}
// //     >
// //       {projects.map((proj, i) => (
// //         <motion.div
// //           key={i}
// //           style={{
// //             y: yTransforms[i],
// //             scale: scaleTransforms[i],
// //             zIndex: 10 + i,
// //           }}
// //           className="
// //             sticky top-[15vh] 
// //             mx-auto w-full max-w-5xl 
// //             bg-white rounded-3xl overflow-hidden shadow-2xl flex
// //           "
// //         >
// //           {/* LEFT IMAGE */}
// //           <div className="relative w-1/2 h-[360px] md:h-[420px]">
// //             <Image
// //               src={proj.image}
// //               alt={proj.title}
// //               fill
// //               className="object-cover"
// //             />
// //           </div>

// //           {/* RIGHT CONTENT PANEL */}
// //           <div className="w-1/2 bg-gradient-to-br from-[#091a33] via-[#0c2547] to-[#071b36] text-white p-10 flex flex-col">

// //             {/* RESIDENTIAL Badge */}
// //             <span className="px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-[#9dbdfd] w-fit">
// //               RESIDENTIAL
// //             </span>

// //             {/* Title */}
// //             <h3 className="mt-6 text-2xl font-bold">{proj.title}</h3>

// //             {/* Subtitle */}
// //             <p className="mt-3 text-white/70 text-sm leading-relaxed">
// //               {proj.subtitle}
// //             </p>

// //             {/* Features */}
// //             <div className="mt-6 grid grid-cols-2 gap-3 text-white/80 text-sm">
// //               <div className="flex items-center gap-2">
// //                 <span className="text-xl">🏠</span> Smart Living
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <span className="text-xl">🔒</span> Smart Security
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <span className="text-xl">⚡</span> IoT Automation
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <span className="text-xl">🌡️</span> Climate Control
// //               </div>
// //             </div>

// //             {/* Brand Icons */}
// //             <div className="flex items-center gap-4 mt-6">
// //               <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
// //                 <Image src="/101.png" alt="brand1" width={26} height={26} />
// //               </div>
// //               <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
// //                 <Image src="/102.png" alt="brand2" width={26} height={26} />
// //               </div>
// //               <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
// //                 <Image src="/103.png" alt="brand3" width={26} height={26} />
// //               </div>
// //             </div>

// //             {/* Buttons */}
// //             <div className="mt-7 flex gap-4">
// //               <Link
// //                 href={proj.href}
// //                 className="px-6 py-3 rounded-full font-semibold 
// //                            text-[#071327] bg-[#FFC65C] shadow-lg 
// //                            hover:brightness-95 transition"
// //               >
// //                 See Details →
// //               </Link>

// //               <button className="px-5 py-3 text-sm rounded-full font-medium 
// //                                  border border-[#3592ea] text-[#3592ea] 
// //                                  hover:bg-[#3592ea]/10 transition">
// //                 View Case Study
// //               </button>
// //             </div>

// //           </div>
// //         </motion.div>
// //       ))}
// //     </div>
// //   </div>
// // </section>

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
//     image: "/Smart Apartment.png",
//     href: "/projects/smart-apartment",
//     color: "from-[#07122b] via-[#0d2b53] to-[#071a36]", // Blue
//   },
//   {
//     title: "Eco-Smart Villa Setup",
//     subtitle: "Energy Efficient IoT Home",
//     image: "/ECO villa.png",
//     href: "/projects/eco-villa",
//     color: "from-[#3b1053] via-[#5b1f75] to-[#8426a8]", // Purple
//   },
//   {
//     title: "Office Automation Hub",
//     subtitle: "Enterprise Smart Controls",
//     image: "/Office Auto.png",
//     href: "/projects/office-hub",
//     color: "from-[#7a3b00] via-[#b85b00] to-[#f2a22c]", // Orange
//   },
// ];

// export default function FeaturedProjects() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // PERFECT OVERLAP — DO NOT CHANGE
//   const yTransforms = [
//     useTransform(scrollYProgress, [0, 0.33, 1], [0, 0, 0]),
//     useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [300, 0, 0, 0]),
//     useTransform(scrollYProgress, [0, 0.66, 1], [600, 300, 0]),
//   ];

//   const scaleTransforms = [
//     useTransform(scrollYProgress, [0, 1], [1, 1]),
//     useTransform(scrollYProgress, [0, 1], [1, 1]),
//     useTransform(scrollYProgress, [0, 1], [1, 1]),
//   ];

//   return (
//     <section className="py-32 bg-[#f3f6fa]">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <div className="inline-block px-4 py-1 rounded-full bg-[#fff3e0] text-[#be7b2b] text-xs font-semibold">
//             FEATURED PROJECTS
//           </div>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#071327] mt-6 leading-tight">
//             Take A Look At Some Of Our <br /> Recent Smart Home Projects.
//           </h2>

//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
//             Smart home automation projects designed with innovation, security, 
//             and modern living in mind—transforming everyday spaces into 
//             intelligent environments.
//           </p>
//         </div>

//         {/* SCROLL CONTAINER */}
//         <div ref={containerRef} className="relative" style={{ height: "250vh" }}>
//           {projects.map((proj, i) => (
//             <motion.div
//               key={i}
//               style={{
//                 y: yTransforms[i],
//                 scale: scaleTransforms[i],
//                 zIndex: 10 + i,
//               }}
//               className="
//                 sticky top-[15vh]
//                 mx-auto w-full max-w-5xl 
//                 bg-white rounded-3xl overflow-hidden shadow-2xl 
//                 flex
//               "
//             >
//               {/* LEFT IMAGE - FIXED FULL HEIGHT ISSUE */}
//               <div className="relative w-1/2 h-full min-h-[420px]">
//                 <Image
//                   src={proj.image}
//                   alt={proj.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* RIGHT CONTENT WITH UNIQUE COLORS */}
//               <div
//                 className={`w-1/2 bg-gradient-to-br ${proj.color} text-white p-10 flex flex-col`}
//               >
//                 <span className="px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 w-fit">
//                   RESIDENTIAL
//                 </span>

//                 <h3 className="mt-6 text-2xl font-bold">{proj.title}</h3>

//                 <p className="mt-3 text-white/80 text-sm leading-relaxed">
//                   {proj.subtitle}
//                 </p>

//                 <div className="mt-6 grid grid-cols-2 gap-3 text-white/90 text-sm">
//                   <div className="flex items-center gap-2"><span>🏠</span> Smart Living</div>
//                   <div className="flex items-center gap-2"><span>🔒</span> Security</div>
//                   <div className="flex items-center gap-2"><span>⚡</span> Automation</div>
//                   <div className="flex items-center gap-2"><span>🌡️</span> Climate Control</div>
//                 </div>

//                 <div className="flex items-center gap-4 mt-6">
//                   <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
//                     <Image src="/101.png" alt="brand1" width={26} height={26} />
//                   </div>
//                   <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
//                     <Image src="/102.png" alt="brand2" width={26} height={26} />
//                   </div>
//                   <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
//                     <Image src="/103.png" alt="brand3" width={26} height={26} />
//                   </div>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="mt-7 flex gap-4">
//                   <Link
//                     href={proj.href}
//                     className="px-6 py-3 rounded-full font-semibold text-[#071327] bg-[#FFC65C] shadow-lg hover:brightness-95 transition"
//                   >
//                     See Details →
//                   </Link>

//                   <button className="px-5 py-3 text-sm rounded-full font-medium border border-white/40 text-white hover:bg-white/10 transition">
//                     View Case Study
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const projects = [
//   {
//     title: "Smart Apartment Launch",
//     subtitle: "Home Automation & Security",
//     image: "/Smart Apartment.png",
//     href: "/projects/smart-apartment",
//     color: "#08101d", // DARK NAVY
//   },
//   {
//     title: "Eco-Smart Villa Setup",
//     subtitle: "Energy Efficient IoT Home",
//     image: "/ECO villa.png",
//     href: "/projects/eco-villa",
//     color: "#12203c", // DEEP BLUE
//   },
//   {
//     title: "Office Automation Hub",
//     subtitle: "Enterprise Smart Controls",
//     image: "/Office Auto.png",
//     href: "/projects/office-hub",
//     color: "#3364be", // BRIGHT BLUE
//   },
// ];

// export default function FeaturedProjects() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // PERFECT STACK BEHAVIOR
//   const yTransforms = [
//     useTransform(scrollYProgress, [0, 0.33, 1], [0, 0, 0]), 
//     useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [350, 0, 0, 0]), 
//     useTransform(scrollYProgress, [0, 0.66, 1], [700, 350, 0]), 
//   ];

//   const scaleTransforms = [
//     useTransform(scrollYProgress, [0, 1], [1, 1]),
//     useTransform(scrollYProgress, [0, 1], [1, 1]),
//     useTransform(scrollYProgress, [0, 1], [1, 1]),
//   ];

//   return (
//     <section className="py-32 bg-[#f3f6fa]">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <div className="inline-block px-4 py-1 rounded-full bg-[#fff3e0] text-[#be7b2b] text-xs font-semibold">
//             FEATURED PROJECTS
//           </div>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#071327] mt-6 leading-tight">
//             Take A Look At Some Of Our <br /> Recent Smart Home Projects.
//           </h2>

//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
//             Smart home automation projects designed with innovation, security,
//             and modern living in mind—transforming everyday spaces into 
//             intelligent environments.
//           </p>
//         </div>

//         {/* STACKING AREA */}
//         <div ref={containerRef} className="relative" style={{ height: "260vh" }}>
//           {projects.map((proj, i) => (
//             <motion.div
//               key={i}
//               style={{
//                 y: yTransforms[i],
//                 scale: scaleTransforms[i],
//                 zIndex: 20 + i,
//               }}
//               className="
//                 sticky top-[15vh]
//                 mx-auto w-full max-w-5xl 
//                 rounded-xl overflow-hidden shadow-xl 
//                 flex
//               "
//             >
//               {/* LEFT IMAGE (Full Height, No Gaps) */}
//               <div className="relative w-1/2 min-h-[500px]">
//                 <Image
//                   src={proj.image}
//                   alt={proj.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* RIGHT PANEL WITH NEW COLOR */}
//               <div
//                 className="w-1/2 text-white p-10 flex flex-col justify-between"
//                 style={{ backgroundColor: proj.color }}
//               >
//                 <div>
//                   <span className="px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 w-fit">
//                     RESIDENTIAL
//                   </span>

//                   <h3 className="mt-6 text-2xl font-bold">{proj.title}</h3>

//                   <p className="mt-3 text-white/80 text-sm leading-relaxed">
//                     {proj.subtitle}
//                   </p>

//                   <div className="mt-6 grid grid-cols-2 gap-3 text-white/90 text-sm">
//                     <div className="flex items-center gap-2"><span>🏠</span> Smart Living</div>
//                     <div className="flex items-center gap-2"><span>🔒</span> Security</div>
//                     <div className="flex items-center gap-2"><span>⚡</span> Automation</div>
//                     <div className="flex items-center gap-2"><span>🌡️</span> Climate Control</div>
//                   </div>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="mt-7 flex gap-4">
//                   <Link
//                     href={proj.href}
//                     className="px-6 py-3 rounded-full font-semibold 
//                                text-[#071327] bg-[#FFC65C] shadow-lg 
//                                hover:brightness-95 transition"
//                   >
//                     See Details →
//                   </Link>

//                   <button className="px-5 py-3 text-sm rounded-full font-medium 
//                                      border border-white/40 text-white 
//                                      hover:bg-white/10 transition">
//                     View Case Study
//                   </button>
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

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Smart Apartment Launch",
    subtitle: "Home Automation & Security",
    image: "/Smart Apartment.png",
    href: "/projects/smart-apartment",
    color: "#08101d", // Card 1 color
  },
  {
    title: "Eco-Smart Villa Setup",
    subtitle: "Energy Efficient IoT Home",
    image: "/ECO villa.png",
    href: "/projects/eco-villa",
    color: "#12203c", // Card 2 color
  },
  {
    title: "Office Automation Hub",
    subtitle: "Enterprise Smart Controls",
    image: "/Office Auto.png",
    href: "/projects/office-hub",
    color: "#3364be", // Card 3 color
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // PROPER STACKING LOGIC
  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.33, 1], [0, 0, 0]), // Card 1 stays fixed
    useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [350, 0, 0, 0]), // Card 2 slides fully over 1
    useTransform(scrollYProgress, [0, 0.66, 1], [700, 350, 0]), // Card 3 slides fully over 2
  ];

  return (
    <section className="py-32 bg-[#f3f6fa]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full bg-[#fff3e0] text-[#be7b2b] text-xs font-semibold">
            FEATURED PROJECTS
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#071327] mt-6 leading-tight">
            Take A Look At Some Of Our <br />
            Recent Smart Home Projects.
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Smart home automation projects designed with innovation, security, and 
            modern living in mind. Explore how we transform everyday spaces into 
            intelligent environments.
          </p>
        </div>

        {/* STACKING SCROLL CONTAINER */}
        <div
          ref={containerRef}
          className="relative"
          style={{ height: "260vh" }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              style={{
                y: yTransforms[i],
                zIndex: 10 + i,
              }}
              className="
                sticky top-[14vh]
                mx-auto w-full max-w-5xl
                rounded-xl overflow-hidden shadow-2xl flex
              "
            >
              {/* LEFT IMAGE */}
              <div className="relative w-1/2 h-[480px]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT PANEL */}
              <div
                className="w-1/2 text-white p-10 flex flex-col justify-between"
                style={{ backgroundColor: proj.color }}
              >
                <div>
                  {/* Badge */}
                  <span className="px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 w-fit">
                    RESIDENTIAL
                  </span>

                  {/* Title */}
                  <h3 className="mt-6 text-3xl font-bold">{proj.title}</h3>

                  {/* Subtitle */}
                  <p className="mt-3 text-white/80 text-sm leading-relaxed">
                    {proj.subtitle}
                  </p>

                  {/* Features */}
                  <div className="mt-6 grid grid-cols-2 gap-3 text-white/90 text-sm">
                    <div className="flex items-center gap-2"><span>🏠</span> Smart Living</div>
                    <div className="flex items-center gap-2"><span>🔒</span> Smart Security</div>
                    <div className="flex items-center gap-2"><span>⚡</span> IoT Automation</div>
                    <div className="flex items-center gap-2"><span>🌡️</span> Climate Control</div>
                  </div>

                  {/* BRAND ICONS (RESTORED) */}
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center">
                      <Image src="/101.png" alt="brand1" width={26} height={26} />
                    </div>
                    <div className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center">
                      <Image src="/102.png" alt="brand2" width={26} height={26} />
                    </div>
                    <div className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center">
                      <Image src="/103.png" alt="brand3" width={26} height={26} />
                    </div>
                  </div>
                </div>

                {/* CTA BUTTONS */}
                <div className="mt-8 flex gap-4">
                  <Link
                    href={proj.href}
                    className="px-6 py-3 rounded-full font-semibold 
                               text-[#071327] bg-[#FFC65C] shadow-lg 
                               hover:brightness-95 transition"
                  >
                    See Details →
                  </Link>

                  <button className="px-5 py-3 text-sm rounded-full font-medium 
                                     border border-white/40 text-white 
                                     hover:bg-white/10 transition">
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
