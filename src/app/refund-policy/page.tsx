import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Refund & Return Policy | Minta Fresh",
    description: "Delivery, Cancellation, and Refund policy for Minta Fresh - Ensuring quality and food safety in every order.",
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
                        Refund & Return Policy
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Your guide to our delivery, cancellation, and refund procedures.
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
                            Effective Date: 05/02/2026
                        </p>

                        <p>
                            Minta Fresh is an online marketplace that facilitates the sale and delivery of fresh raw poultry,
                            meat, and fish products. By placing an order through the Minta Fresh mobile application, you agree
                            to this Delivery, Cancellation, and Refund Policy.
                        </p>

                        <h2>1. DELIVERY POLICY</h2>
                        <h3>1.1 Order Processing & Delivery Time</h3>
                        <ul>
                            <li>Orders are generally processed within 60 minutes of confirmation.</li>
                            <li>Delivery is typically completed within 60 minutes after dispatch, subject to location, traffic, weather conditions, and operational factors.</li>
                            <li>Delivery timelines are estimates and may vary.</li>
                        </ul>
                        <h3>1.2 Delivery Charges</h3>
                        <ul>
                            <li>Delivery fees (if applicable) are displayed clearly at checkout before payment confirmation.</li>
                            <li>Charges may vary depending on distance, order value, or promotional offers.</li>
                        </ul>
                        <h3>1.3 Order Tracking</h3>
                        <p>Customers can track order status in real-time within the Minta Fresh app.</p>

                        <h2>2. NATURE OF PRODUCTS</h2>
                        <p>Minta Fresh supplies perishable food items (raw poultry, meat, and fish). Due to hygiene and food safety regulations:</p>
                        <ul>
                            <li>Products are non-returnable once delivered.</li>
                            <li>We do not offer product replacements.</li>
                            <li>Refunds are provided only in eligible cases described below.</li>
                        </ul>
                        <p>This policy complies with applicable food safety and consumer protection standards.</p>

                        <h2>3. REFUND ELIGIBILITY</h2>
                        <p>Refunds may be issued in the following circumstances, subject to verification:</p>
                        <ol>
                            <li>Product delivered in damaged condition.</li>
                            <li>Product appears spoiled at the time of delivery.</li>
                            <li>Wrong product delivered.</li>
                            <li>Item(s) missing from the order.</li>
                            <li>Order marked as delivered but not received.</li>
                        </ol>
                        <p>All refund claims are subject to review and approval by Minta Fresh.</p>

                        <h2>4. TIME LIMIT FOR REPORTING ISSUES</h2>
                        <ul>
                            <li>Customers must report delivery-related issues within 30 minutes of delivery confirmation.</li>
                            <li>Reports can be submitted through in-app support or customer service.</li>
                            <li>Claims submitted beyond this timeframe may not be eligible due to the perishable nature of food products.</li>
                        </ul>

                        <h2>5. REQUIRED PROOF</h2>
                        <p>To process a refund request, customers may be required to provide:</p>
                        <ul>
                            <li>Clear photos or video evidence</li>
                            <li>Original packaging (if applicable)</li>
                            <li>Order ID and relevant details</li>
                        </ul>
                        <p>Insufficient or unverifiable claims may result in denial of refund.</p>

                        <h2>6. REFUND PROCESSING</h2>
                        <ul>
                            <li>Approved refunds are processed to the original payment method only.</li>
                            <li>Refunds are typically credited within 5–10 business days, depending on the payment provider or bank.</li>
                            <li>Minta Fresh does not provide cash refunds for online payments.</li>
                        </ul>

                        <h2>7. CANCELLATION POLICY</h2>
                        <h3>7.1 Cancellation Before Dispatch</h3>
                        <ul>
                            <li>Orders may be cancelled within 30 minutes of placement, provided they have not been dispatched.</li>
                            <li>Eligible cancellations will receive a full refund.</li>
                        </ul>
                        <h3>7.2 Cancellation After Dispatch</h3>
                        <ul>
                            <li>Once an order is dispatched, cancellation may not be possible due to food safety and logistics constraints.</li>
                            <li>In rare cases, cancellation approval remains at the discretion of Minta Fresh.</li>
                        </ul>

                        <h2>8. MISUSE & FRAUD PREVENTION</h2>
                        <p>Minta Fresh reserves the right to:</p>
                        <ul>
                            <li>Reject refund requests that are fraudulent or abusive.</li>
                            <li>Limit or suspend accounts involved in repeated false claims.</li>
                        </ul>
                        <p>Actions will be taken in accordance with applicable consumer protection laws.</p>

                        <h2>9. CUSTOMER SUPPORT</h2>
                        <p>For assistance, customers may contact:</p>
                        <div className="bg-[#f9eae9]/50 p-6 rounded-lg border border-[#f9eae9] mt-4">
                            <p><strong>Email:</strong> <a href="mailto:support@mintafresh.com" className="text-[#8719C6] underline">support@mintafresh.com</a></p>
                            <p className="mt-2"><strong>In-App Support:</strong> Available within the Minta Fresh App</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}