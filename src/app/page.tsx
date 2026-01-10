"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import ProductsSection from "@/components/home/ProductsSection";
import EliteSection from "@/components/home/EliteSection";
import DownloadSection from "@/components/home/DownloadSection";

export default function Home() {
  return (
    <>
      {/* Noise Texture */}
      <div className="noise"></div>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Preloader */}
      <Loader />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div id="main-content">
        {/* Marquee */}
        <Marquee />

        {/* Products Section */}
        <ProductsSection />

        {/* Elite Membership Section */}
        <EliteSection />

        {/* Download Section */}
        <DownloadSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
