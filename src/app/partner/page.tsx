"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useState, useEffect } from "react";

import Link from "next/link";
import { getVendorProfile, logout } from "@/action/vendor";
import Image from "next/image";

export default function PartnerPage() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [vendor, setVendor] = useState<any>(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const res = await getVendorProfile();
            if (res.success && res.data) {
                setVendor(res.data);
            }
        };
        checkSession();
    }, []);

    const handleLogout = async () => {
        await logout();
        setVendor(null);
        setShowDetails(false);
    };

    return (
        <>
            <Navbar />

            <main className="bg-white">
                {/* Hero Section with Dark Background */}
                {/* Hero Section with Image Background */}
                {/* Removed overflow-hidden to prevent cutting the floating card */}
                <section className="relative flex flex-col items-center justify-start pt-20 pb-24 md:pb-48 md:min-h-[550px] bg-[#1c1c1c]">
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                            src="/assets/website-partner-with-us.png"
                            alt="Partner Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="text-center px-6 relative z-10 w-full flex flex-col items-center">
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Partner with Minta Fresh and<br />grow your business
                        </h1>

                        <p className="text-white/60 text-sm mb-6">
                            Only valid for new partners in your city
                        </p>

                        {/* Session Logic */}
                        {vendor ? (
                            !showDetails ? (
                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="bg-minta-primary hover:bg-[#6d14a0] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm mb-8 md:mb-0"
                                >
                                    View Application
                                </button>
                            ) : (
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-left min-w-[300px] animate-in fade-in zoom-in duration-300">
                                    <p className="text-white/80 text-sm mb-1">Welcome back,</p>
                                    <p className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                        <i className="ri-user-smile-line"></i> {vendor.ownerName || vendor.mobile}
                                    </p>

                                    <div className="space-y-3">
                                        <div className="bg-black/20 p-3 rounded-lg flex items-center justify-between">
                                            <span className="text-white/60 text-xs">Mobile Number</span>
                                            <span className="text-white font-mono">{vendor.mobile}</span>
                                        </div>

                                        <Link
                                            href="/partner/onboarding"
                                            className="block w-full text-center bg-minta-primary hover:bg-[#6d14a0] text-white font-bold py-3 rounded-lg transition-all"
                                        >
                                            Continue Application <i className="ri-arrow-right-line ml-1"></i>
                                        </Link>

                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-center bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition-all text-sm"
                                        >
                                            Start New Registration
                                        </button>
                                    </div>
                                </div>
                            )
                        ) : (
                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                className="bg-minta-primary hover:bg-[#6d14a0] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm mb-8 md:mb-0"
                            >
                                Register your shop
                            </button>
                        )}
                    </div>

                    {/* White Card - Documents Section - Desktop Only (Floating) */}
                    {/* Increased z-index to z-30 to ensure it stays above the next section */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[90%] max-w-4xl bg-white rounded-xl shadow-2xl p-6 md:p-8 z-30 border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <h2 className="text-lg font-bold text-[#1c1c1c] mb-1">
                                    Get started: It only takes 10 minutes
                                </h2>
                                <p className="text-gray-500 text-sm mb-5">
                                    Please keep these documents and details ready for a smooth sign-up
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center">
                                            <i className="ri-check-line text-minta-primary text-xs font-bold"></i>
                                        </div>
                                        <span className="text-sm text-[#1c1c1c] font-medium">PAN card</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center">
                                            <i className="ri-check-line text-minta-primary text-xs font-bold"></i>
                                        </div>
                                        <span className="text-sm text-[#1c1c1c] font-medium">GST number, if applicable</span>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center mt-0.5">
                                            <i className="ri-check-line text-minta-primary text-xs font-bold"></i>
                                        </div>
                                        <div>
                                            <span className="text-sm text-[#1c1c1c] font-medium">FSSAI license</span>
                                            <p className="text-[11px] text-gray-400 leading-tight mt-0.5">
                                                No license? <a href="https://foscos.fssai.gov.in/" target="_blank" rel="noopener noreferrer" className="text-minta-primary hover:underline font-semibold">Apply here.</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center mt-0.5">
                                            <i className="ri-check-line text-minta-primary text-xs font-bold"></i>
                                        </div>
                                        <div>
                                            <span className="text-sm text-[#1c1c1c] font-medium">Menu and product images</span>
                                            <p className="text-[11px] text-gray-400 mt-0.5">
                                                <a href="#" className="text-minta-primary hover:underline">Refer here</a> for examples.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center">
                                            <i className="ri-check-line text-minta-primary text-xs font-bold"></i>
                                        </div>
                                        <span className="text-sm text-[#1c1c1c] font-medium">Bank account details</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Mobile Documents Card - Separate Section */}
                <section className="md:hidden bg-white px-4 py-6">
                    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                        <h2 className="text-lg font-bold text-[#1c1c1c] mb-1">
                            Get started: It only takes 10 minutes
                        </h2>
                        <p className="text-gray-500 text-sm mb-5">
                            Please keep these documents and details ready for a smooth sign-up
                        </p>

                        <div className="space-y-3">
                            {/* PAN Card */}
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center">
                                    <i className="ri-check-line text-minta-primary text-xs"></i>
                                </div>
                                <span className="text-sm text-[#1c1c1c]">PAN card</span>
                            </div>

                            {/* GST */}
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center">
                                    <i className="ri-check-line text-minta-primary text-xs"></i>
                                </div>
                                <span className="text-sm text-[#1c1c1c]">GST number, if applicable</span>
                            </div>

                            {/* FSSAI */}
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center mt-0.5">
                                    <i className="ri-check-line text-minta-primary text-xs"></i>
                                </div>
                                <div>
                                    <span className="text-sm text-[#1c1c1c]">FSSAI license</span>
                                    <p className="text-xs text-gray-400">
                                        Don&apos;t have a FSSAI license? <a href="https://foscos.fssai.gov.in/" target="_blank" rel="noopener noreferrer" className="text-minta-primary hover:underline">Apply here.</a>
                                    </p>
                                </div>
                            </div>

                            {/* Menu Images */}
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center mt-0.5">
                                    <i className="ri-check-line text-minta-primary text-xs"></i>
                                </div>
                                <div>
                                    <span className="text-sm text-[#1c1c1c]">Menu and product images</span>
                                    <p className="text-xs text-gray-400">
                                        What is product image? <a href="#" className="text-minta-primary hover:underline">Refer here.</a>
                                    </p>
                                </div>
                            </div>

                            {/* Bank Details */}
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-minta-primary/10 flex items-center justify-center">
                                    <i className="ri-check-line text-minta-primary text-xs"></i>
                                </div>
                                <span className="text-sm text-[#1c1c1c]">Bank account details</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Partner Section */}
                <section className="pt-44 md:pt-40 pb-16 md:pb-20 bg-white">
                    <div className="container mx-auto px-6">
                        {/* Section Title with Lines */}
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
                            <h2
                                className="text-xl md:text-2xl font-bold text-[#1c1c1c] text-center whitespace-nowrap"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Why should you partner with Minta Fresh?
                            </h2>
                            <div className="hidden md:block flex-1 h-px bg-gray-200"></div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {/* Attract Customers */}
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                                    <i className="ri-group-line text-minta-primary text-4xl"></i>
                                </div>
                                <h3 className="font-bold text-[#1c1c1c] mb-2">
                                    Attract new<br />customers
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Reach thousands of people ordering on Minta Fresh.
                                </p>
                            </div>

                            {/* Doorstep Delivery */}
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                                    <i className="ri-box-3-line text-minta-primary text-4xl"></i>
                                </div>
                                <h3 className="font-bold text-[#1c1c1c] mb-2">
                                    Doorstep delivery<br />convenience
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    Easily get your orders delivered through our trained delivery partners.
                                </p>
                            </div>

                            {/* Onboarding Support */}
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                                    <i className="ri-mail-line text-minta-primary text-4xl"></i>
                                </div>
                                <h3 className="font-bold text-[#1c1c1c] mb-2">
                                    Onboarding support
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    For any support, email us at <a href="mailto:mintaafresh@gmail.com" className="text-minta-primary hover:underline">mintaafresh@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-lg font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                            Ready to get started?
                        </h3>
                        <button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="inline-block bg-minta-primary hover:bg-[#6d14a0] text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm"
                        >
                            Register your shop
                        </button>
                    </div>
                </section>
            </main>

            <Footer />

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
            />
        </>
    );
}
