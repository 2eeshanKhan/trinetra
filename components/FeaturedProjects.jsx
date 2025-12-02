// // "use client";

// // import { motion } from "framer-motion";
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
// //   return (
// //     <section className="py-32 bg-[#f3f6fa]">
// //       <div className="max-w-6xl mx-auto px-6">
        
// //         <h2 className="text-4xl font-bold text-center text-[#0F1B2B] mb-20">
// //           Featured Projects
// //         </h2>

// //         <div className="space-y-20">
// //           {projects.map((proj, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 60, scale: 0.95 }}
// //               whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //               transition={{ duration: 0.6, ease: "easeOut" }}
// //               viewport={{ once: true }}
// //               className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl 
// //               rounded-3xl overflow-hidden border border-gray-200"
// //             >
              
// //               {/* IMAGE */}
// //               <div className="relative h-[350px] md:h-[430px]">
// //                 <Image
// //                   src={proj.image}
// //                   alt={proj.title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>

// //               {/* CONTENT */}
// //               <div className="p-10 flex flex-col justify-center">

// //                 <span className="px-5 py-1.5 bg-[#eaf1ff] text-[#2267ff]
// //                   font-semibold text-sm rounded-full w-fit">
// //                   RESIDENTIAL
// //                 </span>

// //                 <h3 className="mt-6 text-3xl md:text-4xl font-bold text-[#0F1B2B]">
// //                   {proj.title}
// //                 </h3>

// //                 <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
// //                   Transforming modern homes with smart automation, security,
// //                   and energy monitoring solutions.
// //                 </p>

// //                 <div className="flex flex-wrap gap-5 mt-6 text-gray-700 text-sm">
// //                   <span className="flex items-center gap-2">🏠 Energy Control</span>
// //                   <span className="flex items-center gap-2">🔐 Smart Security</span>
// //                   <span className="flex items-center gap-2">🎛 Automation Hub</span>
// //                 </div>

// //                 <div className="w-full h-[1px] bg-gray-200 my-6"></div>

// //                 <p className="font-semibold text-gray-700">Main Brand Used :</p>

// //                 <div className="flex items-center gap-6 mt-3 opacity-80 mb-8">
// //                   <Image src="/philips.png" width={45} height={45} alt="brand1" />
// //                   <Image src="/tuya.png" width={45} height={45} alt="brand2" />
// //                   <Image src="/sonoff.png" width={45} height={45} alt="brand3" />
// //                 </div>

// //                 <Link href={proj.href}>
// //                   <button className="px-8 py-3 rounded-full font-semibold 
// //                     bg-[#2267ff] text-white hover:bg-[#0049d4] transition-all">
// //                     See Details →
// //                   </button>
// //                 </Link>

// //               </div>

// //             </motion.div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const projects = [
//   {
//     title: "Smart Apartment Launch",
//     subtitle: "Home Automation & Security",
//     image: "/Smart Apartment.png",
//     href: "/projects/smart-apartment",
//   },
//   {
//     title: "Eco-Smart Villa Setup",
//     subtitle: "Energy Efficient IoT Home",
//     image: "/ECO villa.png",
//     href: "/projects/eco-villa",
//   },
//   {
//     title: "Office Automation Hub",
//     subtitle: "Enterprise Smart Controls",
//     image: "/Office Auto.png",
//     href: "/projects/office-hub",
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="py-32 bg-[#f3f6fa]">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0F1B2B] mb-20">
//           Featured Projects
//         </h2>

//         {/* Project Cards */}
//         <div className="space-y-20">
//           {projects.map((proj, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40, scale: 0.96 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl 
//               rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl 
//               transition-all duration-300"
//             >

//               {/* LEFT IMAGE */}
//               <div className="relative h-[300px] sm:h-[380px] md:h-[430px]">
//                 <Image
//                   src={proj.image}
//                   alt={proj.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="p-10 flex flex-col justify-center">

//                 {/* Tag */}
//                 <span className="px-5 py-1.5 bg-[#eaf1ff] text-[#2267ff]
//                   font-semibold text-sm rounded-full w-fit shadow-sm">
//                   RESIDENTIAL
//                 </span>

//                 {/* Title */}
//                 <h3 className="mt-6 text-3xl md:text-4xl font-bold text-[#0F1B2B] leading-snug">
//                   {proj.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-4 text-gray-600 leading-relaxed text-[15px] max-w-md">
//                   {proj.subtitle}. Experience seamless smart home automation,
//                   energy monitoring and high-grade security solutions.
//                 </p>

//                 {/* Highlights */}
//                 <div className="flex flex-wrap gap-5 mt-6 text-gray-700 text-sm">
//                   <span className="flex items-center gap-2">🏠 Energy Control</span>
//                   <span className="flex items-center gap-2">🔐 Smart Security</span>
//                   <span className="flex items-center gap-2">🎛 Automation Hub</span>
//                 </div>

//                 <div className="w-full h-[1px] bg-gray-200 my-6"></div>

//                 {/* Brands */}
//                 <p className="font-semibold text-gray-700">Main Brand Used :</p>

//                 <div className="flex items-center gap-6 mt-3 opacity-80 mb-8">
//                   <Image src="/philips.png" width={45} height={45} alt="Philips" />
//                   <Image src="/tuya.png" width={45} height={45} alt="Tuya" />
//                   <Image src="/sonoff.png" width={45} height={45} alt="Sonoff" />
//                 </div>

//                 {/* BUTTON */}
//                 <Link href={proj.href}>
//                   <button
//                     className="px-8 py-3 rounded-full font-semibold 
//                     bg-[#2267ff] text-white hover:bg-[#0049d4] 
//                     shadow-md hover:shadow-lg transition-all duration-300"
//                   >
//                     See Details →
//                   </button>
//                 </Link>

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
    <section className="py-14 bg-gradient-to-b from-white to-[#f3f6fa]">
      <div className="max-w-6xl mx-auto px-6">
        {/* <h2 className="text-4xl md:text-5xl font-extrabold text-[#071327] text-center mb-14">
          Featured Projects
        </h2> */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-[#0F1B2B] tracking-tight">
  Featured <span className="text-[#3592ea]">Projects</span>
</h2>


        <div className="space-y-12">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl shadow-2xl"
            >
              {/* left image */}
              <div className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[460px]">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
                {/* subtle dark overlay so right-side text stands out when stacked on small screens */}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* right content — dark card look matching Smarto (blue + dark) */}
              <div
                className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-tr from-[#07122b] via-[#0d2b53] to-[#071a36] text-white"
                style={{ borderTopRightRadius: 24, borderBottomRightRadius: 24 }}
              >
                <span
                  className="inline-block px-4 py-1 text-sm font-semibold rounded-full"
                  style={{
                    backgroundColor: "rgba(53,146,234,0.08)",
                    color: "#3592ea",
                  }}
                >
                  RESIDENTIAL
                </span>

                <h3 className="mt-5 text-2xl md:text-3xl font-bold leading-snug text-white">
                  {proj.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl">
                  {proj.subtitle} — integrated solutions for energy efficiency,
                  smart security and centralized automation.
                </p>

                <ul className="mt-5 flex flex-wrap gap-3 text-xs text-[#bcd7ff]">
                  <li className="px-3 py-1 rounded-full border border-[#2e5fbf]">
                    Energy Control
                  </li>
                  <li className="px-3 py-1 rounded-full border border-[#2e5fbf]">
                    Smart Security
                  </li>
                  <li className="px-3 py-1 rounded-full border border-[#2e5fbf]">
                    Automation Hub
                  </li>
                </ul>

                <div className="flex items-center gap-4 mt-6">
                  {/* placeholder brand icons (put your real icons) */}
                  <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
                    <Image src="/philips.png" alt="philips" width={28} height={28} className="object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
                    <Image src="/tuya.png" alt="tuya" width={28} height={28} className="object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
                    <Image src="/sonoff.png" alt="sonoff" width={28} height={28} className="object-contain" />
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href={proj.href}
                    className="inline-block px-6 py-3 rounded-full font-semibold text-[#071327] bg-[#FFC65C] hover:brightness-95 transition-shadow shadow-[0_6px_24px_rgba(255,198,92,0.18)]"
                  >
                    See Details →
                  </Link>

                  <button
                    className="px-4 py-2 rounded-full text-sm font-medium border border-[#3592ea] text-[#3592ea] bg-transparent hover:bg-[#3592ea]/10 transition"
                  >
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
