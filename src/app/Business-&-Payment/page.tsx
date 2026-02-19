import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Business & Payment Compliance Declaration | Minta Fresh",
    description: "Official business and payment compliance declaration for Minta Fresh – transparent food delivery platform in India.",
};

export default function BusinessAndPaymentCompliancePage() {
    return (
        <div className="min-h-screen bg-minta-bg">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-minta-secondary">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Legal Documentation
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Business &amp; Payment Compliance Declaration
                    </h1>
                    <p className="text-minta-text-sec text-lg max-w-2xl mx-auto">
                        Official declaration on our business model, payment practices, and regulatory compliance.
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
                        <p className="text-sm text-minta-text-sec/60 uppercase tracking-widest mb-8">
                            Last Updated: 05/02/2026
                        </p>

                        <p><strong>Legal Entity Name:</strong> Minta Club Private Limited</p>
                        <p><strong>Brand Name:</strong> Minta Fresh</p>
                        <p><strong>Nature of Business:</strong> Online Food Ordering and Delivery Platform</p>
                        <p><strong>Country of Operation:</strong> India</p>

                        <h2>1. Business Model Declaration</h2>
                        <p>Minta Club Private Limited, operating under the brand Minta Fresh, provides an online platform for ordering and doorstep delivery of raw chicken, fish, and goat meat.</p>
                        <p>We operate an online food ordering and delivery platform.</p>
                        <p>The application enables customers to:</p>
                        <ul>
                            <li>Browse food products (raw meat and seafood)</li>
                            <li>Place orders</li>
                            <li>Make payments for food and delivery services</li>
                        </ul>
                        <p>The platform does not provide gaming, betting, wagering, reward-based earning, or investment-related services.</p>

                        <h2>2. Payment Collection &amp; Processing</h2>
                        <ul>
                            <li>Customer payments are collected only for food orders</li>
                            <li>Payments are processed via third-party, regulated payment gateways</li>
                            <li>Minta Club Private Limited does not store customer card, UPI, or bank details</li>
                            <li>The company does not act as a bank, wallet issuer, or financial intermediary</li>
                        </ul>

                        <h2>3. Wallet Usage Disclosure (If Applicable)</h2>
                        <p>Any in-app wallet shown to customers is a closed-system adjustment wallet used solely for:</p>
                        <ul>
                            <li>Refunds</li>
                            <li>Order adjustments</li>
                            <li>Promotional credits (non-cash)</li>
                        </ul>
                        <p>The wallet:</p>
                        <ul>
                            <li>Is not withdrawable</li>
                            <li>Cannot be transferred to other users</li>
                            <li>Cannot be used outside the Minta Fresh platform</li>
                            <li>Does not earn interest or returns</li>
                        </ul>

                        <h2>4. Partner / Vendor Payouts</h2>
                        <ul>
                            <li>Amounts shown to partners represent service fees payable for completed orders</li>
                            <li>Payouts are processed as scheduled operational settlements to registered bank accounts</li>
                            <li>Payouts are backend processes and are not customer-facing features</li>
                        </ul>

                        <h2>5. No Interest / No Deposit Declaration</h2>
                        <p>Minta Club Private Limited explicitly declares that:</p>
                        <ul>
                            <li>It does not accept deposits from users or partners</li>
                            <li>It does not provide interest, earnings, or returns on any amount</li>
                            <li>It does not offer stored-value accounts, savings products, or financial instruments</li>
                        </ul>
                        <p>Any amounts reflected in the system are transactional and operational only.</p>

                        <h2>6. Regulatory &amp; Platform Compliance</h2>
                        <p>Minta Club Private Limited confirms compliance with:</p>
                        <ul>
                            <li>Applicable food safety and consumer protection laws</li>
                            <li>Google Play Developer Program Policies</li>
                            <li>Google Play Payments and Financial Services Policies</li>
                            <li>The app includes payment functionality for food orders only. Any wallet shown is used solely for internal order adjustments or refunds and is not withdrawable.</li>
                        </ul>
                        <p>Payouts to partners are backend operational settlements and are not user-facing features.</p>
                        <p>This declaration is issued to provide clarity on the company’s business model and payment flows for platform review purposes.</p>

                        <div className="bg-[#f9eae9]/50 p-8 rounded-2xl border border-[#f9eae9] mt-12">
                            <p className="font-bold text-[#8719C6] text-xl mb-4 text-center">Authorized Signatory</p>
                            <p className="text-center mb-1"><strong>For Minta Club Private Limited</strong></p>
                            <p className="text-center mb-1">Name: Ravindra Srivastava</p>
                            <p className="text-center mb-1">Designation: CEO</p>
                            <p className="text-center">Date: 05/02/2026</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}