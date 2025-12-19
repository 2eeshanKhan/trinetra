

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2 },
  }),
};

export default function ServicesSection() {
 const products = [
    {
      title: "Smart Plug 16A",
      desc: "High-power smart plug with overload protection and energy tracking.",
      image: "/123.jpeg",
    },
    {
      title: "Smart Sensor Hub",
      desc: "Central hub connecting sensors, switches, and automations.",
      image: "/124.jpeg",
    },
    {
      title: "Smart BLDC FAN",
      desc: "3 Blade Black",
      image: "/199.jpeg",
    },
  ];

  return (
    <section
      className="relative w-full py-28"
      style={{
        background: "radial-gradient(circle at bottom, #0a1226, #07101f 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold bg-[#3592ea]/10 text-[#3592ea] px-4 py-2 rounded-full">
            SMART HOME PRODUCTS
          </span>

         <motion.h2
  initial={{ opacity: 0, x: -120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}   // plays again on scroll
  className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight"
>
  Discover The Smart Solutions <br />
  We Bring To Your Home.
</motion.h2>

          <p className="text-gray-300 mt-5 max-w-md text-[15px]">
            Explore our advanced smart automation devices that enhance 
            comfort, safety, and lifestyle effortlessly.
          </p>

          {/* Bullet Points */}
          <div className="mt-8 space-y-4 text-gray-200">
            <div className="flex items-center gap-3">
              <Check className="text-[#ffd36b]" size={20} />
              <span>Seamless automation and voice control</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-[#ffd36b]" size={20} />
              <span>Secure and energy-efficient smart homes</span>
            </div>
          </div>

          <div className="w-16 h-[3px] bg-[#ffd36b] mt-8"></div>
        </motion.div>

        {/* RIGHT PRODUCT CARDS */}
        <div className="space-y-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-[#0d152b] rounded-3xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* IMAGE */}
              <div className="min-w-[160px] h-[130px] rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* TEXT SECTION */}
              <div
                className="rounded-2xl p-5 text-white flex-1"
                style={{
                  background:
                    "linear-gradient(135deg, #0b1f3d 0%, #1f4e9e 70%, #63a1ff 100%)",
                }}
              >
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm opacity-90 mt-2">{product.desc}</p>

                <button className="mt-4 font-semibold text-sm flex items-center gap-1">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// export default function ServicesSection() {
//   const products = [
//     {
//       title: "Smart Plug 16A",
//       desc: "High-power smart plug with overload protection and energy tracking.",
//       image: "/123.jpeg",
//     },
//     {
//       title: "Smart Sensor Hub",
//       desc: "Central hub connecting sensors, switches, and automations.",
//       image: "/124.jpeg",
//     },
//     {
//       title: "Smart BLDC FAN",
//       desc: "3 Blade Black",
//       image: "/199.jpeg",
//     },
//   ];

//   return (
//     <section className="w-full py-28 bg-[#f6f7f4]">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-2xl"
//         >
//           <span className="text-xs tracking-widest uppercase font-medium text-[#6b7c6a]">
//             Smart Living
//           </span>

//           <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-[#1f2933] leading-tight">
//             Designed for homes <br /> that think ahead.
//           </h2>

//           <p className="mt-5 text-[15px] text-[#4b5563] leading-relaxed">
//             Our smart home devices are engineered to blend seamlessly into
//             modern interiors while delivering powerful automation.
//           </p>
//         </motion.div>

//         {/* PRODUCTS GRID */}
//         <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {products.map((product, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300"
//             >
//               {/* IMAGE */}
//               <div className="relative h-[220px] rounded-t-3xl overflow-hidden bg-[#eef1ed]">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className="object-contain p-6"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-7">
//                 <h3 className="text-lg font-semibold text-[#1f2933]">
//                   {product.title}
//                 </h3>

//                 <p className="mt-3 text-sm text-[#6b7280] leading-relaxed">
//                   {product.desc}
//                 </p>

//                 <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#3f5f4a] hover:text-black transition">
//                   View Details
//                   <ArrowUpRight size={16} />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
