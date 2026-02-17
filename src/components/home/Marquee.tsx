"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (marqueeRef.current) {
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });
        }
    }, []);

    return (
        <div className="w-full bg-minta-primary py-4 overflow-hidden flex whitespace-nowrap z-30 relative border-y border-white">
            <div
                ref={marqueeRef}
                className="flex gap-12 text-4xl font-bold text-white uppercase items-center"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
                <span>No Antibiotics</span>
                <i className="ri-asterisk"></i>
                <span>30 minutes delivery</span>
                <i className="ri-asterisk"></i>
                <span>Fresh and Quick</span>
                <i className="ri-asterisk"></i>
                <span>Always Minta Fresh</span>
                <i className="ri-asterisk"></i>
                <span>No Antibiotics</span>
                <i className="ri-asterisk"></i>
                <span>30 - 35 minutes delivery</span>
                <i className="ri-asterisk"></i>
                <span>Fresh and Quick</span>
                <i className="ri-asterisk"></i>
                <span>Always Minta Fresh</span>
                <i className="ri-asterisk"></i>
            </div>
        </div>
    );
}
