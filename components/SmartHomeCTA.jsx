"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SmartHomeCTA() {
  return (
    <section className="relative bg-[#0a1226] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block bg-[#1f2e4c] text-[#ffd36b] px-4 py-2 rounded-full text-sm font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your Home into a Smart Haven?
          </h2>
          <p className="text-gray-300 max-w-lg">
            Discover cutting-edge solutions in automation, security, energy
            efficiency, and connected living — all tailored for modern homes.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-[#3592ea] hover:bg-[#2b7bcc] rounded-full font-semibold drop-shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        {/* Right: Hero / Illustration Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-auto rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/Office Auto.png"
            alt="Smart Home Solutions"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
