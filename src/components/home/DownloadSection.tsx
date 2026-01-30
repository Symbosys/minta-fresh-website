"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function DownloadSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Set initial state
        gsap.set(phoneRef.current, {
            rotationY: 45,
            rotationX: 10,
            y: 100,
            opacity: 0,
        });
        gsap.set(".ae-title, .ae-sub, .ae-buttons", { opacity: 0, y: 20 });
        gsap.set(".ae-qr-block", { opacity: 0, y: 20 });

        // Entrance Timeline
        const aestheticTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom bottom",
                toggleActions: "play none none reverse",
            },
        });

        aestheticTl
            .to(phoneRef.current, {
                y: 0,
                opacity: 1,
                rotationY: -15,
                rotationX: 0,
                duration: 2,
                ease: "power3.out",
            })
            .to(
                [".ae-title", ".ae-sub", ".ae-buttons", ".ae-qr-block"],
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                },
                "-=1.5"
            );

        // Ambient floating movement
        gsap.to(phoneRef.current, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Interactive parallax
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;

            gsap.to(phoneRef.current, {
                rotationY: -15 + x * 15,
                rotationX: -y * 15,
                duration: 0.5,
                ease: "power2.out",
            });

            gsap.to(".hp-product-stage", {
                x: x * 30,
                y: y * 30,
                duration: 0.5,
            });

            gsap.to(".hp-ui-layer", {
                x: x * 60,
                y: y * 60,
                duration: 0.5,
            });

            gsap.to(glowRef.current, {
                x: x * 50,
                y: y * 50,
                duration: 2,
            });
        };

        const section = sectionRef.current;
        section?.addEventListener("mousemove", handleMouseMove);

        return () => {
            section?.removeEventListener("mousemove", handleMouseMove);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="download"
            className="relative min-h-screen flex flex-col md:flex-row items-center justify-center py-20 z-30"
        >
            <div ref={glowRef} className="ambient-glow"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-24">
                {/* Text / Minimalist UI (Left) */}
                <div className="md:w-1/3 space-y-12">
                    <div>
                        <h2
                            className="ae-title text-5xl font-bold text-white leading-tight mb-4"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Quick & Fresh <br />
                            <span className="text-minta-accent">Delivery.</span>
                        </h2>
                        <p className="ae-sub text-white/70 leading-relaxed">
                            Order premium cuts with a single tap. Minimal friction, maximum
                            freshness.
                        </p>
                    </div>

                    <div className="ae-buttons space-y-4">
                        <a href="#" className="minimal-btn cursor-hover">
                            <i className="ri-google-play-fill text-2xl"></i>
                            <span>Google Play</span>
                        </a>
                    </div>

                    {/* QR Code Section */}
                    <div className="ae-qr-block flex items-center gap-6 opacity-0 translate-y-4">
                        <div className="relative w-32 h-32 bg-white p-2 rounded-xl overflow-hidden group shadow-[0_0_30px_rgba(135,25,198,0.3)]">
                            <Image
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MintaFreshApp"
                                alt="Scan to Download"
                                width={150}
                                height={150}
                                className="w-full h-full object-cover"
                            />
                            <div className="scan-anim"></div>
                        </div>
                        <div className="text-left">
                            <p
                                className="text-white font-bold text-lg tracking-wider"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                SCAN TO
                                <br />
                                INSTALL
                            </p>
                            <p className="text-[#ff9fa3] text-xs mt-1 uppercase tracking-widest">
                                Direct Links
                            </p>
                        </div>
                    </div>
                </div>

                {/* Phone Mockup (Right) */}
                <div className="md:w-1/3 flex justify-center aesthetic-phone-wrapper">
                    <div ref={phoneRef} className="hyper-phone" id="ae-phone">
                        <div className="hp-glow"></div>
                        <div className="hp-pipe left"></div>
                        <div className="hp-pipe right"></div>

                        <div className="hp-screen">
                            <div className="hp-bg-grid"></div>

                            <div className="hp-product-stage">
                                <div className="hp-steak-holo">
                                    <Image
                                        src="/assets/phone/phone-simulation.jpeg"
                                        alt="Premium Cut"
                                        width={200}
                                        height={200}
                                        className="hp-meat-img"
                                    />
                                    <div className="hp-scan-laser"></div>
                                </div>
                            </div>

                            <div className="hp-ui-layer" style={{ transform: "translateZ(40px)" }}>
                                {/* Top Bar */}
                                <div className="flex justify-between items-center p-6 w-full">
                                    <div className="text-[10px] uppercase tracking-widest text-[#8719C6] font-bold animate-pulse">
                                        ● Live Tracking
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-[#222222]/20 flex items-center justify-center">
                                        <i className="ri-user-line text-[#222222]"></i>
                                    </div>
                                </div>

                                {/* Floating Card 1 */}
                                <div className="absolute top-24 left-4 right-4 bg-white/80 backdrop-blur-md border border-[#f9eae9] p-4 rounded-xl flex gap-4 items-center shadow-lg">
                                    <div className="w-12 h-12 bg-[#8719C6] rounded-lg flex items-center justify-center text-white text-xl">
                                        <i className="ri-fire-fill"></i>
                                    </div>
                                    <div>
                                        <div
                                            className="text-[#222222] font-bold"
                                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                                        >
                                            Fresh & Premium
                                        </div>
                                        <div className="text-xs text-[#4a4a4a]">
                                            Sourced: 30 mins ago
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Card 2 */}
                                <div className="absolute bottom-24 left-4 right-4 bg-white/80 backdrop-blur-md border border-[#f9eae9] p-4 rounded-xl shadow-lg">
                                    <div className="flex justify-between text-xs text-[#4a4a4a] mb-2 uppercase tracking-wider">
                                        <span>Freshness Score</span>
                                        <span>99.8%</span>
                                    </div>
                                    <div className="w-full h-1 bg-[#f9eae9] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#8719C6] w-[99%] shadow-[0_0_10px_#8719C6]"></div>
                                    </div>
                                </div>

                                {/* Main Button */}
                                <div className="absolute bottom-6 left-6 right-6 h-12 bg-[#8719C6] text-white font-bold uppercase tracking-widest flex items-center justify-center rounded-full hover:scale-105 transition-transform cursor-pointer shadow-lg">
                                    Checkout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
