"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader() {
    const loaderRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsLoading(false),
        });

        tl.to(barRef.current, {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut",
        }).to(loaderRef.current, {
            y: "-100%",
            duration: 1,
            ease: "power4.inOut",
        });
    }, []);

    if (!isLoading) return null;

    return (
        <div ref={loaderRef} className="loader">
            <h1
                className="text-4xl font-bold text-[#8719C6] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
                Minta Fresh
            </h1>
            <div ref={barRef} className="bar"></div>
        </div>
    );
}
