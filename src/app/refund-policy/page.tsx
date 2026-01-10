import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Refund Policy | Minta Fresh",
    description: "Refund policy for Minta Fresh - Our commitment to transparency and fairness in all transactions.",
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-[#f9eae9]">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Customer Service
                    </span>
                    <h1
                        className="text-4xl md:text-5xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Refund Policy
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Our commitment to transparency and fairness in all transactions.
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
                        <h2>Online Payment</h2>
                        <p>
                            Refunds will be processed within 48 hours and will be credited to the customer account within 5-7 working days depending on the issuing bank.
                        </p>

                        <h2>Cash on Delivery</h2>
                        <p>
                            Refunds will be credited to the customer&apos;s account as store credit or wallet and can be used for the subsequent order in the future.
                        </p>

                        <h2>Grievances</h2>
                        <p>Details of the Grievance contact is given below;</p>
                        <div className="bg-[#f9eae9]/50 p-6 rounded-lg border border-[#f9eae9] mt-4">
                            <p className="font-bold text-[#8719C6] text-lg mb-1">Minta Club Private Limited</p>
                            <p>HI-76, Harmu Colony, Ranchi - 834002</p>
                            <p className="mt-2">Email: <a href="mailto:info@mintaclub.com" className="text-[#8719C6] underline">info@mintaclub.com</a></p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
