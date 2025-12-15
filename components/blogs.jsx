// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const blogs = [
//   {
//     id: 1,
//     title: "Top Smart Home Automation Trends in 2025",
//     image: "/blog1.jpg",
//     shortDesc:
//       "Explore the latest innovations shaping the future of smart homes.",
//     content:
//       "Smart home automation in 2025 focuses on AI-driven assistants, energy optimization, and seamless integration across devices. Homeowners are embracing intelligent lighting, smart security, and predictive automation for comfort and efficiency.",
//   },
//   {
//     id: 2,
//     title: "How Home Automation Improves Energy Efficiency",
//     image: "/blog2.jpg",
//     shortDesc:
//       "Learn how automation helps reduce energy consumption and costs.",
//     content:
//       "Automated lighting, smart thermostats, and occupancy sensors play a key role in minimizing energy waste. These systems adapt to user behavior and significantly reduce electricity bills.",
//   },
//   {
//     id: 3,
//     title: "Beginner’s Guide to Smart Lighting Systems",
//     image: "/blog3.jpg",
//     shortDesc:
//       "A simple guide to choosing and installing smart lighting at home.",
//     content:
//       "Smart lighting allows users to control brightness, color, and schedules through mobile apps or voice assistants. It improves comfort while supporting energy savings.",
//   },
// ];

// export default function BlogsPage() {
//   const [activeBlog, setActiveBlog] = useState(null);

//   return (
//     <main className="bg-[#f8fafb]">

//       {/* HERO */}
//       <section className="py-24 bg-white text-center">
//         <h1 className="text-4xl lg:text-5xl font-bold">
//           Home Automation <span className="text-[#0E4CCF]">Blog</span>
//         </h1>
//         <p className="mt-4 text-gray-600">
//           Insights, tips, and trends for smarter living.
//         </p>
//       </section>

//       {/* BLOG GRID */}
//       <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
//             onClick={() => setActiveBlog(blog)}
//           >
//             <div className="relative h-48 rounded-t-xl overflow-hidden">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-lg font-semibold">
//                 {blog.title}
//               </h3>

//               <p className="mt-3 text-sm text-gray-600">
//                 {blog.shortDesc}
//               </p>

//               <span className="mt-4 inline-block text-sm text-[#0E4CCF] font-medium">
//                 Read More →
//               </span>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* MODAL */}
//       {activeBlog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
//           <div className="bg-white max-w-2xl w-full rounded-xl overflow-hidden shadow-xl">
            
//             <div className="relative h-60">
//               <Image
//                 src={activeBlog.image}
//                 alt={activeBlog.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="p-6">
//               <h2 className="text-2xl font-semibold">
//                 {activeBlog.title}
//               </h2>

//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 {activeBlog.content}
//               </p>

//               <button
//                 onClick={() => setActiveBlog(null)}
//                 className="mt-6 px-6 py-2 bg-black text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Top Smart Home Automation Trends in 2025",
    image: "/blog1.jpg",
    tag: "Trends",
    shortDesc:
      "Explore the latest innovations shaping the future of smart homes.",
    content:
      "Smart home automation in 2025 focuses on AI-driven assistants, energy optimization, and seamless integration across devices. Homeowners are embracing intelligent lighting, smart security, and predictive automation for comfort and efficiency.",
  },
  {
    id: 2,
    title: "How Home Automation Improves Energy Efficiency",
    image: "/blog2.jpg",
    tag: "Energy",
    shortDesc:
      "Learn how automation helps reduce energy consumption and costs.",
    content:
      "Automated lighting, smart thermostats, and occupancy sensors play a key role in minimizing energy waste. These systems adapt to user behavior and significantly reduce electricity bills.",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Smart Lighting Systems",
    image: "/blog3.jpg",
    tag: "Lighting",
    shortDesc:
      "A simple guide to choosing and installing smart lighting at home.",
    content:
      "Smart lighting allows users to control brightness, color, and schedules through mobile apps or voice assistants. It improves comfort while supporting energy savings.",
  },
];

export default function BlogsPage() {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <main className="bg-gradient-to-b from-slate-800 to-white">

      {/* HERO */}
      <section className="py-28 text-center bg-slate-800">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">
          Smart Living <span className="text-white">Blog</span>
        </h1>
        <p className="mt-4 text-white max-w-xl mx-auto">
          Insights, ideas, and inspiration for modern home automation.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setActiveBlog(blog)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* TAG */}
              <span className="absolute top-4 left-4 bg-[#0E4CCF] text-white text-xs px-3 py-1 rounded-full">
                {blog.tag}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0E4CCF] transition">
                {blog.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600">
                {blog.shortDesc}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#0E4CCF]">
                Read More
                <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
            
            {/* IMAGE */}
            <div className="relative h-64">
              <Image
                src={activeBlog.image}
                alt={activeBlog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <span className="inline-block mb-3 text-xs font-semibold text-[#0E4CCF] uppercase tracking-wide">
                {activeBlog.tag}
              </span>

              <h2 className="text-2xl font-bold text-gray-900">
                {activeBlog.title}
              </h2>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {activeBlog.content}
              </p>

              <button
                onClick={() => setActiveBlog(null)}
                className="mt-8 px-6 py-3 bg-[#0E4CCF] text-white rounded-lg font-medium hover:bg-[#0b3aa3] transition"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
