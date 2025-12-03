"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
   <section
  className="relative min-h-screen w-full flex items-center justify-start"
  style={{
    backgroundImage: "url('/bgtri.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#003b72]/50 backdrop-blur-[1px]" />

 <motion.div
  initial={{ opacity: 0, x: -140 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: false }}   // animate again on scroll
  className="relative max-w-2xl text-left px-6 ml-10 md:ml-20 text-white mt-24"
>
  <span className="text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 tracking-wide">
    SMART AUTOMATION SOLUTIONS
  </span>

  <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight drop-shadow-md">
    Smart Home Automation
    <br />
    <span className="text-[#3592ea]">Made Simple & Secure</span>
  </h1>

  <p className="text-lg mt-6 opacity-90 max-w-md drop-shadow-sm">
    Integrated Smart Home Solutions designed for comfort,
    energy efficiency, and security.
  </p>

  <div className="mt-8 flex gap-4">
    <button className="px-6 py-3 bg-[#3592ea] text-white rounded-full font-semibold shadow hover:bg-blue-600 transition">
      Get A Quote
    </button>
    <button className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#003b72] transition">
      Learn More
    </button>
  </div>
</motion.div>

</section>



  );
}
