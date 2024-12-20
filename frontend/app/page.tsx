"use client";
import Link from 'next/link'
import { Play } from 'lucide-react'
import Navbar from '../components/Navbar'
import SocialMediaIcons from '../components/SocialMediaIcons'
import ScrollToTop from '../components/ScrollToTop'
import About from '../components/About'
import WhatWeDo from '../components/WhatWeDo'
import Founders from '../components/Founders'
import Gallery from '../components/Gallery'
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-[-53px] left-0 min-w-full min-h-full object-cover z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Bollygrad Studioz</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8">FILM & TELEVISION INSTITUTE</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/learn-more"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full flex items-center justify-center transition duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Link>
            <Link 
              href="/connect"
              className="bg-transparent hover:bg-white hover:text-red-600 text-white font-bold py-2 px-6 rounded-full border-2 border-white transition duration-300"
            >
              Get Connected
            </Link>
          </div>
        </div>
      </section>

      <About />
      <WhatWeDo />
      <Founders />
      <Gallery />

      <SocialMediaIcons />
      <ScrollToTop />

      <Footer />
    </div>
  )
}

