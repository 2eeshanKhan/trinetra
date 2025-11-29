// export default function ServicesSection() {


// const services = [
//   {
//     title: "Smart Infrastructure",
//     desc: "Automated lighting, energy monitoring & integrated IoT systems.",
//     icon: "💡", // Replace with real icons soon
//     featured: false,
//   },
//   {
//     title: "Enhanced Security",
//     desc: "AI-powered CCTV, digital door locks & motion sensors.",
//     icon: "🛡️", // Replace with AI Shield SVG icon
//     featured: true,
//     image: "/service-security.jpg", // Add your own image
//   },
//   {
//     title: "Comfort Customization",
//     desc: "Temperature & lighting control via smartphone or voice assistant.",
//     icon: "🎚️", // Replace with Smart home icon
//     featured: false,
//   },
//   {
//     title: "Fully Certified Units",
//     desc: "Certified installations meeting smart tech & legal housing standards.",
//     icon: "🏅", // Replace with certificate icon
//     featured: false,
//   },
// ];


//   return (
//     <section className="py-20 bg-[#fff9f3]">
//       <div className="text-center max-w-3xl mx-auto px-6">

//         {/* Badge */}
//         <div className="inline-block bg-[#ffe7c7] text-[#f59e0b] px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
//           FEATURED SERVICES
//         </div>

//         {/* Title (Updated - No highlight bg) */}
//         <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-4">
//           Explore Our Comprehensive <br />
//           Range of Smart Home Services
//         </h2>

//         <p className="text-gray-600 text-lg">
//           A smarter home is a better way to live.
//         </p>
//       </div>

//       {/* Service Cards */}
//       {/* Service Cards */}
// <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto px-6">
//   {services.map((item, i) => (
//     <div
//       key={i}
//       className={`relative group p-10 rounded-3xl transition-all duration-500 ease-out shadow-md hover:shadow-xl 
//         ${item.featured ? "bg-cover bg-center text-white" : "bg-white"}
//       `}
//       style={{
//         backgroundImage: item.featured ? `url(${item.image})` : "none",
//       }}
//     >

//       {/* Dark overlay only for featured card */}
//       {item.featured && (
//         <div className="absolute inset-0 bg-black/40 rounded-3xl group-hover:bg-black/50 transition-all duration-500" />
//       )}

//       {/* Content */}
//       <div className="relative z-10 text-center space-y-5">

//         {/* Icon */}
//         {item.icon && (
//           <div
//             className={`text-5xl transition-colors duration-500 group-hover:text-[#3592ea] 
//             ${item.featured ? "text-white" : "text-[#f59e0b]"}
//           `}
//           >
//             {item.icon}
//           </div>
//         )}

//         {/* Title */}
//         <h3
//           className={`text-lg font-bold transition-colors duration-500
//           ${item.featured ? "text-white" : "text-[#111] group-hover:text-[#3592ea]"}
//         `}
//         >
//           {item.title}
//         </h3>

//         {/* Description */}
//         <p
//           className={`text-base transition-colors duration-500
//           ${item.featured ? "text-white/85" : "text-gray-600"}
//         `}
//         >
//           {item.desc}
//         </p>

//         {/* Learn more */}
//         <button
//           className={`font-semibold text-sm flex mx-auto items-center gap-2 
//           group-hover:gap-3 transition-all duration-500
//           ${
//             item.featured
//               ? "text-white"
//               : "text-[#f59e0b] group-hover:text-[#3592ea]"
//           }
//         `}
//         >
//           Learn More
//           <span className="transform transition-transform duration-500 group-hover:translate-x-1">
//             →
//           </span>
//         </button>
//       </div>
//     </div>
//   ))}
// </div>

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  Lightbulb,
  Smartphone,
  BadgeCheck,
} from "lucide-react";

// REUSABLE CARD COMPONENT 🔥
function ServiceCard({ icon, title, desc, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500
                 border border-gray-100 hover:bg-[#002b4e] cursor-pointer
                 flex flex-col items-start"
    >
      <div className="text-[#3592ea] group-hover:text-white transition duration-300 mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-[#0a0a0a] group-hover:text-white transition duration-300">
        {title}
      </h3>

      <p className="text-gray-600 group-hover:text-gray-200 text-sm mt-3 flex-1 transition duration-300">
        {desc}
      </p>

      <div className="mt-6 font-semibold flex items-center gap-2 text-[#3592ea] group-hover:text-white transition">
        Learn More
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
}

const serviceData = [
  {
    icon: <Lightbulb size={42} />,
    title: "Smart Infrastructure",
    desc:
      "Automated lighting, energy monitoring, and integrated IoT systems for smart living.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Enhanced Security",
    desc:
      "AI-powered CCTV, digital door locks, and motion sensors for strong home protection.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Comfort Customization",
    desc:
      "Control temperature & lighting via smartphone or voice commands for effortless comfort.",
  },
  {
    icon: <BadgeCheck size={42} />,
    title: "Fully Certified Units",
    desc:
      "Every installation complies with smart tech certifications & legal housing standards.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f8f7f4]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <span className="inline-block text-[#3592ea] bg-[#e8f2ff] px-5 py-2 rounded-full text-xs font-semibold tracking-wide">
          FEATURED SERVICES
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-6 text-[#0a0a0a] leading-tight">
          Explore Our Comprehensive Range of Smart Home Services
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Smart tech solutions designed for efficiency, comfort, and peace of mind.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </section>
  );
}
