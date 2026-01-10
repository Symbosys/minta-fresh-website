"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function ProductsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".panel") as HTMLElement[];

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3000",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            id="about"
            className="relative bg-[#fafafa] min-h-screen py-24 overflow-hidden z-20"
        >
            <div ref={containerRef} className="pin-container flex h-screen w-[300%]">
                {/* Chicken Panel */}
                <div className="panel w-screen h-full flex flex-col md:flex-row items-center justify-center relative px-8 bg-[#f9eae9] border-r border-white">
                    <div className="md:w-1/2 z-10">
                        <h2
                            className="text-8xl md:text-9xl font-bold text-outline opacity-20 absolute top-10 left-0 -z-10"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            POULTRY
                        </h2>
                        <h3
                            className="text-5xl md:text-7xl font-bold mb-6 text-[#222222] leading-tight"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Tender <span className="text-[#8719C6]">Chicken</span>
                        </h3>
                        <p className="text-[#4a4a4a] text-xl max-w-md mb-8">
                            Antibiotic-free, hormone-free, and ethically raised.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-[#222222]/20 rounded-full text-xs uppercase text-[#222222]">
                                Curry Cut
                            </span>
                            <span className="px-4 py-2 border border-[#222222]/20 rounded-full text-xs uppercase text-[#222222]">
                                Breast
                            </span>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-[50vh] md:h-full flex items-center justify-center">
                        <Image
                            src="/assets/products/chicken.jpeg"
                            alt="Fresh Chicken"
                            width={500}
                            height={400}
                            className="rounded-2xl object-cover w-[80%] h-[60%] rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-[#8719C6]/20 clip-image cursor-hover"
                        />
                    </div>
                </div>

                {/* Seafood Panel */}
                <div className="panel w-screen h-full flex flex-col md:flex-row items-center justify-center relative px-8 bg-white border-r border-white">
                    <div className="md:w-1/2 z-10 md:order-2 md:pl-20">
                        <h2
                            className="text-8xl md:text-9xl font-bold text-outline opacity-20 absolute bottom-10 right-0 -z-10"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            SEAFOOD
                        </h2>
                        <h3
                            className="text-5xl md:text-7xl font-bold mb-6 text-[#222222] leading-tight"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Fresh <span className="text-[#8719C6]">Catch</span>
                        </h3>
                        <p className="text-[#4a4a4a] text-xl max-w-md mb-8">
                            Straight To Delivery. Rohu, Catla, Prawns.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-[#222222]/20 rounded-full text-xs uppercase text-[#222222]">
                                River Fish
                            </span>
                            <span className="px-4 py-2 border border-[#222222]/20 rounded-full text-xs uppercase text-[#222222]">
                                Sea Fish
                            </span>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-[50vh] md:h-full flex items-center justify-center md:order-1">
                        <Image
                            src="/assets/products/fish.jpeg"
                            alt="Fresh Fish"
                            width={500}
                            height={400}
                            className="rounded-2xl object-cover w-[80%] h-[60%] -rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-[#ff9fa3]/20 clip-image cursor-hover"
                        />
                    </div>
                </div>

                {/* Meat Panel */}
                <div className="panel w-screen h-full flex flex-col md:flex-row items-center justify-center relative px-8 bg-[#f9eae9]">
                    <div className="md:w-1/2 z-10">
                        <h2
                            className="text-8xl md:text-9xl font-bold text-outline opacity-20 absolute top-20 left-20 -z-10"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            RED MEAT
                        </h2>
                        <h3
                            className="text-5xl md:text-7xl font-bold mb-6 text-[#222222] leading-tight"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Premium <span className="text-[#8719C6]">Mutton</span>
                        </h3>
                        <p className="text-[#4a4a4a] text-xl max-w-md mb-8">
                            Tender Goat Meat, rich in flavor. Expertly cut.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-[#222222]/20 rounded-full text-xs uppercase text-[#222222]">
                                Biryani Cut
                            </span>
                            <span className="px-4 py-2 border border-[#222222]/20 rounded-full text-xs uppercase text-[#222222]">
                                Chops
                            </span>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-[50vh] md:h-full flex items-center justify-center">
                        <Image
                            src="/assets/products/meat.jpeg"
                            alt="Fresh Mutton"
                            width={500}
                            height={400}
                            className="rounded-2xl object-cover w-[80%] h-[60%] rotate-6 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-[#8719C6]/20 clip-image cursor-hover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
