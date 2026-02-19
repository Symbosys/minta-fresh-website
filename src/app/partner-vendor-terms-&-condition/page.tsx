import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Partner & Vendor Terms & Conditions | Minta Fresh",
    description: "Terms and conditions for partners and vendors of Minta Fresh – raw meat supply and delivery platform.",
};

export default function PartnerVendorTermsPage() {
    return (
        <div className="min-h-screen bg-minta-bg">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-minta-secondary">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-minta-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Legal Documentation
                    </span>
                    <h1
                        className="text-4xl md:text-6xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Partner &amp; Vendor Terms &amp; Conditions
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Terms governing our partnership with meat shops, processing units, and delivery partners.
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

                        <h2>1. Introduction</h2>
                        <p>These Partner / Vendor Terms (“Terms”) govern the relationship between Minta Club Private Limited, operating under the brand Minta Fresh, and its partner vendors, including but not limited to meat shops, processing units, and delivery partners supplying or fulfilling orders of raw chicken, fish, and goat meat through the Minta Fresh platform.</p>
                        <p>By onboarding or continuing to operate as a partner, the vendor agrees to these Terms.</p>

                        <h2>2. Nature of the Platform</h2>
                        <p>Minta Fresh is an online food ordering and delivery platform that facilitates the sale and delivery of raw meat and seafood products to end customers.</p>
                        <p>Minta Club Private Limited:</p>
                        <ul>
                            <li>Does not provide banking, lending, investment, or financial services</li>
                            <li>Does not offer stored-value, interest-bearing, or deposit-based products</li>
                            <li>Acts solely as a technology and logistics facilitator</li>
                        </ul>

                        <h2>3. Order Fulfilment Responsibilities</h2>
                        <p>Partners are responsible for:</p>
                        <ul>
                            <li>Supplying fresh, hygienic, and compliant raw products</li>
                            <li>Packaging orders as per platform guidelines</li>
                            <li>Ensuring quality and food safety standards are met</li>
                            <li>Fulfilling accepted orders within agreed timelines</li>
                        </ul>

                        <h2>4. Service Fees &amp; Earnings</h2>
                        <p>Amounts displayed in the partner dashboard represent service fees payable to the partner for successfully fulfilled orders.</p>
                        <p>These amounts:</p>
                        <ul>
                            <li>Are calculated per completed order</li>
                            <li>Do not constitute deposits, investments, or stored-value balances</li>
                            <li>Do not earn any interest or returns of any kind</li>
                        </ul>

                        <h2>5. Payout Cycles (Clear Disclosure)</h2>
                        <p>Partner payouts are processed as scheduled settlements for completed orders.</p>
                        <ul>
                            <li>Payouts are initiated on a [daily / weekly / T+X days] cycle, as communicated during onboarding</li>
                            <li>Settlements are transferred directly to the partner’s registered bank account</li>
                            <li>Processing timelines may vary based on banking holidays or payment service provider schedules</li>
                        </ul>
                        <p>Payouts are strictly operational settlements and not a wallet, savings account, or financial instrument.</p>

                        <h2>6. No Interest Policy</h2>
                        <p>Any pending payable amount shown in the partner dashboard:</p>
                        <ul>
                            <li>Does not earn interest</li>
                            <li>Does not accrue returns or financial benefits</li>
                            <li>Is not treated as a deposit or balance held on behalf of the partner</li>
                        </ul>
                        <p>Minta Club Private Limited does not pay interest under any circumstances.</p>

                        <h2>7. No Deposit or Stored-Value Relationship</h2>
                        <p>Partners are not required to deposit money with Minta Club Private Limited to use the platform, except where expressly agreed for operational security or compliance purposes.</p>
                        <p>Any amounts reflected in the system:</p>
                        <ul>
                            <li>Are payable service fees</li>
                            <li>Are not deposits</li>
                            <li>Are not stored-value accounts</li>
                            <li>Cannot be transferred between partners or users</li>
                        </ul>

                        <h2>8. Payment Processing</h2>
                        <p>Customer payments are collected via third-party payment gateways.</p>
                        <p>Settlements to partners are made using regulated payment service providers through direct bank transfers.</p>
                        <p>Minta Club Private Limited does not hold partner funds as a financial custodian.</p>

                        <h2>9. Deductions &amp; Adjustments</h2>
                        <p>Minta Fresh may deduct:</p>
                        <ul>
                            <li>Platform service fees</li>
                            <li>Taxes (including GST or TDS, if applicable)</li>
                            <li>Refunds for cancelled or disputed orders</li>
                            <li>Penalties for quality or policy violations</li>
                        </ul>
                        <p>All deductions will be transparently reflected in partner statements.</p>

                        <h2>10. Compliance &amp; Termination</h2>
                        <p>Partners must comply with:</p>
                        <ul>
                            <li>Food safety and hygiene laws</li>
                            <li>Platform quality standards</li>
                            <li>Applicable local and national regulations</li>
                            <li>The app includes payment functionality for food orders only. Any wallet shown is used solely for internal order adjustments or refunds and is not withdrawable. Payouts to partners are backend operational settlements and are not user-facing features.</li>
                        </ul>
                        <p>Minta Club Private Limited reserves the right to suspend or terminate partnerships for non-compliance, fraud, or repeated quality issues.</p>

                        <h2>11. Limitation of Liability</h2>
                        <p>Minta Club Private Limited is not liable for:</p>
                        <ul>
                            <li>Banking delays</li>
                            <li>Payment gateway outages</li>
                            <li>Regulatory actions arising from partner non-compliance</li>
                        </ul>

                        <h2>12. Amendments</h2>
                        <p>These Terms may be updated periodically to meet operational, legal, or platform policy requirements. Continued use of the platform constitutes acceptance of updated Terms.</p>

                        <h2>13. Contact Information</h2>
                        <p>Email: <a href="mailto:support@mintafresh.com" className="text-[#8719C6] underline">support@mintafresh.com</a></p>
                        <p className="mt-2"><strong>Registered Office:</strong>Ranchi, Jharkhand</p>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}