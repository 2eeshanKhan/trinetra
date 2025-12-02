"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//     name: "Mr. John Doe",
//     role: "CLIENTS",
//     image: "/man.jpg",
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//     name: "Mr. John Doe",
//     role: "CLIENTS",
//     image: "/man.jpg",
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//     name: "Mr. John Doe",
//     role: "CLIENTS",
//     image: "/man.jpg",
//   },
// ];

const testimonials = [
  {
    text: "Installing the smart door lock and security cameras has made our home feel much safer. I can monitor everything right from my phone!",
    name: "Amit Sharma",
    role: "Homeowner",
    image: "/56.jpeg",
  },
 
 
  {
    text: "Now I can control my home appliances even when I’m traveling. Way better than traditional systems!",
    name: "Neha Agarwal",
    role: "Working Professional",
    image: "/55.jpeg",
  },
  {
    text: "The voice-controlled smart system has made my home futuristic. Setup was quick and smooth. Loved the experience!",
    name: "Rahul Mehta",
    role: "Business Owner",
    image: "/60.jpeg",
  },
];


export default function ClientReviews() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;   
    let scrollAmount = 0;

    const autoScroll = () => {
      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(autoScroll, 15);

    slider.addEventListener("mouseenter", () => clearInterval(interval));

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#0A0E19] text-white py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('/tablet-bg.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="px-6 py-2 bg-white/10 rounded-full text-[#FFC65C] font-medium text-sm tracking-wide">
            CLIENT REVIEWS
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Our Clients Say About <br /> Smart Home Services.
          </h2>

          <p className="mt-6 text-white/60 max-w-lg text-[16px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="w-24 h-[3px] bg-[#FFC65C] mt-8 rounded-full"></div>
        </motion.div>

        {/* RIGHT SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth py-4"
        >
          {testimonials.concat(testimonials).map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[360px] lg:min-w-[380px] max-w-[380px] 
              p-10 rounded-3xl flex-shrink-0
              bg-gradient-to-br from-[#203A8E] via-[#4566D6] to-[#FFC65C] shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-[#FFC65C]">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} size={20} fill="#FFC65C" color="#FFC65C" />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-white text-[18px] leading-relaxed font-medium mb-10">
                {item.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={55}
                  height={55}
                  alt={item.name}
                  className="rounded-full border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-[18px] text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#FFC65C] tracking-wide">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
