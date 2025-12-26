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



// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const blogs = [
//   {
//     id: 1,
//     title: "Top Smart Home Automation Trends in 2025",
//     image: "/blog1.jpg",
//     tag: "Trends",
//     shortDesc:
//       "Explore the latest innovations shaping the future of smart homes.",
//     content:
//       "Smart home automation in 2025 focuses on AI-driven assistants, energy optimization, and seamless integration across devices. Homeowners are embracing intelligent lighting, smart security, and predictive automation for comfort and efficiency.",
//   },
//   {
//     id: 2,
//     title: "How Home Automation Improves Energy Efficiency",
//     image: "/blog2.jpg",
//     tag: "Energy",
//     shortDesc:
//       "Learn how automation helps reduce energy consumption and costs.",
//     content:
//       "Automated lighting, smart thermostats, and occupancy sensors play a key role in minimizing energy waste. These systems adapt to user behavior and significantly reduce electricity bills.",
//   },
//   {
//     id: 3,
//     title: "Beginner’s Guide to Smart Lighting Systems",
//     image: "/blog3.jpg",
//     tag: "Lighting",
//     shortDesc:
//       "A simple guide to choosing and installing smart lighting at home.",
//     content:
//       "Smart lighting allows users to control brightness, color, and schedules through mobile apps or voice assistants. It improves comfort while supporting energy savings.",
//   },
// ];

// export default function BlogsPage() {
//   const [activeBlog, setActiveBlog] = useState(null);

//   return (
//     <main className="bg-gradient-to-b from-slate-800 to-white">

//       {/* HERO */}
//       <section className="py-28 text-center bg-slate-800">
//         <h1 className="text-4xl lg:text-5xl font-bold text-white">
//           Smart Living <span className="text-white">Blog</span>
//         </h1>
//         <p className="mt-4 text-white max-w-xl mx-auto">
//           Insights, ideas, and inspiration for modern home automation.
//         </p>
//       </section>

//       {/* BLOG GRID */}
//       <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             onClick={() => setActiveBlog(blog)}
//             className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
//           >
//             {/* IMAGE */}
//             <div className="relative h-52 overflow-hidden">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 fill
//                 className="object-cover group-hover:scale-110 transition-transform duration-500"
//               />

//               {/* TAG */}
//               <span className="absolute top-4 left-4 bg-[#0E4CCF] text-white text-xs px-3 py-1 rounded-full">
//                 {blog.tag}
//               </span>
//             </div>

//             {/* CONTENT */}
//             <div className="p-6">
//               <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0E4CCF] transition">
//                 {blog.title}
//               </h3>

//               <p className="mt-3 text-sm text-gray-600">
//                 {blog.shortDesc}
//               </p>

//               <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#0E4CCF]">
//                 Read More
//                 <span className="group-hover:translate-x-1 transition">→</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* MODAL */}
//       {activeBlog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
//           <div className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
            
//             {/* IMAGE */}
//             <div className="relative h-64">
//               <Image
//                 src={activeBlog.image}
//                 alt={activeBlog.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-8">
//               <span className="inline-block mb-3 text-xs font-semibold text-[#0E4CCF] uppercase tracking-wide">
//                 {activeBlog.tag}
//               </span>

//               <h2 className="text-2xl font-bold text-gray-900">
//                 {activeBlog.title}
//               </h2>

//               <p className="mt-4 text-gray-700 leading-relaxed">
//                 {activeBlog.content}
//               </p>

//               <button
//                 onClick={() => setActiveBlog(null)}
//                 className="mt-8 px-6 py-3 bg-[#0E4CCF] text-white rounded-lg font-medium hover:bg-[#0b3aa3] transition"
//               >
//                 Close Article
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
import { X } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Top Smart Home Automation Trends in 2025",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
    tag: "Trends",
    shortDesc:
      "Explore the latest innovations shaping the future of smart homes.",
    content:
      "Smart home automation in 2025 focuses on AI-driven assistants, energy optimization, and seamless integration across devices.",
  },
  {
    id: 2,
    title: "How Home Automation Improves Energy Efficiency",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop",
    tag: "Energy",
    shortDesc:
      "Learn how automation helps reduce energy consumption and costs.",
    content:
      "Automated lighting, smart thermostats, and occupancy sensors reduce power waste significantly.",
  },
  // {
  //   id: 3,
  //   title: "Beginner’s Guide to Smart Lighting Systems",
  //   image:
  //     "https://images.unsplash.com/photo-1560185127-6a8c7c35b27c?q=80&w=1600&auto=format&fit=crop",
  //   tag: "Lighting",
  //   shortDesc:
  //     "A simple guide to choosing and installing smart lighting.",
  //   content:
  //     "Smart lighting allows control over brightness, color, and schedules via apps or voice assistants.",
  // },
  {
    id: 4,
    title: "Smart Security Systems Every Home Needs",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
    tag: "Security",
    shortDesc:
      "Protect your home with intelligent security solutions.",
    content:
      "Modern security systems include smart locks, cameras, motion sensors, and remote monitoring.",
  },
  {
    id: 5,
    title: "Voice Assistants vs Automation Panels",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1600&auto=format&fit=crop",
    tag: "Guide",
    shortDesc:
      "Which control system is better for your smart home?",
    content:
      "Voice assistants offer convenience, while automation panels provide reliability and control.",
  },
  {
    id: 6,
    title: "Smart Homes for Apartments: What Works Best",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop",
    tag: "Living",
    shortDesc:
      "Automation ideas that fit perfectly in apartments.",
    content:
      "Wireless devices, smart plugs, and lighting systems work best for apartments.",
  },
  {
    id: 7,
    title: "AI in Home Automation: What’s Next?",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    tag: "AI",
    shortDesc:
      "How artificial intelligence is changing smart living.",
    content:
      "AI enables predictive automation, voice recognition, and adaptive environments in modern homes.",
  },
  {
    id: 8,
    title: "Smart Curtains & Blinds Explained",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1600&auto=format&fit=crop",
    tag: "Comfort",
    shortDesc:
      "Automated curtains for privacy, comfort, and energy savings.",
    content:
      "Smart curtains can be scheduled or controlled via apps to improve insulation and comfort.",
  },
  
 
  {
    id: 12,
    title: "Smart Homes & Data Privacy Concerns",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop",
    tag: "Privacy",
    shortDesc:
      "Understand privacy challenges in connected homes.",
    content:
      "Data encryption and secure networks are essential for protecting smart home users.",
  },
  {
    id: 13,
    title: "Is Home Automation Worth the Investment?",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    tag: "Investment",
    shortDesc:
      "Cost vs value analysis of smart home systems.",
    content:
      "While initial costs are higher, automation delivers long-term savings and comfort.",
  },
];



export default function BlogsPage() {
 const [activeBlog, setActiveBlog] = useState(null);

  return (
    <main className="bg-[#f8fafc] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E4CCF] to-[#002D9C]">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
         
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Ideas that power <br /> modern smart homes
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Discover trends, guides, and expert insights on home automation,
            energy efficiency, and smart living.
          </p>
        </div>
      </section>
{/* BLOG LIST */}
<section className="max-w-7xl mx-auto px-6 py-24">

  {/* FEATURED BLOG */}
  <div
    onClick={() => setActiveBlog(blogs[0])}
    className="group cursor-pointer mb-20 grid lg:grid-cols-2 gap-12 items-center"
  >
    <div className="relative h-[340px] rounded-3xl overflow-hidden">
      <Image
        src={blogs[0].image}
        alt={blogs[0].title}
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    <div>
      <span className="text-sm font-semibold text-[#0E4CCF] uppercase">
        {blogs[0].tag}
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
        {blogs[0].title}
      </h2>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        {blogs[0].shortDesc}
      </p>

      <div className="mt-6 inline-flex items-center font-semibold text-[#0E4CCF]">
        Read featured article →
      </div>
    </div>
  </div>

  {/* OTHER BLOGS */}
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {blogs.slice(1).map((blog) => (
      <article
        key={blog.id}
        onClick={() => setActiveBlog(blog)}
        className="group cursor-pointer bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition duration-300 overflow-hidden"
      >
        <div className="relative h-48">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <span className="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs px-3 py-1 rounded-full">
            {blog.tag}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0E4CCF]">
            {blog.title}
          </h3>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {blog.shortDesc}
          </p>

          <div className="mt-5 text-sm font-semibold text-[#0E4CCF]">
            Read article →
          </div>
        </div>
      </article>
    ))}
  </div>
</section>


      {/* MODAL / ARTICLE VIEW */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl animate-fadeIn">
            
            {/* CLOSE */}
            <button
              onClick={() => setActiveBlog(null)}
              className="absolute top-5 right-5 z-10 bg-white/90 p-2 rounded-full hover:bg-white shadow"
            >
              <X size={20} />
            </button>

            {/* IMAGE */}
            <div className="relative h-72">
              <Image
                src={activeBlog.image}
                alt={activeBlog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* ARTICLE */}
            <div className="p-10 max-h-[60vh] overflow-y-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4CCF]">
                {activeBlog.tag}
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                {activeBlog.title}
              </h2>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                {activeBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
