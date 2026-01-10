"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (dotRef.current) {
                dotRef.current.style.left = `${posX}px`;
                dotRef.current.style.top = `${posY}px`;
            }

            if (outlineRef.current) {
                gsap.to(outlineRef.current, {
                    x: posX,
                    y: posY,
                    duration: 0.15,
                    ease: "power2.out",
                });
            }
        };

        const handleMouseEnter = () => {
            if (outlineRef.current) {
                gsap.to(outlineRef.current, {
                    width: 80,
                    height: 80,
                    backgroundColor: "rgba(135, 25, 198, 0.1)",
                    borderColor: "transparent",
                });
            }
        };

        const handleMouseLeave = () => {
            if (outlineRef.current) {
                gsap.to(outlineRef.current, {
                    width: 40,
                    height: 40,
                    backgroundColor: "transparent",
                    borderColor: "rgba(135, 25, 198, 0.3)",
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        const hoverables = document.querySelectorAll(".cursor-hover, a, button");
        hoverables.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            hoverables.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    // Hide on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) {
        return null;
    }

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block"></div>
            <div ref={outlineRef} className="cursor-outline hidden md:block"></div>
        </>
    );
}
