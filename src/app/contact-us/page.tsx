import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us | Minta Fresh",
    description: "Get in touch with Minta Fresh. Reach out to our team for any queries or support.",
};

export default function ContactUsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#fafafa]">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-[#f9eae9]">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Get In Touch
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Contact Us
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        We&apos;d love to hear from you. Reach out to our team for any queries or support.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 py-16 -mt-8 flex-grow">
                <div
                    className="container mx-auto max-w-4xl fade-in"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Headquarter Card */}
                        <div className="contact-card bg-white p-10 rounded-2xl border border-[#f9eae9] shadow-lg flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#f9eae9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#8719C6] transition-colors duration-300">
                                <i className="ri-building-2-line text-2xl text-[#8719C6] group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <h2
                                className="text-2xl font-bold text-[#222222] mb-2"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Headquarter
                            </h2>
                            <p className="text-[#8719C6] font-bold mb-4">
                                Minta Club Private Limited
                            </p>
                            <p className="text-[#4a4a4a] leading-relaxed">
                                HI-76, Harmu Colony,
                                <br />
                                Ranchi - 834002
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="contact-card bg-white p-10 rounded-2xl border border-[#f9eae9] shadow-lg flex flex-col items-center text-center group">
                            <div className="w-16 h-16 bg-[#f9eae9] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#8719C6] transition-colors duration-300">
                                <i className="ri-mail-send-line text-2xl text-[#8719C6] group-hover:text-white transition-colors duration-300"></i>
                            </div>
                            <h2
                                className="text-2xl font-bold text-[#222222] mb-2"
                                style={{ fontFamily: "var(--font-syne), sans-serif" }}
                            >
                                Email Support
                            </h2>
                            <p className="text-[#4a4a4a] mb-6">
                                Have a question? Drop us a line and we&apos;ll get back to you shortly.
                            </p>
                            <a
                                href="mailto:info@mintaclub.com"
                                className="text-xl font-bold text-[#8719C6] hover:text-[#b58ff0] transition-colors border-b-2 border-[#f9eae9] hover:border-[#8719C6] pb-1"
                            >
                                info@mintaclub.com
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="mt-12 w-full h-64 bg-[#f9eae9]/50 rounded-2xl border border-[#f9eae9] flex items-center justify-center overflow-hidden relative">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.7529650584459!2d85.31144818637802!3d23.357568871043153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5d0fb3d9fc771b%3A0x97d1957c5216c0c2!2sSymbosys%20-%20Software%20Company%20in%20Ranchi!5e0!3m2!1sen!2sin!4v1764234785409!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
