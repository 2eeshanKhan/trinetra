import React from 'react'
import Contact from '@/components/contact'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata  = {
  title: 'Contact Us - Trinetra',
  description: ' Trinetra Technoworld designs homes using cutting-edge technology and eco-friendly solutions. Our approach ensures a seamless blend of future-ready automation with everyday living',
  keywords: 'Trinetra ',
  openGraph: {
  title: 'Trinetra Technoworld',
  description:  ' Trinetra Technoworld designs homes using cutting-edge technology and eco-friendly solutions. Our approach ensures a seamless blend of future-ready automation with everyday living',
  
  type: 'website',
  },
  

}

const AboutUs = () => {
  return (
    <div>
        <Navbar />
       <Contact />
      <Footer />
    </div>
  )
}

export default AboutUs
