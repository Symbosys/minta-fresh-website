import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | Minta Fresh",
    description: "Privacy policy for Minta Fresh platform - how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-[#f9eae9]">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Legal Documentation
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Privacy Policy
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Minta Club Private Limited (Brand: Minta Fresh)
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
                            Last Updated: 5/2/2026
                        </p>

                        <p>
                            Minta Club Private Limited (“Company”, “we”, “our”, or “us”) operates the brand <strong>Minta Fresh</strong>, an online platform that enables customers to order raw chicken, fish, and goat meat for home delivery (“Services”).
                        </p>
                        <p>
                            We are committed to protecting your privacy and ensuring transparency in how your personal data is collected, used, stored, and shared in compliance with applicable Indian laws and Google Play policies.
                        </p>

                        <h2>1. Scope of This Policy</h2>
                        <p>This Privacy Policy applies to:</p>
                        <ul>
                            <li>The Minta Fresh mobile application</li>
                            <li>Our website and related services</li>
                            <li>Customers, delivery partners, and business partners</li>
                        </ul>
                        <p>By using our Services, you agree to the collection and use of information in accordance with this Policy.</p>

                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Personal Information</h3>
                        <p>We may collect:</p>
                        <ul>
                            <li>Name</li>
                            <li>Mobile number</li>
                            <li>Email address</li>
                            <li>Delivery address</li>
                            <li>Order details (products, quantity, price)</li>
                        </ul>

                        <h3>2.2 Payment Information</h3>
                        <p>We <strong>do not store</strong> credit/debit card details, UPI IDs, or net banking credentials. All customer payments are processed through a <strong>third-party payment gateway</strong>.</p>

                        <h3>2.3 Device & Usage Information</h3>
                        <ul>
                            <li>Device type</li>
                            <li>Operating system</li>
                            <li>App version</li>
                            <li>IP address (for security and fraud prevention)</li>
                            <li>Crash logs and performance data</li>
                        </ul>

                        <h2>3. Payment Gateway Disclosure</h2>
                        <p>
                            Payments for food orders placed on Minta Fresh are processed securely through <strong>PhonePe</strong>, a PCI-DSS compliant third-party payment gateway.
                        </p>
                        <ul>
                            <li>Minta Fresh does not hold, store, or control customer payment instruments</li>
                            <li>Payment data is handled directly by the payment gateway as per their privacy and security standards</li>
                            <li>Payments are accepted only for the purchase of food and delivery services</li>
                        </ul>

                        <h2>4. Wallet & Refund Clarification</h2>
                        <p>Any wallet or balance shown within the app (if applicable) is:</p>
                        <ul>
                            <li>A closed-system adjustment ledger</li>
                            <li>Used only for refunds, order adjustments, or promotional credits</li>
                            <li>Not withdrawable</li>
                            <li>Not transferable</li>
                            <li>Not a stored-value or financial product</li>
                        </ul>

                        <h2>5. Payout Processor Disclosure (Partners & Vendors)</h2>
                        <p>
                            Settlements to partner vendors and delivery partners are processed through <strong>Razor pay / unpay Api Payouts</strong> (or bank transfer mechanisms provided by regulated payment service providers).
                        </p>
                        <ul>
                            <li>Payouts represent service fees payable for completed deliveries or fulfilled orders</li>
                            <li>The Company does not offer any interest, investment, or earning schemes</li>
                            <li>Payouts are backend operational settlements and not a user-facing financial service</li>
                            <li>The app includes payment functionality for food orders only. Any wallet shown is used solely for internal order adjustments or refunds and is not withdrawable.</li>
                            <li>Payouts to partners are backend operational settlements and are not user-facing features.</li>
                        </ul>

                        <h2>6. How We Use Information</h2>
                        <p>We use collected information to:</p>
                        <ul>
                            <li>Process and deliver food orders</li>
                            <li>Facilitate payments and refunds</li>
                            <li>Settle partner payouts</li>
                            <li>Provide customer support</li>
                            <li>Improve app performance and user experience</li>
                            <li>Comply with legal and regulatory obligations</li>
                        </ul>

                        <h2>7. Data Sharing & Disclosure (Limited)</h2>
                        <p>We share user data <strong>only on a need-to-know basis</strong>, strictly limited to:</p>

                        <h3>7.1 Payment & Payout Partners</h3>
                        <ul>
                            <li>Order amount</li>
                            <li>Transaction reference</li>
                            <li>Contact details (where required for payment processing)</li>
                        </ul>

                        <h3>7.2 Delivery Partners</h3>
                        <ul>
                            <li>Customer name</li>
                            <li>Delivery address</li>
                            <li>Contact number (only for order fulfilment)</li>
                        </ul>

                        <h3>7.3 Google Play Services</h3>
                        <p>Limited technical and usage data may be shared with Google Play Console, including:</p>
                        <ul>
                            <li>App performance metrics</li>
                            <li>Crash reports</li>
                            <li>Device and OS information</li>
                        </ul>
                        <p>This data is used <strong>solely for app stability, security, and policy compliance</strong>.</p>

                        <h2>8. What We Do NOT Do</h2>
                        <p>To avoid any ambiguity:</p>
                        <ul>
                            <li>❌ We do not offer financial services</li>
                            <li>❌ We do not provide gambling, betting, or gaming features</li>
                            <li>❌ We do not offer earning, investment, or reward-based monetary programs</li>
                            <li>❌ We do not sell personal data to third parties</li>
                        </ul>

                        <h2>9. Data Retention & Security</h2>
                        <ul>
                            <li>Data is retained only as long as necessary to provide services or comply with legal requirements</li>
                            <li>We implement reasonable technical and organizational safeguards to protect user data</li>
                            <li>Access to data is restricted to authorized personnel only</li>
                        </ul>

                        <h2>10. User Rights</h2>
                        <p>Users may:</p>
                        <ul>
                            <li>Request access to their personal data</li>
                            <li>Request correction or deletion (subject to legal obligations)</li>
                            <li>Withdraw consent for non-essential communications</li>
                        </ul>
                        <p>Requests can be sent to the contact details below.</p>

                        <h2>11. Children’s Privacy</h2>
                        <p>Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.</p>

                        <h2>12. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Updates will be posted within the app or on our website with a revised “Last Updated” date.</p>

                        <h2>13. Contact Information</h2>
                        <div className="bg-[#f9eae9]/50 p-6 rounded-lg border border-[#f9eae9] mt-4 text-[#222222]">
                            <p className="font-bold text-[#8719C6] text-lg mb-1">Minta Club Private Limited</p>
                            <p>Brand: Minta Fresh</p>
                            <p>Email: <a href="mailto:support@mintafresh.com" className="text-[#8719C6] underline">support@mintafresh.com</a></p>
                            <p className="mt-2"><strong>Registered Office:</strong>Ranchi, Jharkhand</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}