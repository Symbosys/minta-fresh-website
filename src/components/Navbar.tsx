"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <nav
            className={`${isHomePage ? "fixed" : "sticky"
                } top-0 w-full z-60 px-6 py-6 ${isHomePage
                    ? "bg-transparent"
                    : "bg-white/90 backdrop-blur-md border-b border-minta-secondary shadow-sm"
                } flex justify-between items-center text-minta-text`}
        >
            <Link
                href="/"
                className="text-2xl font-bold tracking-tighter cursor-pointer"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
                MINTA FRESH<span className="text-minta-primary">.</span>
            </Link>

            {isHomePage && (
                <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
                    <a
                        href="#about"
                        className="hover:text-minta-primary transition-colors cursor-pointer"
                    >
                        The Cut
                    </a>
                    <a
                        href="#elite"
                        className="hover:text-minta-primary transition-colors cursor-pointer"
                    >
                        Elite
                    </a>
                    <a
                        href="#download"
                        className="hover:text-minta-primary transition-colors cursor-pointer"
                    >
                        Get App
                    </a>
                </div>
            )}

            <button className="border border-minta-text/20 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-minta-primary hover:text-white hover:border-transparent transition-all duration-300">
                Download App
            </button>
        </nav>
    );
}
