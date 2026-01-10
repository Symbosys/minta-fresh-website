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
                        Your privacy is critically important to us. This policy outlines how we collect, use, and protect your personal information while you use our platform.
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
                            This privacy policy sets out how <strong>mintaclub.com</strong> uses and protects any information that you give mintaclub.com when you use this website. mintaclub.com is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                        </p>
                        <p>
                            mintaclub.com may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
                        </p>

                        <h2>Consent & terms of this Privacy Policy</h2>
                        <p>
                            By using our platform (website, application or services), you have voluntarily agreed to consent & abide with this privacy policy. You have the option to disagree to abide by our privacy policy; if you choose disagree, you will not be able to access any portion of our platform or gain access to services provided on this platform.
                        </p>

                        <h2>What we collect</h2>
                        <p>We may collect the following information:</p>
                        <ul>
                            <li>Name</li>
                            <li>Contact information including email address</li>
                            <li>Demographic information such as postcode, preferences and interests</li>
                            <li>Other information relevant to customer surveys and/or offers</li>
                        </ul>
                        <p>For the exhaustive list of cookies we collect see the List of cookies we collect section.</p>

                        <h2>What we do with the information we gather</h2>
                        <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                        <ul>
                            <li>Internal record keeping.</li>
                            <li>We may use the information to improve our products and services.</li>
                            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
                            <li>Without identifying you personally we may use your information to provide updates on our service offerings and promotional schemes through third party advertising partners (&apos;TPAP&apos;). Our TPAP may use cookies on our website as well as third party websites and social media platforms to understand customer interests to provide updates on our latest service offerings and promotional schemes that are akin to your interests. Our TPAP provide you with complete control over ads experience and you can remove ads shown to you.</li>
                        </ul>

                        <h2>Security</h2>
                        <p>
                            We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                        </p>

                        <h2>How we use cookies</h2>
                        <p>
                            A cookie is a small file which asks permission to be placed on your computer&apos;s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                        </p>
                        <p>
                            We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                        </p>
                        <p>
                            Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                        </p>

                        <h2>Links to other websites</h2>
                        <p>
                            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                        </p>

                        <h2>Controlling your personal information</h2>
                        <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                        <ul>
                            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
                            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <a href="mailto:customercare@mintaclub.com" className="text-[#8719C6] underline">customercare@mintaclub.com</a>.</li>
                        </ul>
                        <p>
                            We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                        </p>
                        <p>
                            You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to us at <a href="mailto:customercare@mintaclub.com" className="text-[#8719C6] underline">customercare@mintaclub.com</a>.
                        </p>
                        <p>
                            If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
                        </p>

                        <h2>How can a user opt not to disclose information with FTH?</h2>
                        <p>
                            You have the option of not disclosing Your Sensitive Personal Data or Information to Us. You can also ask us to remove your data from our database by sending a mail to us at <a href="mailto:customercare@mintaclub.com" className="text-[#8719C6] underline">customercare@mintaclub.com</a>. In the event that You choose not to disclose Sensitive Personal Information, you may not be able to access multiple areas of the Platform or avail our e-commerce facility / services provided on the Platform.
                        </p>

                        <h2>Marketing & promotional activity</h2>
                        <p>
                            FTH (Fault Tolerant Heap) may use your information to provide you with better platform user-experience, send information on products and services which may be of interest to you, send via Short Messaging Services (SMS) marketing promotions, and share such personal information to our business partners on a need-to-know basis to render effective services for better customer experience.
                        </p>

                        <h2>What is NDNC Policy?</h2>
                        <p>
                            By using the Platform, you hereby authorize Us to contact You via email, phone, or SMS (Short Message Service), other applications (android or apple) linked to phone number on the contact details so provided, to furnish You with information about Our Products, Services, product delivery, marketing promotions, & other allied services offered by FTH on its platform. This authorization is licit for the mentioned purposes irrespective of whether You are registered with the NDNC (National Do Not Call) registry.
                        </p>

                        <h2>Indemnity</h2>
                        <p>
                            You agree to indemnify and hold FTH harmless from: (i) any actions, claims, demands, suits, damages, losses, penalties, interest and other charges and expenses (including legal fees and other dispute resolution costs) made by any third party due to or arising out of any violation of the terms of this Policy; (ii) any acts or deeds, including for any non-compliance or violation, of any applicable law, rules, regulations on Your part; or (iii) for violations committed by You.
                        </p>

                        <h2>Governing Law & Severability</h2>
                        <p>
                            The invalidity or unenforceability of any part of this Policy shall not prejudice or affect the validity or enforceability of the remainder of this Policy. This Policy has been prepared under the provisions of the Indian Information Technology Act, 2000 (&quot;IT Act&quot;) and its corresponding rules as enshrined under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;IT Rules&quot;) to monitor information (including sensitive personal data or information) collected, received, possessed, stored, dealt with, or handled by FTH.
                        </p>

                        <h2>Grievances</h2>
                        <p>
                            Should you have any grievances about the processing of your personal information or the privacy policy, you may contact:
                        </p>
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
