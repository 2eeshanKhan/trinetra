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
//     color: "#08101d", // Card 1 color
//   },
//   {
//     title: "Eco-Smart Villa Setup",
//     subtitle: "Energy Efficient IoT Home",
//     image: "/ECO villa.png",
//     href: "/projects/eco-villa",
//     color: "#12203c", // Card 2 color
//   },
//   {
//     title: "Office Automation Hub",
//     subtitle: "Enterprise Smart Controls",
//     image: "/Office Auto.png",
//     href: "/projects/office-hub",
//     color: "#3364be", // Card 3 color
//   },
// ];

// export default function FeaturedProjects() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // PROPER STACKING LOGIC
//   const yTransforms = [
//     useTransform(scrollYProgress, [0, 0.33, 1], [0, 0, 0]), // Card 1 stays fixed
//     useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [350, 0, 0, 0]), // Card 2 slides fully over 1
//     useTransform(scrollYProgress, [0, 0.66, 1], [700, 350, 0]), // Card 3 slides fully over 2
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
//             Take A Look At Some Of Our <br />
//             Recent Smart Home Projects.
//           </h2>

//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
//             Smart home automation projects designed with innovation, security, and 
//             modern living in mind. Explore how we transform everyday spaces into 
//             intelligent environments.
//           </p>
//         </div>

//         {/* STACKING SCROLL CONTAINER */}
//         <div
//           ref={containerRef}
//           className="relative"
//           style={{ height: "260vh" }}
//         >
//           {projects.map((proj, i) => (
//             <motion.div
//               key={i}
//               style={{
//                 y: yTransforms[i],
//                 zIndex: 10 + i,
//               }}
//               className="
//                 sticky top-[14vh]
//                 mx-auto w-full max-w-5xl
//                 rounded-xl overflow-hidden shadow-2xl flex
//               "
//             >
//               {/* LEFT IMAGE */}
//               <div className="relative w-1/2 h-[480px]">
//                 <Image
//                   src={proj.image}
//                   alt={proj.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* RIGHT PANEL */}
//               <div
//                 className="w-1/2 text-white p-10 flex flex-col justify-between"
//                 style={{ backgroundColor: proj.color }}
//               >
//                 <div>
//                   {/* Badge */}
//                   <span className="px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 w-fit">
//                     RESIDENTIAL
//                   </span>

//                   {/* Title */}
//                   <h3 className="mt-6 text-3xl font-bold">{proj.title}</h3>

//                   {/* Subtitle */}
//                   <p className="mt-3 text-white/80 text-sm leading-relaxed">
//                     {proj.subtitle}
//                   </p>

//                   {/* Features */}
//                   <div className="mt-6 grid grid-cols-2 gap-3 text-white/90 text-sm">
//                     <div className="flex items-center gap-2"><span>🏠</span> Smart Living</div>
//                     <div className="flex items-center gap-2"><span>🔒</span> Smart Security</div>
//                     <div className="flex items-center gap-2"><span>⚡</span> IoT Automation</div>
//                     <div className="flex items-center gap-2"><span>🌡️</span> Climate Control</div>
//                   </div>

//                   {/* BRAND ICONS (RESTORED) */}
//                   <div className="flex items-center gap-4 mt-6">
//                     <div className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center">
//                       <Image src="/101.png" alt="brand1" width={26} height={26} />
//                     </div>
//                     <div className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center">
//                       <Image src="/102.png" alt="brand2" width={26} height={26} />
//                     </div>
//                     <div className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center">
//                       <Image src="/103.png" alt="brand3" width={26} height={26} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* CTA BUTTONS */}
//                 <div className="mt-8 flex gap-4">
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
    color: "#08101d",
  },
  {
    title: "Eco-Smart Villa Setup",
    subtitle: "Energy Efficient IoT Home",
    image: "/ECO villa.png",
    href: "/projects/eco-villa",
    color: "#12203c",
  },
  {
    title: "Office Automation Hub",
    subtitle: "Enterprise Smart Controls",
    image: "/Office Auto.png",
    href: "/projects/office-hub",
    color: "#3364be",
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- DeskTop stacking logic ---
  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.33, 1], [0, 0, 0]),
    useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [350, 0, 0, 0]),
    useTransform(scrollYProgress, [0, 0.66, 1], [700, 350, 0]),
  ];

  return (
    <section className="py-24 bg-[#f3f6fa]">
      <div className="max-w-6xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full bg-[#fff3e0] text-[#be7b2b] text-xs font-semibold">
            FEATURED PROJECTS
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071327] mt-6 leading-tight">
            Take A Look At Some Of Our <br className="hidden md:block" />
            Recent Smart Home Projects.
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            Smart home automation projects designed with innovation, security, 
            and modern living in mind.
          </p>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={containerRef}
          className="relative"
          style={{
            height: "240vh", // responsive but enough for desktop stacking
          }}
        >

          {projects.map((proj, i) => (
            <motion.div
              key={i}
              style={{
                y: yTransforms[i],
                zIndex: 20 + i,
              }}
              className="
                sticky top-[12vh]
                mx-auto w-full max-w-5xl 
                rounded-xl overflow-hidden shadow-2xl

                /* Responsive layout */
                flex flex-col md:flex-row
              "
            >
              {/* LEFT IMAGE - Responsive */}
              <div className="relative w-full md:w-1/2 h-[260px] md:h-[480px]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT CONTENT PANEL */}
              <div
                className="w-full md:w-1/2 text-white p-7 md:p-10 flex flex-col justify-between"
                style={{ backgroundColor: proj.color }}
              >
                <div>
                  <span className="px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 w-fit">
                    RESIDENTIAL
                  </span>

                  <h3 className="mt-4 md:mt-6 text-xl md:text-3xl font-bold">
                    {proj.title}
                  </h3>

                  <p className="mt-2 md:mt-3 text-white/80 text-sm md:text-base leading-relaxed">
                    {proj.subtitle}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-5 md:mt-6 grid grid-cols-2 gap-3 text-white/90 text-sm">
                    <div className="flex items-center gap-2"><span>🏠</span> Living</div>
                    <div className="flex items-center gap-2"><span>🔒</span> Security</div>
                    <div className="flex items-center gap-2"><span>⚡</span> Automation</div>
                    <div className="flex items-center gap-2"><span>🌡️</span> Climate</div>
                  </div>

                  {/* BRANDS */}
                  <div className="flex items-center gap-4 mt-6">
                    {[101, 102, 103].map((brand) => (
                      <div
                        key={brand}
                        className="w-10 h-10 bg-white/15 rounded-md flex items-center justify-center"
                      >
                        <Image src={`/${brand}.png`} alt="brand" width={26} height={26} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="mt-7 flex gap-3 md:gap-4">
                  <Link
                    href={proj.href}
                    className="px-5 md:px-6 py-3 rounded-full font-semibold 
                               text-[#071327] bg-[#FFC65C] shadow-lg 
                               text-sm md:text-base hover:brightness-95 transition"
                  >
                    See Details →
                  </Link>

                  <button className="px-5 py-3 text-sm md:text-base rounded-full font-medium 
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
