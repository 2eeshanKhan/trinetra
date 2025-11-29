// "use client";
// import { Mail, ChevronRight, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0A0E19] text-white">
      
//       {/* TOP CTA SECTION */}
//       <div className="relative w-full h-[380px] bg-[url('/cta-bg.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6">
//         <div>
//           <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
//             Take The First Step Towards A <br /> Smarter Home Today.
//           </h2>

//           <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#FFC65C] via-[#FFC65C] to-[#4465D5] rounded-full font-medium text-[#0A0E19] flex items-center gap-2 mx-auto">
//             Contact Us Now <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* FOOTER MAIN */}
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
//           {/* Logo + Text + Subscribe */}
//           <div>
//             <div className="flex items-center text-3xl font-extrabold tracking-wide">
//               <span>TRI</span>
//               <span className="text-sky-500">NET</span>
//               <span>RA</span>
//             </div>

//             <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-xs">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
//               luctus nec ullamcorper mattis, pulvinar dapibus leo.
//             </p>

//             {/* Subscribe */}
//             <div className="mt-6 flex bg-white rounded-full overflow-hidden w-full max-w-sm">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="flex-1 px-4 py-3 text-black outline-none"
//               />
//               <button className="px-6 bg-gradient-to-r from-[#FFC65C] to-[#4465D5] text-black font-semibold">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-3 text-white/70 text-sm">
//               {["Homepage", "About Us", "Our Services", "Projects Work", "Contact Us"].map((item, i) => (
//                 <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer">
//                   <ChevronRight size={14} /> {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Featured Services */}
//           <div>
//             <h3 className="font-semibold mb-4">Featured Service</h3>
//             <ul className="space-y-3 text-white/70 text-sm">
//               {["Smarthome", "Automation", "House Security", "Installation", "Private House"].map(
//                 (item, i) => (
//                   <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer">
//                     <ChevronRight size={14} /> {item}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Follow Us */}
//           <div>
//             <h3 className="font-semibold mb-4">Follow Us</h3>
//             <p className="text-white/70 text-sm mb-6 max-w-xs leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-4">
//               {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
//                 >
//                   <Icon size={18} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/10 mt-16 mb-6"></div>

//         <p className="text-center text-white/60 text-xs">
//           Allright Reserved - Wirastudio Elementor Kit
//         </p>
//       </div>
//     </footer>
//   );
// }


"use client";
import { Mail, ChevronRight, Facebook, Twitter, Youtube, Linkedin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A0E19] text-white">
      
      {/* TOP CTA SECTION */}
      <div className="relative w-full h-[380px] bg-[url('/cta-bg.jpg')] bg-cover bg-center flex items-center justify-center text-center px-6">
        <div className="backdrop-blur-sm bg-black/30 p-12 rounded-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Transform Your Home Into A Smarter Space.
          </h2>
          <p className="text-white/70 text-sm mt-3">
            Unlock advanced automation with Trinetra Smart Solutions
          </p>

          <button className="mt-6 px-8 py-4 bg-gradient-to-r from-[#FFC65C] to-[#4465D5] rounded-full font-semibold text-[#0A0E19] flex items-center gap-2 mx-auto">
            Get Free Consultation <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* FOOTER MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Text + Subscribe */}
          <div>
            <div className="flex items-center text-3xl font-extrabold tracking-wide">
              <span>TRI</span><span className="text-[#3592ea]">NET</span><span>RA</span>
            </div>

            <p className="text-white/70 text-sm mt-4 leading-relaxed max-w-xs">
              We provide complete Smart Home & Security Automation solutions
              designed for comfort, control and peace of mind.
            </p>

            {/* Subscribe */}
            {/* <div className="mt-6 flex bg-white rounded-full overflow-hidden w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-black outline-none"
              />
              <button className="px-6 bg-gradient-to-r from-[#FFC65C] to-[#4465D5] text-black font-semibold">
                Subscribe
              </button>
            </div> */}
            {/* <div className="mt-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 flex items-center">
  <Mail size={18} className="text-[#FFC65C]" />
  <input
    type="email"
    placeholder="Your Email"
    className="flex-1 bg-transparent px-3 py-2 outline-none text-sm text-white placeholder-white/50"
  />
  <button className="px-6 py-2 bg-gradient-to-r 
    from-[#FFC65C] to-[#4465D5]
    rounded-full text-[#0A0E19] text-sm font-semibold
    hover:brightness-110 transition">
    Join Us
  </button>
</div> */}

<div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1 flex items-center w-full max-w-sm">
  <Mail size={18} className="text-[#FFC65C] ml-3" />

  <input
    type="email"
    placeholder="Your Email"
    className="flex-1 bg-transparent px-3 py-3 outline-none text-sm text-white placeholder-white/50"
  />

  <button
    className="px-2 py-2 bg-gradient-to-r from-[#FFC65C] to-[#4465D5]
    rounded-full text-[#0A0E19] text-sm font-semibold 
    hover:brightness-110 transition whitespace-nowrap"
  >
    Join
  </button>
</div>

            <p className="text-[11px] mt-2 text-white/50">
              Get updates on latest automation trends
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              {["Home", "About Us", "Smart Solutions", "Projects", "Contact"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                  <ChevronRight size={14} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              {[
                "Smart Lighting",
                "Home Security & CCTV",
                "Energy Management",
                "Climate Control",
                "Voice Controlled Automation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                  <ChevronRight size={14} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>

            <p className="text-white/70 text-sm max-w-xs leading-relaxed">
              Trinetra Smart Automation Pvt. Ltd. <br />
              Rajkot,Gujarat — India
            </p>

            <div className="mt-4 text-sm space-y-2 text-white/70">
              <p className="flex gap-2 items-center">
                <Phone size={16} /> +91 98765 43210
              </p>
              <p className="flex gap-2 items-center">
                <Mail size={16} /> support@trinetra.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-16 mb-6"></div>

        <p className="text-center text-white/60 text-xs">
          © {new Date().getFullYear()} Trinetra Smart Automation — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
