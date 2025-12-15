// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   return (
//     <main className="bg-[#f8f9fb]">
      
//       {/* HERO */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl lg:text-5xl font-semibold text-gray-900"
//           >
//             About Trinetra Technoworld
//           </motion.h1>

//           <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
//             Trinetra Technoworld is where innovation meets comfort in the realm of
//             smart home automation. We transform ordinary living spaces into
//             intelligent, secure, and energy-efficient environments.
//           </p>
//         </div>
//       </section>

//       {/* ABOUT CONTENT */}
//       <section className="py-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-900">
//               Who We Are
//             </h2>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               As pioneers in smart housing, Trinetra Technoworld designs homes
//               using cutting-edge technology and eco-friendly solutions. Our
//               approach ensures a seamless blend of future-ready automation with
//               everyday living.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
//             <Image
//               src="/about-smart-home.jpg"
//               alt="Smart Home"
//               width={600}
//               height={400}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* VISION & MISSION */}
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               Our vision is to build an eco-system that ranks among the top five
//               globally, driven by a strong customer-centric approach and
//               sustainable innovation.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
//             <p className="mt-4 text-gray-600 leading-relaxed">
//               We focus on long-term value creation through ethical practices,
//               smart work, and best-in-class solutions delivered via globally
//               leading technology partners.
//             </p>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import Image from "next/image";

export default function AboutPage() {
  const coreValues = [
    "Integrity",
    "Customer Centric",
    "Inventive Mindset",
    "Empowerment",
    "Collective Victory",
  ];

  const founders = [
    {
      name: "ABC",
      role: "Co-Founder",
      desc:
        "ABC leads product vision and operations, blending innovation with execution. He believes in empowering young talent.",
      img: "/founder1.jpg",
    },
    {
      name: "XYZ",
      role: "Co-Founder, Sales & Marketing",
      desc:
        "XYZ drives growth and partnerships. His dictionary starts and ends with the word growth.",
      img: "/founder2.jpg",
    },
  ];

  return (
    <main className="bg-white text-gray-800">

      {/* ======================================================
          1️⃣ HERO IMAGE SECTION
      ====================================================== */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/homeai.jpg"
          alt="Our Team"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-4xl">
            From Innovation, To Infinity<br />
            <span className="text-[#38BDF8]"> TRINETRA </span>
          </h1>
        </div>
      </section>

      {/* ======================================================
          2️⃣ INNOVATING + VISION / MISSION
      ====================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight">
            <span className="text-[#38BDF8]">Integrity</span>
            <br />Customer Centric
            <br />Innovation
            <br />Empowerment
            <br />Excellence
          </h2>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-10">
          <div className="flex gap-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
              ☀️
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To lead a globally top-five solution ecosystem powered by customer-centric innovation.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
              ⛰️
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p className="mt-2 text-gray-600">
               Driven by ethics and innovation, we deliver world-class solutions that create lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          3️⃣ CORE VALUES (DARK SECTION)
      ====================================================== */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 items-center">
          
          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-semibold">
              Our Core <span className="text-[#38BDF8]">Values</span>
            </h3>
            <p className="mt-4 text-gray-300">
              Where innovation blends seamlessly
              with comfort in home automation.
              </p>

            <button className="mt-8 px-6 py-3 bg-white text-black rounded-md font-medium">
              Contact Us
            </button>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="border border-white/15 rounded-xl py-10 text-center"
              >
                <div className="mb-4 text-2xl">◎</div>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          4️⃣ FOUNDERS SECTION
      ====================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold">
          Meet our <span className="text-[#6bc14a]">Founders</span>
        </h3>
        <p className="mt-3 text-gray-600">
          Driven by purpose and powered by passion.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {founders.map((f, index) => (
            <div key={index} className="flex gap-8 text-left">
              <div className="w-48 h-56 relative rounded-xl overflow-hidden border">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold">{f.name}</h4>
                <p className="text-sm text-gray-500">{f.role}</p>
                <p className="mt-4 text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}



