"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EliteSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const eliteTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse",
            },
        });

        eliteTl
            .from(".elite-tag", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
            .from(
                ".elite-heading",
                { y: 50, opacity: 0, duration: 1.2, ease: "power4.out" },
                "-=0.8"
            )
            .from(
                ".elite-desc",
                { y: 30, opacity: 0, duration: 1, ease: "power3.out" },
                "-=0.8"
            );

        gsap.set(".elite-accordions", { perspective: 2000 });
        eliteTl
            .from(
                ".elite-panel",
                {
                    y: 400,
                    rotationX: 15,
                    opacity: 0,
                    scale: 0.9,
                    duration: 1.5,
                    stagger: { amount: 0.4, from: "center" },
                    ease: "expo.out",
                },
                "-=1.0"
            )
            .to(
                ".elite-flash",
                { opacity: 0.15, duration: 0.8, ease: "power2.out" },
                "-=1.2"
            );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="elite"
            className="relative min-h-screen flex flex-col justify-center py-20 bg-[#fafafa] z-20 overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-[#8719C6]/10 to-transparent opacity-30 pointer-events-none"></div>
            <div className="elite-flash"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="elite-title-group flex flex-col items-center mb-16 text-center">
                    <div className="elite-tag inline-block px-4 py-1 border border-[#8719C6] rounded-full bg-[#8719C6]/5 mb-4">
                        <span className="text-[#8719C6] text-xs font-bold tracking-[0.3em] uppercase">
                            The Vault
                        </span>
                    </div>
                    <h2
                        className="elite-heading text-6xl md:text-8xl font-black text-[#222222] leading-none"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        UNLOCK <span className="gradient-text">ELITE</span>
                    </h2>
                    <p className="elite-desc text-[#4a4a4a] mt-6 max-w-md mx-auto">
                        No cards. No limits. Just pure access.
                    </p>
                </div>

                <div className="elite-accordions h-[50vh] md:h-[60vh]">
                    {/* Panel 1 */}
                    <div className="elite-panel group cursor-hover">
                        <div className="panel-content-collapsed">
                            <div className="w-px h-20 bg-[#8719C6]/30 mb-8"></div>
                            <span
                                className="vertical-text font-bold text-[#4a4a4a] text-xl uppercase tracking-widest group-hover:text-[#8719C6] transition-colors"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Priority
                            </span>
                            <div className="mt-auto mb-8 text-[#4a4a4a]/50 text-2xl">
                                <i className="ri-vip-crown-2-line"></i>
                            </div>
                        </div>
                        <div className="panel-content-expanded">
                            <i className="ri-vip-crown-fill text-6xl text-[#8719C6] mb-6"></i>
                            <h3
                                className="text-4xl font-bold text-[#222222] mb-4"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                First Access
                            </h3>
                            <p className="text-[#4a4a4a] max-w-xs mx-auto">
                                Access fresh cuts only.
                            </p>
                        </div>
                    </div>

                    {/* Panel 2 */}
                    <div className="elite-panel group cursor-hover">
                        <div className="panel-content-collapsed">
                            <div className="w-px h-20 bg-[#8719C6]/30 mb-8"></div>
                            <span
                                className="vertical-text font-bold text-[#4a4a4a] text-xl uppercase tracking-widest group-hover:text-[#8719C6] transition-colors"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Delivery
                            </span>
                            <div className="mt-auto mb-8 text-[#4a4a4a]/50 text-2xl">
                                <i className="ri-rocket-line"></i>
                            </div>
                        </div>
                        <div className="panel-content-expanded">
                            <i className="ri-speed-line text-6xl text-[#8719C6] mb-6"></i>
                            <h3
                                className="text-4xl font-bold text-[#222222] mb-4"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Lightning Speed
                            </h3>
                            <p className="text-[#4a4a4a] max-w-xs mx-auto">
                                30 min & <span className="text-[#8719C6]">Free</span> delivery.
                            </p>
                        </div>
                    </div>

                    {/* Panel 3 */}
                    <div className="elite-panel group cursor-hover">
                        <div className="panel-content-collapsed">
                            <div className="w-px h-20 bg-[#8719C6]/30 mb-8"></div>
                            <span
                                className="vertical-text font-bold text-[#4a4a4a] text-xl uppercase tracking-widest group-hover:text-[#8719C6] transition-colors"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Savings
                            </span>
                            <div className="mt-auto mb-8 text-[#4a4a4a]/50 text-2xl">
                                <i className="ri-wallet-3-line"></i>
                            </div>
                        </div>
                        <div className="panel-content-expanded">
                            <i className="ri-percent-line text-6xl text-[#8719C6] mb-6"></i>
                            <h3
                                className="text-4xl font-bold text-[#222222] mb-4"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Flat Discount Offers
                            </h3>
                            <p className="text-[#4a4a4a] max-w-xs mx-auto">
                                Automatic discount on orders.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button
                        className="px-12 py-4 border border-[#8719C6] text-[#8719C6] hover:bg-[#8719C6] hover:text-white font-bold uppercase tracking-widest transition-all duration-300 cursor-hover"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Join The Club
                    </button>
                </div>
            </div>
        </section>
    );
}
