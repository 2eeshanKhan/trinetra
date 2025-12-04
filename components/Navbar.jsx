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
  { label: "Products", href: "/products" },
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

        {/* LOGO (Responsive) */}
        <Link href="/" className="flex items-center">
          <div className="relative w-36 h-14 sm:w-48 sm:h-20 md:w-50 md:h-24 lg:w-40 lg:h-24">
            <Image
              src="/llogo.png"
              alt="Trinetra"
              fill
              className="object-contain"
              priority
            />
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

                {/* Dropdown */}
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

        {/* 🔍 SEARCH ICON WITH ANIMATION */}
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(53,146,234,0.0)",
              "0 0 12px rgba(53,146,234,0.6)",
              "0 0 0px rgba(53,146,234,0.0)",
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="hidden lg:flex items-center justify-center cursor-pointer p-3 rounded-full"
        >
          <Search
            size={24}
            className={`${solid ? "text-gray-900" : "text-white"}`}
          />
        </motion.div>

        {/* MOBILE MENU BUTTON */}
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
                <button onClick={() => setMobileOpen(false)}>
                  <X />
                </button>
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
