import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trinetra Techno – Smart Home Automation & IoT Solutions",
  description:
    "Trinetra Techno delivers advanced Smart Home Automation, IoT Security Solutions, Smart Lighting, Voice Control Systems, and Energy-Efficient Smart Living technology.",
  metadataBase: new URL("http://www.trinetratechno.world/"),
  keywords: [
    "Smart Home Automation",
    "IoT Solutions",
    "Home Security Systems",
    "Smart Lighting",
    "Voice Control",
    "Automation Company India",
    "Smart Devices",
    "Trinetra Techno",
  ],

  openGraph: {
    title: "Trinetra Techno – Smart Home Automation & IoT Solutions",
    description:
      "Upgrade your home with modern automation, enhanced security, and seamless IoT connectivity with Trinetra Techno.",
    url: "http://www.trinetratechno.world/",
    siteName: "Trinetra Techno",
    images: [
      {
        url: "/Trinetralogo.jpeg", // Replace with your actual OG banner
        width: 1200,
        height: 630,
        alt: "Trinetra Techno – Smart Home Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trinetra Techno – Smart Home Automation & IoT Solutions",
    description:
      "Smart home solutions designed for comfort, security, and energy efficiency.",
    images: ["/Trinetralogo.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
