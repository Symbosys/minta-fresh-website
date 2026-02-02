import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-[#f9eae9] text-center md:text-left mt-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2
                        className="font-bold text-3xl text-[#8719C6]"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        MINTA FRESH
                    </h2>
                    <p className="text-[#4a4a4a] text-sm mt-2">
                        Minta Fresh is a Unit of Minta Club Pvt. Ltd
                    </p>
                    <p className="text-[#4a4a4a] text-sm mt-2">
                        &copy; 2025 Minta Fresh. All rights reserved.
                    </p>
                </div>

                <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-[#4a4a4a] justify-center sm:justify-start text-center sm:text-left">
                    <Link
                        href="/terms-and-conditions"
                        className="hover:text-[#8719C6] transition-colors block sm:inline-block"
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="hover:text-[#8719C6] transition-colors block sm:inline-block"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/corporate"
                        className="hover:text-[#8719C6] transition-colors block sm:inline-block"
                    >
                        CSR Policy
                    </Link>
                    <Link
                        href="/contact-us"
                        className="hover:text-[#8719C6] transition-colors block sm:inline-block"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/faq"
                        className="hover:text-[#8719C6] transition-colors block sm:inline-block"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/refund-policy"
                        className="hover:text-[#8719C6] transition-colors block sm:inline-block"
                    >
                        Refund Policy
                    </Link>
                </nav>

                <div className="flex gap-6 justify-center md:justify-end">
                    <a
                        href="#"
                        className="text-[#4a4a4a] hover:text-[#8719C6] transition-colors text-2xl"
                    >
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a
                        href="#"
                        className="text-[#4a4a4a] hover:text-[#8719C6] transition-colors text-2xl"
                    >
                        <i className="ri-twitter-x-line"></i>
                    </a>
                    <a
                        href="#"
                        className="text-[#4a4a4a] hover:text-[#8719C6] transition-colors text-2xl"
                    >
                        <i className="ri-facebook-fill"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
