// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronDown, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navItems = [
//   { label: "Home", href: "/" },
//   {
//     label: "About",
//     submenu: [
//       { label: "About Us", href: "/about" },
//       { label: "Our Team", href: "/team" },
//     ],
//   },
//   {
//     label: "Services",
//     submenu: [
//       { label: "Smart System", href: "/services/smart-system" },
//       { label: "Smart Security", href: "/services/smart-security" },
//       { label: "Smart Control", href: "/services/smart-control" },
//     ],
//   },
//   { label: "Projects", href: "/projects" },
//   { label: "Pages", href: "/pages" },
// ];

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => (document.body.style.overflow = "");
//   }, [mobileOpen]);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 h-20 flex items-center justify-between">
        
       

//         <Link href="/" className="flex items-center gap-3">
//   <div className="relative sm:w-30 h-18 w-28"> 
//     <Image
//       src="/Trinetralogo.jpeg"
//       alt="Trinetra"
//       fill
//       style={{ objectFit: "cover" }}
//     />
//   </div>
// </Link>


//         {/* CENTER MENU */}
//         <nav className="hidden lg:flex items-center justify-center flex-1">
//           <ul className="flex gap-10 text-[#1A1A1A] font-medium">
//             {navItems.map((item) => {
//               const isActive = activeMenu === item.label;
//               return (
//                 <li
//                   key={item.label}
//                   className="relative"
//                   onMouseEnter={() => setActiveMenu(item.label)}
//                   onMouseLeave={() => setActiveMenu(null)}
//                 >
//                   <Link href={item.href || "#"} className="px-2 py-4 hover:text-[#3592ea]">
//                     {item.label}
//                     {item.submenu && item.submenu.length > 0 && (
//                       <ChevronDown size={14} className="inline-block ml-1" />
//                     )}
//                   </Link>

//                   {/* BLUE UNDERLINE */}
//                   {/* <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: isActive ? 1 : 0 }}
//                     transition={{ duration: 0.25 }}
//                     className="absolute bottom-0 left-0 right-0 h-[3px] mx-auto rounded-lg"
//                     style={{
//                       backgroundColor: "#3592ea",
//                       width: "80%",
//                       transformOrigin: "center",
//                     }}
//                   /> */}

//                   <motion.div
//   initial={{ scaleX: 0 }}
//   animate={{ scaleX: isActive ? 1 : 0 }}
//   transition={{ duration: 0.25 }}
//   className="absolute -bottom-4 left-0 right-0 h-[3px] mx-auto rounded-lg"
//   style={{
//     backgroundColor: "#3592ea",
//     width: "80%",
//     transformOrigin: "center",
//   }}
// />


//                   {/* DROPDOWN */}
//                   {/* {item.submenu && (
//                     <AnimatePresence>
//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 10 }}
//                           className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 bg-white text-gray-900 min-w-[220px] rounded-lg shadow-lg overflow-hidden"
//                         >
//                           {item.submenu.map((sub, i) => (
//                             <Link key={sub.label} href={sub.href}>
//                               <div
//                                 className={`px-5 py-3 text-sm font-medium cursor-pointer ${
//                                   i === 0
//                                     ? "bg-[#3592ea] text-white"
//                                     : "hover:bg-gray-100"
//                                 }`}
//                               >
//                                 {sub.label}
//                               </div>
//                             </Link>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   )} */}

//                   {item.submenu && (
//   <AnimatePresence>
//     {isActive && (
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 10 }}
//         className="absolute left-0 top-full mt-4 bg-white text-gray-900 min-w-[220px] shadow-lg overflow-hidden"
//       >
//         {item.submenu.map((sub) => (
//           <Link key={sub.label} href={sub.href}>
//             <div
//               className="px-5 py-3 text-sm font-medium cursor-pointer text-black bg-white hover:bg-[#3592ea] hover:text-white transition-colors duration-200"
//             >
//               {sub.label}
//             </div>
//           </Link>
//         ))}
//       </motion.div>
//     )}
//   </AnimatePresence>
// )}

//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* RIGHT ACTION BUTTONS */}
//         <div className="flex items-center gap-4">
//           <Search className="hidden sm:inline text-[#1A1A1A] cursor-pointer" size={18} />
//           <button
//             className="hidden md:inline-block px-5 py-2 rounded-full font-semibold text-white shadow"
//             style={{
//               backgroundColor: "#3592ea",
//             }}
//           >
//             Get A Quote
//           </button>

//           {/* MOBILE MENU TOGGLE */}
//           <button className="lg:hidden text-[#1A1A1A]" onClick={() => setMobileOpen(true)}>
//             <Menu size={24} />
//           </button>
//         </div>

//       </div>

//       {/* MOBILE MENU DRAWER */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setMobileOpen(false)}
//             />

//             <motion.aside
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl"
//             >
//               <div className="flex justify-between items-center p-4 border-b">
//                 <span className="font-semibold text-[#1A1A1A]">Menu</span>
//                 <button onClick={() => setMobileOpen(false)}><X /></button>
//               </div>

//               <ul className="p-4 space-y-3">
//                 {navItems.map((item) => (
//                   <li key={item.label}>
//                     <Link
//                       href={item.href || "#"}
//                       className="block py-2 text-gray-800 font-medium"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>

//     </header>
//   );
// }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, Menu, X, Search } from "lucide-react";
// import useScrollHeader from "@/hooks/useScrollHeader";

// const navItems = [
//   { label: "Home", href: "/" },
//   {
//     label: "About",
//     submenu: [
//       { label: "About Us", href: "/about" },
//       { label: "Our Team", href: "/team" },
//     ],
//   },
//   {
//     label: "Services",
//     submenu: [
//       { label: "Smart System", href: "/services/smart-system" },
//       { label: "Smart Security", href: "/services/smart-security" },
//       { label: "Smart Control", href: "/services/smart-control" },
//     ],
//   },
//   { label: "Projects", submenu: [] },
//   { label: "Pages", submenu: [] },
// ];

// export default function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const { hidden, solid } = useScrollHeader();

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-500
//       ${hidden ? "-translate-y-full" : "translate-y-0"}
//       ${solid ? "bg-white shadow-lg" : "bg-transparent"}
//     `}
//     >
//       <nav className="flex items-center justify-between px-6 md:px-12 py-4">
        
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-3">
//           <div className="w-44 h-14 relative">
//             <Image src="/Trinetralogo.jpeg" alt="Trinetra Logo" fill style={{ objectFit:"contain" }} />
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className={`hidden lg:flex items-center gap-10 font-medium transition-colors duration-300
//           ${solid ? "text-gray-900" : "text-white"}
//         `}>
//           {navItems.map((item) => (
//             <li key={item.label} className="relative group cursor-pointer"
//               onMouseEnter={() => setActiveMenu(item.label)}
//               onMouseLeave={() => setActiveMenu(null)}
//             >
//               <div className="flex items-center gap-1">
//                 {item.label}
//                 {item.submenu?.length > 0 && <ChevronDown size={14} />}
//               </div>

//               {/* Underline */}
//               <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#3592ea] transition-all duration-300
//                 ${activeMenu === item.label ? "opacity-100" : "opacity-0"}
//               `}/>
              
//             </li>
//           ))}
//         </ul>

//         {/* Search + CTA */}
//         <div className="hidden lg:flex items-center gap-6">
//           <Search className={`${solid ? "text-gray-900" : "text-white"} cursor-pointer`} />

//           <button className="px-6 py-2 rounded-full font-semibold border border-[#3592ea] text-[#3592ea] hover:bg-[#3592ea] hover:text-white transition">
//             Get A Quote
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         {mobileOpen ? (
//           <X size={26} onClick={() => setMobileOpen(false)} className={`${solid ? "text-black" : "text-white"} lg:hidden cursor-pointer`} />
//         ) : (
//           <Menu size={26} onClick={() => setMobileOpen(true)} className={`${solid ? "text-black" : "text-white"} lg:hidden cursor-pointer`} />
//         )}
//       </nav>
//     </header>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollHeader from "@/hooks/useScrollHeader";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Products",
    // submenu: [
    //   { label: "Smart System", href: "/services/smart-system" },
    //   { label: "Smart Security", href: "/services/smart-security" },
    //   { label: "Smart Control", href: "/services/smart-control" },
    // ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contactUs" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { hidden, solid } = useScrollHeader();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      ${solid ? "bg-white shadow-lg" : "bg-transparent"}
    `}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-40 h-14">
            <Image src="/Trinetralogo.jpeg" alt="Trinetra" fill style={{ objectFit: "contain" }} />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden lg:flex items-center gap-10 font-medium transition-colors duration-300
          ${solid ? "text-gray-900" : "text-white"}
        `}
        >
          {navItems.map((item) => {
            const isActive = activeMenu === item.label;
            return (
              <li
                key={item.label}
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="flex items-center gap-1 hover:text-[#3592ea]">
                  {item.label}
                  {item.submenu && <ChevronDown size={14} />}
                </div>

                {/* Underline Animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] mx-auto rounded-lg"
                  style={{
                    backgroundColor: "#3592ea",
                    width: "80%",
                    transformOrigin: "center",
                  }}
                />

                {/* DROPDOWN MENU */}
                {item.submenu && (
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 mt-4 bg-white min-w-[230px] shadow-lg rounded-md overflow-hidden z-50"
                      >
                        {item.submenu.map((sub) => (
                          <Link key={sub.label} href={sub.href}>
                            <div className="px-5 py-3 text-sm text-black font-medium hover:bg-[#3592ea] hover:text-white transition-colors">
                              {sub.label}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>

        {/* RIGHT ACTIONS */}
        {/* <div className="hidden lg:flex items-center gap-6">
          <Search className={`${solid ? "text-gray-900" : "text-white"} cursor-pointer`} />
          <button className="px-6 py-2 rounded-full font-semibold border border-[#3592ea] text-[#3592ea] hover:bg-[#3592ea] hover:text-white transition">
            Know More
          </button>
        </div> */}

        <button
  className="px-6 py-2 rounded-full font-semibold 
  text-white 
  bg-gradient-to-r from-[#4DAAFF] to-[#1A73E8] 
  shadow-[0_0_15px_rgba(77,170,255,0.6)]
  hover:shadow-[0_0_25px_rgba(77,170,255,0.9)]
  transition-all"
>
  Know More
</button>

        {/* MOBILE */}
        <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
          <Menu size={26} className={`${solid ? "text-black" : "text-white"}`} />
        </button>

      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <span className="font-semibold text-gray-800">Menu</span>
                <button onClick={() => setMobileOpen(false)}><X /></button>
              </div>

              <ul className="p-4 space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href || "#"}
                      className="block py-2 text-gray-800 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
