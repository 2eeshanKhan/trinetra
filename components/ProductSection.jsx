// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Check } from "lucide-react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: i * 0.2 },
//   }),
// };

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Voice-Controlled Systems",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       image: "/service-voice.jpg",
//     },
//     {
//       title: "Remote Access Solutions",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       image: "/service-remote.jpg",
//     },
//     {
//       title: "Custom Smart Home",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       image: "/service-custom.jpg",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full py-28"
//       style={{
//         background: "radial-gradient(circle at bottom, #0a1226, #07101f 70%)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <span className="text-xs font-semibold bg-[#3592ea]/10 text-[#3592ea] px-4 py-2 rounded-full">
//             OUR FEATURED PRODUCTS
//           </span>

//           <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
//             Discover The Smart Home <br /> Services We Offer To <br /> Enhance
//             Your Life.
//           </h2>

//           <p className="text-gray-300 mt-5 max-w-md">
//             Book your visit and experience our fully functional
//             show unit today.
//           </p>

//           {/* Bullet Points */}
//           <div className="mt-8 space-y-4 text-gray-200">
//             <div className="flex items-center gap-3">
//               <Check className="text-[#ffd36b]" size={20} />
//               <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <Check className="text-[#ffd36b]" size={20} />
//               <span>Lorem ipsum dolor sit amet, consectetur</span>
//             </div>
//           </div>

//           {/* Small yellow line */}
//           <div className="w-16 h-[3px] bg-[#ffd36b] mt-8"></div>
//         </motion.div>

//         {/* RIGHT CARDS */}
//         <div className="space-y-8">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               custom={i}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//               className="flex items-center gap-4 bg-[#0d152b] rounded-3xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer"
//             >
//               {/* IMAGE */}
//               <div className="min-w-[160px] h-[130px] rounded-xl overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   width={200}
//                   height={150}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               {/* TEXT SIDE */}
//               <div
//                 className="rounded-2xl p-5 text-white flex-1"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #0b1f3d 0%, #1f4e9e 70%, #63a1ff 100%)",
//                 }}
//               >
//                 <h3 className="text-lg font-semibold">{service.title}</h3>
//                 <p className="text-sm opacity-90 mt-2">{service.desc}</p>

//                 <button className="mt-4 font-semibold text-sm flex items-center gap-1">
//                   Learn More →
//                 </button>
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
      title: "Modular Touch Basic 4 Touch",
      desc: "Auto calibration,Wet hand proof touch",
      image: "/11.jpeg",
    },
    {
      title: "Modular Touch Basic Fan Touch",
      desc: "Auto calibration,Wet hand proof touch",
      image: "/22.jpeg",
    },
    {
      title: "Modular Touch Basic HD Touch",
      desc: "Auto calibration,Wet hand proof touch",
      image: "/33.jpeg",
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

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
            Discover The Smart Solutions <br />
            We Bring To Your Home.
          </h2>

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
