import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About Us | Minta Fresh",
    description: "Learn about Minta Fresh – fresh raw chicken, fish & goat meat delivered to your doorstep with hygiene, transparency and care.",
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-[#f9eae9]">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        About Minta Fresh
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        About Us
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Simplifying access to quality raw meat and seafood with transparency, hygiene, and care.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 py-16 -mt-8">
                <div
                    className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-[#f9eae9] fade-in"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="prose max-w-none">
                        <p className="text-sm text-[#4a4a4a]/60 uppercase tracking-widest mb-8">
                            Last Updated: 05/02/2026
                        </p>

                        <p>
                            Minta Fresh is a brand operated by Minta Club Private Limited, focused on providing convenient and reliable doorstep delivery of raw chicken, fish, and goat meat to customers.
                        </p>

                        <p>
                            We partner with verified local suppliers and processing units to ensure that all products are hygienically handled, carefully packed, and delivered as per food safety standards. Our platform enables customers to browse products, place orders, and receive fresh raw meat at their preferred location.
                        </p>

                        <p>
                            We operate an online food ordering and delivery platform.
                        </p>

                        <p>
                            Minta Fresh is a technology-enabled service that facilitates the sale and delivery of food products only. The platform does not provide financial services, gaming, betting, reward-based earnings, or investment products of any kind.
                        </p>

                        <p>
                            Payments for orders are processed securely through third-party payment gateways. Any in-app wallet, where applicable, is used solely for internal order adjustments or refunds and is not a withdrawable or interest-bearing product.
                        </p>

                        <p>
                            The app includes payment functionality for food orders only. Any wallet shown is used solely for internal order adjustments or refunds and is not withdrawable.
                        </p>

                        <p>
                            Payouts to partners are backend operational settlements and are not user-facing features.
                        </p>

                        <p>
                            Our mission is to simplify access to quality raw meat and seafood while maintaining transparency, hygiene, and compliance with applicable laws and platform policies.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}