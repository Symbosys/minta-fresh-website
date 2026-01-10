import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms & Conditions | Minta Fresh",
    description: "Terms and conditions for using Minta Fresh platform.",
};

export default function TermsAndConditionsPage() {
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
                        Terms & Conditions
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Please read these terms carefully before using our platform. They outline the rules and regulations for the use of Minta Fresh&apos;s Website and App.
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
                            Last Updated: November 2024
                        </p>

                        <p>
                            <strong>Minta Club Pvt Ltd. (&quot;FTH&quot;)</strong> is the owner of the brand <strong>mintafresh.com</strong> and the website www.mintafresh.com, the minta fresh mobile application on iOS and Android devices (together referred as &quot;Platform&quot;).
                        </p>

                        <h2>Customer Registration and Privacy Policy</h2>
                        <p>
                            The platform provides for registration process to serve its customer better and may now or in the future collect the following personally identifiable information to serve you better:
                        </p>
                        <ul>
                            <li>Name including first and last name</li>
                            <li>Email address</li>
                            <li>Mobile phone numbers and contact details</li>
                            <li>Postal Pin code</li>
                            <li>Personal demographic profile like your age, gender, occupation, location, education, address etc.</li>
                        </ul>
                        <p>
                            By completing the registration or placing an order, the Customer agrees to receive promotional and transactional communication, text messages, mobile notifications, phone calls and newsletters. The Customer can opt out by contacting the customer service at <a href="mailto:customercare@mintaclub.com" className="text-[#8719C6] underline">customercare@mintaclub.com</a>. We will never sell or provide your information to third party companies or outside agencies for commercial purposes. However, the platform may contain links to other web sites that we do not directly manage such as Google Analytics used to understand and optimize user&apos;s behaviour. FTH shall not be responsible for the privacy policies of such external web sites.
                        </p>

                        <h2>Who Can Sign Up</h2>
                        <p>
                            Any person can sign up for services provided if he or she is competent to enter a contract. Section 11 of the Indian Contract Act, 1872 specifies that every person is competent to contract provided he or she has attained the age of 18 years, is of sound mind and not disqualified from contracting by any other law to which he or she is subject to.
                        </p>

                        <h2>Terms of access to Platform</h2>
                        <p>
                            FTH grants customers limited access rights for personal use on this platform and not to download (other than page caching) or edit any portion of it.
                        </p>
                        <p>
                            The access to this platform is for personal use of the Customer and not for any commercial use or to access its contents to collect and use of product listings, descriptions, or prices; any derivative use of this platform or any use of data mining, robots, or similar data gathering and extraction tools. No portions of this platform may be reproduced, duplicated, copied, sold, resold or otherwise exploited for any commercial purpose without express written consent of FTH.
                        </p>
                        <p>
                            Further no Customer is authorized to frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) on the platform without express written consent of FTH. Any unauthorized use automatically terminates the permission granted by FTH.
                        </p>

                        <h2>Pricing</h2>
                        <p>
                            Prices displayed for all the products on www.mintafresh.com exclude GST. The prices of all products mentioned at the time of ordering will be charged on the date of the delivery except for fresh food products. In case fresh food prices are higher or lower on the date of delivery, additional charges will be collected or refunded at the time of the delivery of the order.
                        </p>

                        <h2>Delivery and Handling Charges</h2>
                        <p>
                            FTH may impose delivery and handling fees and taxes from time to time. FTH endeavours to fulfil orders on time, but the actual delivery time may differ from the delivery time stated at the time of placing the order. Delivery delays will be communicated by FTH.
                        </p>

                        <h2>Order Cancellation</h2>
                        <p>
                            A Customer can opt to cancel order within 15 minute for the order placed either online or by calling our customer service and receive refund of advance paid if any. This is not applicable for Express delivery orders since those are processed and shipped immediately. To avoid any damage claims after delivery, users are recommended to inspect the product seal before accepting the order.
                        </p>
                        <p>
                            FTH reserves the right to cancel any order at its discretion based on product availability or if it suspects any fraudulent transaction by a customer or breaches the terms & conditions of using the platform.
                        </p>

                        <h2>Return & Refunds</h2>
                        <p>
                            FTH believes in Centum Customer satisfaction and &quot;no questions asked return and refund policy&quot; for issues relating to quality or freshness of its supplies. Customer may request for a refund/replacement within 1 hours of delivery of the products in case of any quality issues.
                        </p>
                        <p>
                            The mode of refund shall be as determined by FTH from time to time, such as, credit to mintacash, or to the original payment source. However, considering the order value and challenges to refund for cash on delivery orders in particular, the refunds will be applied to the subsequent purchases or credited to Customers mintacash account.
                        </p>

                        <h2>Customer Acceptance</h2>
                        <p>I hereby agree upon:</p>
                        <ul>
                            <li>To pay extra cost claimed by FTH in the case of redelivery due to wrong name or address or any other wrong information provided while booking order.</li>
                            <li>To use the platform to transact for lawful purposes in compliance with all applicable laws and regulation.</li>
                            <li>To provide authentic and true information in all instances and authorize FTH to validate the information provided at any point to time and reject registration if any details are found to be untrue wholly or partly.</li>
                            <li>To access the services made available on the platform and to purchase the products offered at my own risk after using best and prudent judgement as a well-informed Customer.</li>
                            <li>That the delivery address provided is correct and proper in all respects.</li>
                            <li>That the product descriptions have been carefully checked before placing the order and agree to be bound by the terms and conditions of sale.</li>
                            <li>That there may be excess / short quantity when ordering a cut SKU of a particular product. For example, the Steak version of a particular fish may have some variance in the final weight, given the fact it is hard to cut a fish in to an exact weight without damaging the shape of the Steak piece. In such instances, I agree to pay the difference amount at the time of delivery or adjust excess payment against next order.</li>
                        </ul>

                        <h2>Obligations of Visitor / Customer</h2>
                        <p>I hereby unconditionally undertake not to use the Platform for:</p>
                        <ul>
                            <li>Disseminating any objectionable material, harassing, libelous, abusive, threatening, harmful, vulgar, obscene, or any unlawful activity.</li>
                            <li>To transmit material that constitutes a criminal offence or results in civil liability or otherwise breaches any relevant laws, regulations or code of practice.</li>
                            <li>To gain unauthorized access to other computer network systems.</li>
                            <li>Interfere with any other person&apos;s right to use or enjoyment of the platform. Breach of applicable laws.</li>
                            <li>Interfere or disrupt networks or web sites connected to the platform.</li>
                            <li>Make, transmit or store electronic copies of materials protected by copyright without the permission of FTH.</li>
                            <li>To post customer review feedback in violation of this policy or right of any third party, including copyright, trademark, privacy or other personal or proprietary right(s), and cause injury to any person or entity.</li>
                            <li>To post comments containing libelous or otherwise unlawful, threatening, abusive or obscene material, or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings or any form of &quot;spam&quot;.</li>
                            <li>Not to use a false email address, impersonate any person or entity, or otherwise mislead as to the origin of any Customer feedback submitted on the Platform.</li>
                            <li>To be solely responsible for the content of any Customer Feedback made and agree upon to indemnify FTH for all claims resulting from such Customer Feedback submitted.</li>
                        </ul>

                        <h2>Unsubscribe Process</h2>
                        <p>
                            By taking the steps below, you can choose not to get any marketing or sales messages from us in the future. You can unsubscribe by emailing: <a href="mailto:customercare@mintaclub.com" className="text-[#8719C6] underline">customercare@mintaclub.com</a> or by writing to Minta Club Private Limited HI-76, Harmu Colony, Ranchi - 834002, Email: <a href="mailto:info@mintaclub.com" className="text-[#8719C6] underline">info@mintaclub.com</a>
                        </p>

                        <h2>Pictures & Colors</h2>
                        <p>
                            FTH has made every effort to display the products and its colors on the platform as accurately as possible. FTH does not guarantee nor take responsibility for variations in pictorial representations for fresh foods and colors variation due to technical reasons.
                        </p>

                        <h2>Right to Modify Terms & Conditions of Service</h2>
                        <p>
                            FTH reserves unconditional right to modify terms and conditions of transacting business on mintafresh platform without any prior notification and consent of customers. When a registered customer accesses mintafresh platform, he or she is deemed to have accepted the latest version of the Terms & Conditions on the Site.
                        </p>

                        <h2>Governing Law and Jurisdiction</h2>
                        <p>
                            All disputes arising out of or in doing business on the platform shall be amicably settled at the first instance by mutual discussions and negotiations. In the event the dispute is not resolved then the same may be referred to arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996 or any enactment of statutory modification thereof. The arbitration proceedings shall be in the English/Hindi language and shall be held in Ranchi. The award of the arbitral tribunal shall be final and binding upon the parties and no appeal against the same shalt lie to any court. The courts of competent jurisdiction in Bangalore shall have exclusive jurisdiction over any dispute, differences or claims arising out of this agreement.
                        </p>

                        <h2>Copyright & Trademark Rights</h2>
                        <p>
                            The Customer acknowledges that access to this platform does not confer and shall not be considered as conferring upon anyone any license under any of FTH or any third party&apos;s intellectual property rights. FTH expressly reserve all intellectual property rights in all text, programs, products, processes, technology, content, and other materials, which appear on the Platform. All rights, including copyright, on this platform is owned by FTH.
                        </p>
                        <p>
                            Any use of this platform or its contents, including copying or storing it either in whole or part, is prohibited without the permission of FTH. The names and logos and all related product and service names, design marks and slogans are the trademarks or service marks of FTH.
                        </p>
                        <p>
                            References on mintafresh Platform to any names, marks, products, or services of third parties or hypertext links to third party sites or information provided is solely for customer convenience and does not in any way constitute or imply FTH endorsement, sponsorship or recommendation of the third party, information, product or service.
                        </p>
                        <p>
                            All materials, including images, text, illustrations, designs, icons, photographs, programs, music clips or downloads, video clips and written and other materials hosted on mintafresh platform (collectively, the &quot;Promotional Material&quot;) are intended solely for customer convenience. All software used in mintafresh platform is the property of FTH or its licensees and protected by copyright laws. The Contents and software in mintafresh platform are to be used only as a shopping resource.
                        </p>

                        <h2>Objectionable Material</h2>
                        <p>
                            While all IT security measures are taken to ensure wholesome and socially acceptable content are available on mintafresh platform, notwithstanding the best efforts the customer understands and accepts the risk that while using this platform or any services provided on the www.mintafresh.com, one may encounter Content that may be deemed by some to be offensive, indecent, or objectionable, which Content may or may not be identified as such. FTH and its affiliates shall have no liability to Customer for Content that may be deemed offensive, indecent, or objectionable to you.
                        </p>

                        <h2>Indemnity</h2>
                        <p>
                            As a Customer, I hereby agree upon to defend, indemnify and hold harmless FTH, its employees, directors, officers, agents and their successors and assigns from and against any and all claims, liabilities, damages, losses, costs and expenses, including attorney&apos;s fees, caused by or arising out of claims based upon my actions or inactions, which may result in any loss or liability to FTH or any third party including but not limited to breach of any warranties, representations or undertakings or in relation to the non-fulfilment of any obligations under this User Agreement or arising out of violation of any applicable laws, regulations including but not limited to Intellectual Property Rights, payment of statutory dues and taxes, claim of libel, defamation, violation of rights of privacy or publicity, loss of service to other subscribers and infringement of intellectual property or other rights.
                        </p>
                        <p>
                            This clause shall survive the expiry or termination of this User Agreement. We may terminate this User Agreement at any time, without notice or liability to FTH.
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
