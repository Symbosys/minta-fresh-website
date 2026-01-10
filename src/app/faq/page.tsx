import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "FAQ | Minta Fresh",
    description: "Frequently asked questions about Minta Fresh sourcing, quality, and delivery.",
};

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-[#f9eae9]">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Help Center
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Everything you need to know about our sourcing, quality, and delivery.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 py-16 -mt-8">
                <div
                    className="container mx-auto max-w-3xl fade-in"
                    style={{ animationDelay: "0.2s" }}
                >
                    {/* Category: Sourcing & Quality */}
                    <div className="mb-12">
                        <h2
                            className="text-2xl font-bold text-[#8719C6] mb-6 border-b border-[#f9eae9] pb-2"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Sourcing & Quality
                        </h2>

                        <details>
                            <summary>Why do you say that your products are chemical-free?</summary>
                            <div className="faq-content">
                                Our core mission is to provide chemical-free, unadulterated food to consumers. We go directly to the fishermen or farmers without any middlemen and buy the freshest food straight from the source. We use modern, scientific transportation and packaging processes to maintain the required temperature using only natural ice as a preservative.
                            </div>
                        </details>

                        <details>
                            <summary>Are there really chemicals used in fish available locally?</summary>
                            <div className="faq-content">
                                Unfortunately, yes. We have observed that a large percentage of fish available in the local market has Ammonia, and a smaller percentage contains Formalin. We strive to offer a chemical-free alternative.
                            </div>
                        </details>

                        <details>
                            <summary>How can you confidently say that your meats do not have hormones?</summary>
                            <div className="faq-content">
                                We prioritize health over profit margins. We ensure no growth promoters like hormones or antibiotics are used. This often means our birds are smaller (1-1.3 kg after cleaning) compared to market vendors, but this results in more tender and tastier meat.
                            </div>
                        </details>

                        <details>
                            <summary>What about antibiotics in the Chicken?</summary>
                            <div className="faq-content">
                                We source from institutional farmers who are FSSAI/HACCP certified and conduct lab tests on every batch. While antibiotics are sometimes necessary in early stages for health, our farmers follow a strict withdrawal method. This ensures the antibiotic has completely dissipated from the bird&apos;s system well before slaughter, ensuring no residue in your food.
                            </div>
                        </details>

                        <details>
                            <summary>Are all your Chicken Free Range?</summary>
                            <div className="faq-content">
                                No, only the Country Chicken varieties are Free Range birds. The others are reared naturally in large areas to avoid cross-infection but do not qualify as Free Range.
                            </div>
                        </details>
                    </div>

                    {/* Category: Delivery & Freshness */}
                    <div className="mb-12">
                        <h2
                            className="text-2xl font-bold text-[#8719C6] mb-6 border-b border-[#f9eae9] pb-2"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Delivery & Freshness
                        </h2>

                        <details>
                            <summary>How do you manage to deliver it so fresh?</summary>
                            <div className="faq-content">
                                We procure the day&apos;s catch hours after fishermen return to shore. Our processing centers and dedicated logistics network (no third-party couriers) ensure the product moves from source to your doorstep in the fastest time possible.
                            </div>
                        </details>

                        <details>
                            <summary>How fresh is the seafood?</summary>
                            <div className="faq-content">
                                Seafood typically reaches your kitchen within 20 to 35 hours of the catch landing. It is never treated with chemicals like Formalin, Chlorine, or Ammonia, preserving its natural taste and safety.
                            </div>
                        </details>

                        <details>
                            <summary>Why do you charge for delivery service?</summary>
                            <div className="faq-content">
                                We operate on thin margins to provide fresher fish at potentially lower prices than the market. The delivery charge helps us break even on our specialized logistics. As volumes increase, we hope to lower this cost.
                            </div>
                        </details>
                    </div>

                    {/* Category: Payments & Refunds */}
                    <div className="mb-12">
                        <h2
                            className="text-2xl font-bold text-[#8719C6] mb-6 border-b border-[#f9eae9] pb-2"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Payments & Refunds
                        </h2>

                        <details>
                            <summary>What are the payment options supported?</summary>
                            <div className="faq-content">
                                We support both online payments (Credit/Debit Card, Net Banking, UPI, Wallet) and Cash on Delivery. No extra fees are charged for any method.
                            </div>
                        </details>

                        <details>
                            <summary>Is my credit card information safe?</summary>
                            <div className="faq-content">
                                Yes. We do not store credit card details. All transactions are processed through trusted gateways like PhonePe/Razorpay.
                            </div>
                        </details>

                        <details>
                            <summary>I cancelled my order. How will I get my money back?</summary>
                            <div className="faq-content">
                                If you paid online, the amount will be credited back to your source account within 5-7 working days.
                            </div>
                        </details>

                        <details>
                            <summary>What if my transaction fails?</summary>
                            <div className="faq-content">
                                If a transaction fails but money is debited, it will be refunded within 7 working days. You can retry payment on the site or switch to Cash on Delivery.
                            </div>
                        </details>
                    </div>

                    {/* Grievance Redressal */}
                    <div className="bg-[#f9eae9]/50 p-8 rounded-2xl border border-[#f9eae9] text-center mt-12">
                        <h3
                            className="font-bold text-xl text-[#222222] mb-2"
                            style={{ fontFamily: "var(--font-syne), sans-serif" }}
                        >
                            Still have questions?
                        </h3>
                        <p className="text-[#4a4a4a] mb-4">
                            We are here to help you with any grievances or suggestions.
                        </p>
                        <a
                            href="mailto:info@mintafresh.com"
                            className="inline-block px-8 py-3 bg-[#8719C6] text-white font-bold rounded-full hover:bg-[#222222] transition-colors"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
