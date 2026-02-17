"use client";

import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import DownloadSection from "@/components/home/DownloadSection";
import EliteSection from "@/components/home/EliteSection";
import HeroSection from "@/components/home/HeroSection";
import LiveTrackingSection from "@/components/home/LiveTrackingSection";
import Marquee from "@/components/home/Marquee";
import ProductsSection from "@/components/home/ProductsSection";

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


        {/* Vendor Section */}
        {/* <VendorSection /> */}

        {/* Live Tracking Section */}
        <LiveTrackingSection />

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
