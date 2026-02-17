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
            className="relative bg-minta-bg min-h-screen  overflow-hidden z-20"
        >
            <div ref={containerRef} className="pin-container flex h-screen w-[300%]">
                {/* Chicken Panel */}
                <div className="panel w-screen h-full flex flex-col md:flex-row items-center justify-center relative px-8 bg-minta-secondary border-r border-white">
                    <div className="md:w-1/2 z-10">
                        <h2
                            className="text-8xl md:text-9xl font-bold text-outline opacity-20 absolute top-10 left-0 -z-10"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            POULTRY
                        </h2>
                        <h3
                            className="text-5xl md:text-7xl font-bold mb-6 text-minta-text leading-tight"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Tender <span className="text-minta-primary">Chicken</span>
                        </h3>
                        <p className="text-minta-text-sec text-xl max-w-md mb-8">
                            Antibiotic-free, hormone-free, and ethically raised.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-minta-text/20 rounded-full text-xs uppercase text-minta-text">
                                Curry Cut
                            </span>
                            <span className="px-4 py-2 border border-minta-text/20 rounded-full text-xs uppercase text-minta-text">
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
                            className="rounded-2xl object-cover w-[80%] h-[60%] rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-minta-primary/20 clip-image cursor-hover"
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
                            className="text-5xl md:text-7xl font-bold mb-6 text-minta-text leading-tight"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Fresh <span className="text-minta-primary">Catch</span>
                        </h3>
                        <p className="text-minta-text-sec text-xl max-w-md mb-8">
                            Straight To Delivery. Rohu, Catla, Prawns.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-minta-text/20 rounded-full text-xs uppercase text-minta-text">
                                River Fish
                            </span>
                            <span className="px-4 py-2 border border-minta-text/20 rounded-full text-xs uppercase text-minta-text">
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
                            className="rounded-2xl object-cover w-[80%] h-[60%] -rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-minta-highlight/20 clip-image cursor-hover"
                        />
                    </div>
                </div>

                {/* Meat Panel */}
                <div className="panel w-screen h-full flex flex-col md:flex-row items-center justify-center relative px-8 bg-minta-secondary">
                    <div className="md:w-1/2 z-10">
                        <h2
                            className="text-8xl md:text-9xl font-bold text-outline opacity-20 absolute top-20 left-20 -z-10"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            RED MEAT
                        </h2>
                        <h3
                            className="text-5xl md:text-7xl font-bold mb-6 text-minta-text leading-tight"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Premium <span className="text-minta-primary">Mutton</span>
                        </h3>
                        <p className="text-minta-text-sec text-xl max-w-md mb-8">
                            Tender Goat Meat, rich in flavor. Expertly cut.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-minta-text/20 rounded-full text-xs uppercase text-minta-text">
                                Biryani Cut
                            </span>
                            <span className="px-4 py-2 border border-minta-text/20 rounded-full text-xs uppercase text-minta-text">
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
                            className="rounded-2xl object-cover w-[80%] h-[60%] rotate-6 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-minta-primary/20 clip-image cursor-hover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
