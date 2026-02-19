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
                        <p className="text-sm text-[#4a4a4a]/60 uppercase tracking-widest mb-8">
                            Last Updated: 05/02/2026
                        </p>

                        <h2>1. About Minta Fresh</h2>
                        <p>Minta Fresh, operated by Minta Club Private Limited, is an online platform for ordering and doorstep delivery of raw chicken, fish, and goat meat.</p>
                        <p>All products are raw, perishable food items and are prepared, packed, and delivered as per order specifications.</p>

                        <h2>2. Eligibility for Refunds</h2>
                        <p>Due to the perishable nature of raw meat and seafood, refunds are issued only in the following cases:</p>
                        <ul>
                            <li>Incorrect item delivered</li>
                            <li>Missing item in the order</li>
                            <li>Quality issues reported at the time of delivery (e.g., spoiled, damaged, or unusable product)</li>
                            <li>Order cancelled by Minta Fresh due to operational constraints</li>
                        </ul>
                        <p>Refund requests must be raised within the delivery time window or immediately upon delivery, along with supporting details such as photos or order information.</p>

                        <h2>3. Non-Refundable Cases</h2>
                        <p>Refunds will not be issued in the following situations:</p>
                        <ul>
                            <li>Change of mind after delivery</li>
                            <li>Delays caused by incorrect address or unavailability of the customer</li>
                            <li>Issues reported after consumption or use of the product</li>
                            <li>Requests made beyond the allowed complaint reporting window</li>
                        </ul>

                        <h2>4. Refund Method (Clear Disclosure)</h2>
                        <p>Refunds are issued to the original payment method or to an in-app adjustment wallet, as applicable.</p>
                        <ul>
                            <li>The adjustment wallet is a closed-system ledger usable only within the Minta Fresh platform.</li>
                            <li>Wallet balance cannot be withdrawn as cash, transferred to other users, or used outside the app.</li>
                            <li>No interest, earnings, or monetary rewards are provided on wallet balances.</li>
                        </ul>
                        <p>This refund mechanism is implemented in compliance with Google Play Console payment and policy requirements.</p>

                        <h2>5. Refund Processing Timeline</h2>
                        <ul>
                            <li>Approved refunds are processed within 5–7 business days</li>
                            <li>Actual credit timelines may vary depending on the customer’s bank or payment service provider</li>
                        </ul>

                        <h2>6. Payment Processing Disclaimer</h2>
                        <p>All payments on Minta Fresh are processed through third-party payment gateways.</p>
                        <p>Minta Club Private Limited does not store customer card, UPI, or banking information on its servers. The app includes payment functionality for food orders only. Any wallet shown is used solely for internal order adjustments or refunds and is not withdrawable. Payouts to partners are backend operational settlements and are not user-facing features.</p>

                        <h2>7. Contact &amp; Support</h2>
                        <p>For refund-related queries, customers can contact:</p>
                        <div className="bg-[#f9eae9]/50 p-6 rounded-lg border border-[#f9eae9] mt-4">
                            <p><strong>Email:</strong> <a href="mailto:support@mintafresh.in" className="text-[#8719C6] underline">support@mintafresh.in</a></p>
                            <p className="mt-2"><strong>Registered Office:</strong>Ranchi, Jharkhand</p>
                        </div>

                        <h2>8. Policy Updates</h2>
                        <p>Minta Club Private Limited reserves the right to update or modify this Refund Policy at any time to comply with operational, legal, or platform requirements. Updates will be reflected within the app or on the official website.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}