"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Smart Touch Switch",
    category: "Switches",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    desc: "Elegant glass touch switch with app & voice control support.",
  },
  {
    id: 2,
    name: "Smart Lighting Controller",
    category: "Lighting",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    desc: "Control lighting scenes, dimming, and schedules seamlessly.",
  },
  {
    id: 3,
    name: "Smart Door Lock",
    category: "Security",
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
    desc: "Fingerprint, PIN, RFID & mobile app-enabled smart lock.",
  },
  {
    id: 4,
    name: "Motion Sensor",
    category: "Sensors",
    price: "₹3,299",
    image:
      "https://images.unsplash.com/photo-1616627988761-7cfe9d1a8e1b",
    desc: "Detect movement and automate lights & security alerts.",
  },
  {
    id: 5,
    name: "Smart Curtain Motor",
    category: "Curtains",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1592928302646-8d5c2bfa5e57",
    desc: "Automate curtains with schedules & voice assistants.",
  },
  {
    id: 6,
    name: "Smart Home Hub",
    category: "Hub",
    price: "₹7,999",
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6b",
    desc: "Central hub to connect and control all smart devices.",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#f8fafb]">

      {/* HERO */}
      <section className="py-24 bg-slate-600 text-center">
        {/* <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Smart Home <span className="text-[#0E4CCF]">Products</span>
        </h1> */}
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Premium home automation solutions designed for comfort,
          security, and energy efficiency.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-56 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <span className="text-xs font-medium text-[#0E4CCF] uppercase">
                {product.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {product.name}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {product.desc}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  {product.price}
                </span>

                <button className="px-4 py-2 bg-[#0E4CCF] text-white rounded-md text-sm hover:bg-[#0b3aa3] transition">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
