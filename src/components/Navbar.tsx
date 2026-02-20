"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const isPartnerPage = pathname === "/partner";
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`${isHomePage ? "fixed" : "sticky"
                    } top-0 w-full z-50 px-6 py-4 ${isHomePage
                        ? "bg-black"
                        : "bg-black backdrop-blur-md border-b border-white/10 shadow-sm"
                    } flex justify-between items-center text-white`}
            >
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tighter cursor-pointer z-50"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    onClick={closeMenu}
                >
                    MINTA FRESH<span className="text-minta-primary">.</span>
                </Link>

                {/* Desktop Navigation */}
                {isHomePage && (
                    <div className="hidden lg:flex gap-8 text-sm uppercase tracking-widest font-medium">
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
                            href="/download"
                            className="hover:text-minta-primary transition-colors cursor-pointer"
                        >
                            Get App
                        </a>
                    </div>
                )}

                {/* Desktop Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/about-us"
                        className="text-sm uppercase tracking-widest font-medium hover:text-minta-primary transition-colors"
                    >
                        About Us
                    </Link>
                    {isPartnerPage ? (
                        <a
                            target="_blank"
                            href="https://vendor.mintafresh.com/"
                            className="text-sm uppercase tracking-widest font-medium hover:text-minta-primary transition-colors"
                        >
                            Owner Panel
                        </a>
                    ) : (
                        <Link
                            href="/partner"
                            className="text-sm uppercase tracking-widest font-medium hover:text-minta-primary transition-colors"
                        >
                            Partner with us
                        </Link>
                    )}
                    <Link
                        href="/download"
                        className="border border-white/20 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-minta-primary hover:text-white hover:border-transparent transition-all duration-300"
                    >
                        Download App
                    </Link>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={closeMenu}
            ></div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-[#1a1a1a] z-40 md:hidden transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="pt-24 px-6">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-1">
                        {isHomePage && (
                            <>
                                <a
                                    href="#about"
                                    onClick={closeMenu}
                                    className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                                >
                                    The Cut
                                </a>
                                <a
                                    href="#elite"
                                    onClick={closeMenu}
                                    className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                                >
                                    Elite
                                </a>
                                <a
                                    href="/download"
                                    onClick={closeMenu}
                                    className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                                >
                                    Get App
                                </a>
                            </>
                        )}

                        <Link
                            href="/about-us"
                            onClick={closeMenu}
                            className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                        >
                            About Us
                        </Link>

                        {isPartnerPage ? (
                            <a
                                href="https://vendor.mintafresh.com/"
                                onClick={closeMenu}
                                className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                            >
                                Owner Panel
                            </a>
                        ) : (
                            <Link
                                href="/partner"
                                onClick={closeMenu}
                                className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                            >
                                Partner with us
                            </Link>
                        )}

                        <Link
                            href="/contact-us"
                            onClick={closeMenu}
                            className="py-4 text-white/80 hover:text-minta-primary transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile CTA Button */}
                    <div className="mt-8">
                        <Link
                            href="/download"
                            onClick={closeMenu}
                            className="block w-full text-center bg-minta-primary text-white py-3 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-[#6d14a0] transition-colors"
                        >
                            Download App
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://www.instagram.com/mintafresh_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-minta-primary hover:text-white transition-all"
                        >
                            <i className="ri-instagram-line text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}