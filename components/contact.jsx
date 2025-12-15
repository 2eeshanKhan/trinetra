// "use client";

// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     projectType: "",
//     controlFor: "",
//     phone: "",
//     city: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Submit form to API or service
//     alert("Form submitted!");
//   };

//   return (
//     <main className="bg-[#f8fafb] text-gray-800">

//       {/* HERO */}
//       <section className="text-center py-24 bg-white">
//         <h1 className="text-4xl lg:text-5xl font-bold text-[#0E4CCF]">
//           Let’s Make Your Space Smarter Together.
//         </h1>
//         <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//           We would love to hear from you anytime.
//         </p>
//       </section>

//       {/* CONTACT INFO + FORM + MAP */}
//       <section className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

//         {/* LEFT: FORM */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold text-[#0E4CCF]">
//             Contact Us
//           </h2>

//           {/* Contact Details */}
//           <div className="text-gray-700 space-y-2">
//             <p>📞 +91 78638 08713</p>
//             <p>✉️ info@smartnode.in</p>
//             <p>
//               📍 A-09-02-B, Kamdhenu Estate, Opp. Gorwa Water Tank,
//               Gorwa, Vadodara, India - 390016
//             </p>
//           </div>

//           {/* FORM */}
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 gap-4"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-md"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-md"
//               required
//             />

//             <input
//               type="text"
//               name="projectType"
//               placeholder="Project Type (e.g., New Building, Renovation)"
//               value={formData.projectType}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-md"
//             />

//             <input
//               type="text"
//               name="controlFor"
//               placeholder="Control For (e.g., Lighting, Security)"
//               value={formData.controlFor}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-md"
//             />

//             <input
//               type="text"
//               name="phone"
//               placeholder="Contact Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-md"
//             />

//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-md"
//             />

//             <button
//               type="submit"
//               className="bg-[#0E4CCF] text-white px-6 py-3 rounded-md font-semibold"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* RIGHT: MAP */}
//         <div className="rounded-lg overflow-hidden shadow-lg">
//           <iframe
//             src="https://www.google.com/maps?q=Vadodara+Gorwa+Water+Tank+India&output=embed"
//             width="100%"
//             height="100%"
//             className="min-h-[450px] border-0"
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    automationFor: "",
    projectType: "",
    controls: [],
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        controls: checked
          ? [...prev.controls, value]
          : prev.controls.filter((c) => c !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted");
  };

  return (
    <main className="bg-[#f8fafb] text-gray-800">

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

      {/* ================= HERO ================= */}
   

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">

        {/* LEFT CARD */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/llogo.png" alt="Logo" width={40} height={40} />
            <span className="font-semibold">Trinetra Technoworld</span>
          </div>

          <div className="space-y-3 text-sm">
            <p>📞 +91 91062 55483</p>
            <p>✉️ support@trinetratechno.world</p>
            <p>
              📍 Plot no 129, <br />
              3rd lane Darukhana, <br />
              Mazgaon,Mumbai - 400010
            </p>
          </div>

          {/* MINI MAP */}
          <div className="rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.63090477616504!2d72.84639153075345!3d18.97352108221003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4c73990389%3A0xab90f25d5792b438!2s129%2C%203rd%20Ln%2C%20Darukhana%2C%20Byculla%2C%20Mumbai%2C%20Maharashtra%20400010!5e0!3m2!1sen!2sin!4v1765799679461!5m2!1sen!2sin"
              
              width="100%"
              height="220"
              className="border-0"
              loading="lazy"
            ></iframe>

            
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              className="border rounded-md px-4 py-3"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border rounded-md px-4 py-3"
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="automationFor"
              className="border rounded-md px-4 py-3"
              onChange={handleChange}
            >
              <option value="">Automation For</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
            </select>

            <select
              name="projectType"
              className="border rounded-md px-4 py-3"
              onChange={handleChange}
            >
              <option value="">Project Type</option>
              <option>New Building</option>
              <option>Renovation</option>
            </select>
          </div>

          {/* CHECKBOXES */}
          <div>
            <p className="font-medium mb-2">
              Control For (you can select multiple option)
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                "Lighting & Scene Control",
                "Curtain & Appliances Control",
                "Safety & Security Control",
                "Home Theatre System",
              ].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="phone"
              placeholder="Contact Number"
              className="border rounded-md px-4 py-3"
              onChange={handleChange}
            />
            <input
              name="city"
              placeholder="City"
              className="border rounded-md px-4 py-3"
              onChange={handleChange}
            />
          </div>

          <p className="text-xs text-gray-500">
            By submitting this form, you agree that we may use your information
            for marketing purposes.
          </p>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-md font-medium"
          >
            Submit
          </button>
        </form>
      </section>

      {/* ================= FULL MAP ================= */}
     <section className="py-20 bg-[#f8fafb]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-[450px] rounded-xl overflow-hidden shadow-lg border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.63090477616504!2d72.84639153075345!3d18.97352108221003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4c73990389%3A0xab90f25d5792b438!2s129%2C%203rd%20Ln%2C%20Darukhana%2C%20Byculla%2C%20Mumbai%2C%20Maharashtra%20400010!5e0!3m2!1sen!2sin!4v1765799679461!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="border-0"
        loading="lazy"
      />
    </div>
  </div>
</section>


    </main>
  );
}
