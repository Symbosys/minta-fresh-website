import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms & Conditions | Minta Fresh",
    description: "Terms and conditions for using Minta Fresh platform.",
};

export default function TermsAndConditionsPage() {
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
                        className="text-4xl md:text-6xl font-black text-minta-text mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Terms & Conditions
                    </h1>
                    <p className="text-minta-text-sec text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using our platform. They outline the rules and regulations for the use of Minta Fresh&apos;s Website and App.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 py-16 -mt-8">
                <div
                    className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-minta-secondary fade-in"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="prose max-w-none">
                        <p className="text-sm text-minta-text-sec/60 uppercase tracking-widest mb-8">
                            Last Updated: 05/02/2026
                        </p>

                        <h2>1. About Us</h2>
                        <p>Minta Club Private Limited (“Company”, “we”, “our”, “us”) is a company incorporated under the Companies Act, 2013, India.</p>
                        <p>Minta Fresh is a brand owned and operated by Minta Club Private Limited.</p>
                        <p>Minta Fresh operates an online platform for the sale and delivery of raw food products, including raw chicken, raw fish, and raw goat meat, sourced from authorized vendors and delivered to customers.</p>

                        <h2>2. Nature of Services (Important Disclosure)</h2>
                        <p>Minta Fresh is strictly a food ordering and delivery platform.</p>
                        <ul>
                            <li>We enable customers to place orders for raw meat and fish products</li>
                            <li>We coordinate packaging and delivery of these products</li>
                            <li>We do not provide cooked food, ready-to-eat meals, or restaurant dining services</li>
                        </ul>
                        <p>This app is not a financial service, investment platform, gaming app, or reward-based application.</p>

                        <h2>3. Eligibility to Use the App</h2>
                        <p>You must be:</p>
                        <ul>
                            <li>At least 18 years old</li>
                            <li>Legally capable of entering into a binding contract under Indian law</li>
                        </ul>
                        <p>By using the app, you confirm that you meet these requirements.</p>

                        <h2>4. Orders &amp; Product Information</h2>
                        <ul>
                            <li>All products sold are raw and perishable</li>
                            <li>Product images are representative and actual appearance may vary</li>
                            <li>Weight may vary slightly due to natural processing of raw meat</li>
                            <li>Products must be cooked thoroughly before consumption</li>
                        </ul>

                        <h2>5. Pricing &amp; Payments</h2>
                        <ul>
                            <li>Prices displayed are inclusive of applicable taxes unless stated otherwise</li>
                            <li>Payments are accepted only for purchasing food and delivery services</li>
                            <li>Payments are processed via third-party payment gateways</li>
                            <li>The Company does not store customer card or bank details</li>
                        </ul>

                        <h2>6. No Financial Services Declaration (Critical)</h2>
                        <p>Minta Fresh does NOT:</p>
                        <ul>
                            <li>Offer banking services</li>
                            <li>Offer wallets with withdrawable balance</li>
                            <li>Offer stored-value accounts</li>
                            <li>Provide loans, credit, investments, or interest-bearing products</li>
                            <li>Provide any form of financial advisory service</li>
                        </ul>
                        <p>Any payment functionality exists solely to complete food purchase transactions.</p>

                        <h2>7. Wallet / Credits (If Applicable)</h2>
                        <p>If an in-app wallet or credit balance is shown:</p>
                        <ul>
                            <li>It is a closed-system adjustment mechanism</li>
                            <li>Used only for:
                                <ul>
                                    <li>Refunds</li>
                                    <li>Order adjustments</li>
                                    <li>Promotional price corrections</li>
                                </ul>
                            </li>
                            <li>Wallet balance cannot be withdrawn as cash</li>
                            <li>Wallet balance cannot be transferred to other users</li>
                            <li>Wallet balance cannot be used outside the Minta Fresh platform</li>
                        </ul>

                        <h2>8. No Rewards, Earnings, or Incentives</h2>
                        <p>Minta Fresh does NOT operate any reward, earning, or cash-based incentive program.</p>
                        <p>Specifically:</p>
                        <ul>
                            <li>No “earn money” features</li>
                            <li>No betting, gaming, or chance-based rewards</li>
                            <li>No monetary rewards for app usage</li>
                            <li>No investment or income opportunities</li>
                        </ul>
                        <p>Any discounts or promotions (if offered) are price reductions only, not monetary rewards.</p>

                        <h2>9. Delivery &amp; Acceptance</h2>
                        <ul>
                            <li>Delivery timelines are estimates</li>
                            <li>Customers must inspect products at the time of delivery</li>
                            <li>Issues must be reported immediately upon delivery</li>
                        </ul>
                        <p>Once accepted, the order is considered delivered in good condition.</p>

                        <h2>10. Refunds &amp; Cancellations</h2>
                        <ul>
                            <li>Due to the perishable nature of raw meat and fish, cancellations may be restricted</li>
                            <li>Refunds, if applicable, are processed:</li>
                            <li>To the original payment method OR</li>
                            <li>As non-withdrawable adjustment credits within the app</li>
                            <li>The app includes payment functionality for food orders only. Any wallet shown is used solely for internal order adjustments or refunds and is not withdrawable. Payouts to partners are backend operational settlements and are not user-facing features.</li>
                            <li>Refund eligibility is determined at the Company’s discretion.</li>
                        </ul>

                        <h2>11. Partner &amp; Vendor Settlements</h2>
                        <p>Payments to vendors, delivery partners, or service providers are handled through backend settlement processes and are not customer-facing features.</p>
                        <p>Customers do not participate in or access partner payout systems.</p>

                        <h2>12. Prohibited Use</h2>
                        <p>Users agree not to:</p>
                        <ul>
                            <li>Misuse payment features</li>
                            <li>Attempt unauthorized withdrawals</li>
                            <li>Use the app for unlawful purposes</li>
                            <li>Reverse engineer or abuse the platform</li>
                        </ul>

                        <h2>13. Intellectual Property</h2>
                        <p>All content, branding, trademarks, and software belong to Minta Club Private Limited.</p>
                        <p>Unauthorized use is strictly prohibited.</p>

                        <h2>14. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, the Company shall not be liable for:</p>
                        <ul>
                            <li>Indirect or consequential damages</li>
                            <li>Improper handling or cooking of raw products</li>
                            <li>Delays caused by factors beyond control</li>
                        </ul>

                        <h2>15. Governing Law &amp; Jurisdiction</h2>
                        <p>These Terms shall be governed by the laws of India.</p>
                        <p>Courts at Ranchi, Jharkhand shall have exclusive jurisdiction.</p>

                        <h2>16. Changes to Terms</h2>
                        <p>We may update these Terms from time to time.</p>
                        <p>Continued use of the app constitutes acceptance of the revised Terms.</p>

                        <h2>17. Mandatory Terms for Raw Poultry, Meat &amp; Fish Products</h2>

                        <h3>Clause 1: Nature of Products</h3>
                        <p>1.1 Minta Fresh supplies raw, freshly cut chicken, fish, and goat meat intended only for cooking purposes.</p>
                        <p>1.2 All products are uncooked, unprocessed, and not ready-to-eat or ready-to-cook.</p>
                        <p>1.3 Raw meat and fish, when freshly cut and unwashed, may have a natural odor, which is an inherent characteristic of fresh raw products and does not indicate spoilage.</p>
                        <p>1.4 This natural odor typically reduces or disappears after proper washing and complete cooking.</p>
                        <p>1.5 Natural variations in odor, appearance, or texture are normal for raw agricultural food products and do not constitute a defect.</p>
                        <p><strong>Clarification:</strong></p>
                        <ul>
                            <li>Natural odor = inherent characteristic of fresh raw meat/fish</li>
                            <li>Spoilage = slimy texture, abnormal discoloration, or strong putrid smell</li>
                        </ul>

                        <h3>Clause 2: Processing &amp; Cleaning Disclosure</h3>
                        <p>2.1 Products are supplied raw and unwashed.</p>
                        <p>2.2 Minta Fresh does not represent the products as cleaned, washed, or ready-to-cook.</p>
                        <p>2.3 Washing of raw meat prior to delivery is intentionally avoided to:</p>
                        <ul>
                            <li>Maintain freshness</li>
                            <li>Reduce cross-contamination risk</li>
                            <li>Ensure timely delivery</li>
                        </ul>

                        <h3>Clause 3: Product Disclosure &amp; Acceptance</h3>
                        <p>3.1 Product descriptions and notices clearly disclose that:</p>
                        <ul>
                            <li>Products are raw and unwashed</li>
                            <li>Cleaning and proper cooking are required before consumption</li>
                        </ul>
                        <p>3.2 By placing an order, the customer confirms acceptance of these disclosures.</p>

                        <h3>Clause 4: Delivery &amp; Freshness</h3>
                        <p>4.1 Products are generally delivered fresh within 30–45 minutes of cutting, subject to operational conditions.</p>
                        <p>4.2 Minor variations in odor, colour, or texture are natural characteristics of raw meat and fish and shall not be treated as quality defects.</p>

                        <h3>Clause 5: Customer Responsibility</h3>
                        <p>5.1 After delivery, responsibility for:</p>
                        <ul>
                            <li>Cleaning</li>
                            <li>Handling</li>
                            <li>Storage</li>
                            <li>Cooking</li>
                        </ul>
                        <p>rests entirely with the customer.</p>
                        <p>5.2 Customers are advised to follow safe food-handling practices and ensure complete cooking before consumption.</p>

                        <h3>Clause 6: Refunds &amp; Replacements (Raw Products)</h3>
                        <p>6.1 Due to hygiene and safety reasons, raw meat and fish products are non-returnable.</p>
                        <p>6.2 Refunds or replacements may be considered only if:</p>
                        <ul>
                            <li>Product is spoiled at the time of delivery</li>
                            <li>Incorrect item is delivered</li>
                            <li>Quantity is materially short</li>
                        </ul>
                        <p>6.3 Claims must be raised with supporting evidence within 10 minutes of delivery.</p>
                        <p>6.4 Refunds are not applicable for:</p>
                        <ul>
                            <li>Cleaning-related concerns</li>
                            <li>Natural raw product odor or appearance</li>
                            <li>Issues arising after washing or cooking</li>
                        </ul>

                        <h3>Clause 7: Limitation of Liability</h3>
                        <p>7.1 Minta Club Private Limited shall not be liable for issues arising due to:</p>
                        <ul>
                            <li>Post-delivery handling</li>
                            <li>Improper cleaning or storage</li>
                            <li>Undercooking or contamination after delivery</li>
                        </ul>
                        <p>7.2 Any liability, if established, shall be limited to the value of the product delivered.</p>

                        <h3>Clause 8: Governing Law &amp; Jurisdiction</h3>
                        <p>8.1 These Terms shall be governed by the laws of India.</p>
                        <p>8.2 Courts and Consumer Commissions at Ranchi, Jharkhand shall have jurisdiction.</p>

                        <h3>Clause 9: Food Safety &amp; Regulatory Compliance</h3>
                        <p>The products supplied are raw food ingredients intended for consumer-side handling and cooking.</p>
                        <p>Consumers are advised to follow safe food-handling practices, including thorough cleaning and complete cooking before consumption.</p>

                        <h2>Contact Information</h2>
                        <p>Minta Club Private Limited</p>
                        <p>Brand: Minta Fresh</p>
                        <p>Email: <a href="mailto:support@mintafresh.com" className="text-minta-primary underline">support@mintafresh.com</a></p>
                        <p>Address: Road No.- 1B Basant Vihar, Harmu Housing Colony, Ranchi- 834002, Jharkhand</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}