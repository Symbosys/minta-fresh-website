"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function VendorSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            },
        });

        tl.from(contentRef.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }).from(
            visualRef.current,
            {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.8"
        );

        // simple float animation for visual
        gsap.to(visualRef.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="vendor"
            className="relative min-h-[80vh] flex items-center justify-center py-20 bg-[#f8f8f8] overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-minta-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Content Side */}
                <div ref={contentRef} className="md:w-1/2 space-y-8">
                    <div className="inline-block px-4 py-1 border border-minta-primary rounded-full bg-minta-primary/5 mb-2">
                        <span className="text-minta-primary text-xs font-bold tracking-[0.2em] uppercase">
                            Partner with Us
                        </span>
                    </div>
                    <h2
                        className="text-5xl md:text-6xl font-bold text-minta-text leading-tight"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Grow Your Business <br />
                        <span className="text-minta-primary">With Minta Fresh.</span>
                    </h2>
                    <p className="text-minta-text-sec text-lg leading-relaxed max-w-lg">
                        Join our network of premium vendors. Access our advanced vendor panel to manage inventory, track orders, and reach more customers effortlessly.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="https://vendor.mintafresh.com"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-minta-primary text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:bg-[#7010a8] transition-all duration-300 shadow-xl cursor-hover"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            <span>Access Vendor Panel</span>
                            <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>
                </div>

                {/* Visual Side - Abstract Dashboard Representation */}
                <div ref={visualRef} className="md:w-1/2 flex justify-center perspective-1000">
                    <div className="relative w-full max-w-md aspect-video bg-white rounded-xl shadow-2xl border border-[#efe6f5] transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 p-6 flex flex-col gap-4 group">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-xs font-bold text-minta-primary uppercase tracking-wider">Vendor Portal</div>
                        </div>

                        {/* Content Mockup */}
                        <div className="flex-1 flex gap-4">
                            {/* Sidebar */}
                            <div className="w-1/4 h-full bg-gray-50 rounded-lg flex flex-col gap-2 p-2">
                                <div className="w-full h-8 bg-minta-primary/10 rounded mb-2"></div>
                                <div className="w-full h-2 bg-gray-200 rounded"></div>
                                <div className="w-full h-2 bg-gray-200 rounded"></div>
                                <div className="w-full h-2 bg-gray-200 rounded"></div>
                                <div className="w-full h-2 bg-gray-200 rounded"></div>
                            </div>
                            {/* Main Graph Area */}
                            <div className="flex-1 h-full bg-gray-50 rounded-lg p-3 relative overflow-hidden group-hover:bg-gray-100 transition-colors duration-500">
                                <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-between px-2 gap-1 opacity-50">
                                    <div className="w-[12%] h-[40%] bg-minta-primary rounded-t transition-all duration-500 group-hover:h-[50%]"></div>
                                    <div className="w-[12%] h-[70%] bg-minta-primary rounded-t transition-all duration-500 group-hover:h-[80%]"></div>
                                    <div className="w-[12%] h-[50%] bg-minta-primary rounded-t transition-all duration-500 group-hover:h-[40%]"></div>
                                    <div className="w-[12%] h-[90%] bg-minta-primary rounded-t transition-all duration-500 group-hover:h-[95%]"></div>
                                    <div className="w-[12%] h-[60%] bg-minta-primary rounded-t transition-all duration-500 group-hover:h-[70%]"></div>
                                    <div className="w-[12%] h-[80%] bg-minta-primary rounded-t transition-all duration-500 group-hover:h-[85%]"></div>
                                </div>
                                {/* Floating Stats */}
                                <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-sm border border-gray-100 z-10">
                                    <div className="text-[10px] text-gray-400">Total Revenue</div>
                                    <div className="text-sm font-bold text-[#222]">₹ 1,24,500</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-10 right-10 w-20 h-20 bg-minta-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -z-10 bottom-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                </div>

            </div>
        </section>
    );
}
