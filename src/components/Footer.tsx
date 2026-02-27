import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white py-5 border-t border-minta-secondary text-center md:text-left">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <Image
                        src="/assets/logo/minta-logo.jpeg"
                        alt="MINTA FRESH Logo"
                        width={300} // Adjust width as needed
                        height={10} // Adjust height as needed
                        className="object-contain"
                        priority // Ensures the logo loads immediately
                    />
                    <p className="text-minta-text-sec text-sm mt-2">
                        Minta Fresh is a Unit of Minta Club Pvt. Ltd
                    </p>
                    <p className="text-minta-text-sec text-sm mt-2">
                        &copy; 2025 Minta Fresh. All rights reserved.
                    </p>
                </div>

                <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-minta-text-sec justify-center sm:justify-start text-center sm:text-left">
                    <Link
                        href="/terms-and-conditions"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        Terms & Conditions
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/Business-&-Payment"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        {/* Bussiness & Payment Compliance Declaration */}
                        Bussiness & Payment
                    </Link>
                    <Link
                        href="/partner-vendor-terms-&-condition"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        {/* Partner & Vendor Terms & Conditions */}
                        Partner & Vendor
                    </Link>
                    <Link
                        href="/corporate"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        CSR Policy
                    </Link>
                    <Link
                        href="/contact-us"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/faq"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/refund-policy"
                        className="hover:text-minta-primary transition-colors block sm:inline-block"
                    >
                        Refund Policy
                    </Link>
                </nav>

                <div className="flex gap-6 justify-center md:justify-end">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/mintafresh_/"
                        className="text-minta-text-sec hover:text-minta-primary transition-colors text-2xl"
                    >
                        <i className="ri-instagram-line"></i>
                    </a>
                    <a
                        href="#"
                        className="text-minta-text-sec hover:text-minta-primary transition-colors text-2xl"
                    >
                        <i className="ri-twitter-x-line"></i>
                    </a>
                    <a
                        href="#"
                        className="text-minta-text-sec hover:text-minta-primary transition-colors text-2xl"
                    >
                        <i className="ri-facebook-fill"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
