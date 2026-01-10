import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "CSR Policy | Minta Fresh",
    description: "Corporate Social Responsibility Policy of Minta Fresh - Our commitment to society, environment, and sustainable development.",
};

export default function CorporatePage() {
    return (
        <div className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* Header */}
            <header className="pt-24 pb-12 px-6 bg-[#f9eae9]">
                <div className="container mx-auto max-w-4xl text-center fade-in">
                    <span className="text-[#8719C6] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                        Corporate Responsibility
                    </span>
                    <h1
                        className="text-4xl md:text-5xl font-black text-[#222222] mb-6"
                        style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                        Corporate Social Responsibility (CSR) Policy
                    </h1>
                    <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
                        Our commitment to the overall betterment of society, extending beyond business to focus on human, environmental, and social assets.
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
                        <h2>I. Minta Fresh&apos;s Philosophy and Vision</h2>
                        <p>
                            &quot;Minta Fresh&quot; is a Brand of <strong>Minta Club Private Limited (&quot;Company&quot;)</strong>, a responsible corporate that strives for the overall betterment of society at large. To this end, the Company seeks to undertake Corporate Social Responsibility (&quot;CSR&quot;) activities, which extend beyond the ambit of the business and focus on human, environmental, and social assets, with a special focus on addressing hunger, malnutrition, education, and health.
                        </p>

                        <h2>II. Objectives and Scope of the CSR Policy</h2>
                        <p>
                            The CSR Policy lays down guidelines for the Company to undertake CSR activities, which are directed towards positively contributing to society through various sustainable and social welfare initiatives. The CSR Policy of the Company shall be governed by the various provisions of the <strong>Companies Act, 2013 (the &quot;Act&quot;)</strong>, <strong>Companies (CSR Policy) Rules, 2014 (&quot;CSR Rules&quot;)</strong>, and any other rules made thereunder, or that may apply from time to time.
                        </p>
                        <p>The Company proposes to undertake CSR activities in the following areas:</p>
                        <ol>
                            <li>Eradicating hunger, poverty, and malnutrition, promoting health care including preventive health care and sanitation, including contribution to the Swachh Bharat Kosh set-up by the Central Government for the promotion of sanitation and making available safe drinking water.</li>
                            <li>Promoting education, including special education and employment-enhancing vocation skills especially among children, women, elderly, and the differently-abled, and livelihood enhancement projects.</li>
                            <li>Promoting gender equality, empowering women, operating or managing day care centres and such other facilities for senior citizens, and measures for reducing inequalities faced by socially and economically backward groups.</li>
                            <li>Ensuring environmental sustainability, ecological balance, protection of flora and fauna, animal welfare, agroforestry, conservation of natural resources.</li>
                            <li>Contribution to the Prime Minister&apos;s National Relief Fund (PMNRF) or any other fund set up by the Central Government for socio-economic development and relief and welfare of the schedule caste, tribes, other backward classes, minorities, and women.</li>
                            <li>Any other activity as specified under the Act, as amended from time to time.</li>
                        </ol>
                        <p>
                            For the purpose of the CSR Policy, the CSR activities shall exclude activities undertaken in pursuance of the normal course of business of the Company.
                        </p>

                        <h2>III. Implementation of the CSR Activities</h2>
                        <p>
                            Pursuant to Section 135 of the Act, the Board of Directors of the Company (&quot;Board&quot;) has constituted a CSR committee. The CSR Committee and the Board are responsible for ensuring that the Company undertakes CSR activities in accordance with applicable law.
                        </p>
                        <p>
                            The following framework will be adopted by the Company as and when it becomes legally obligated to undertake CSR activities as per the provisions of the Act:
                        </p>

                        <h3>Responsibilities of the CSR Committee</h3>
                        <p>The CSR Committee shall hold one meeting in every financial year, and if it deems necessary, may hold additional meetings (&quot;CSR Meetings&quot;) for the following matters:</p>
                        <ol>
                            <li>Monitor the implementation of the CSR activities undertaken by the Company.</li>
                            <li>Prepare a status update in respect of each CSR activity.</li>
                            <li>Deliberate upon and identify new CSR activities that the Company may undertake in that financial year.</li>
                            <li>Include the details of CSR activities undertaken by the Company during the financial year in the Company&apos;s annual report, as required under Section 134 of the Act.</li>
                            <li>Discuss any matter in relation to the CSR activities of the Company that the CSR Committee may choose to discuss.</li>
                        </ol>

                        <h3>Monitoring of CSR Activities</h3>
                        <p>
                            The CSR Committee shall prepare a transparent monitoring mechanism for ensuring the implementation of the CSR activities proposed to be undertaken by the Company. Further, the CSR Committee shall provide the Board with a quarterly status update on the CSR expenditure.
                        </p>

                        <h3>New CSR Activities</h3>
                        <p>
                            The CSR Committee is tasked with identifying new social welfare initiatives that the Company can undertake as CSR activities under the CSR Policy. To this end, the CSR Committee shall explore the feasibility of various initiatives, and evaluate these initiatives in view of the objectives and scope of the CSR Policy and update the same in the policy, if required.
                        </p>
                        <p>
                            Upon identifying a suitable social welfare initiative, the CSR Committee shall formulate a detailed plan (&quot;CSR Plan&quot;), which specifies:
                        </p>
                        <ol>
                            <li>The end-goal of the initiative.</li>
                            <li>Expected expenditure.</li>
                            <li>The time expected to be spent by the employees of the Company, if any.</li>
                            <li>The modus operandi.</li>
                            <li>Timelines for various phases of the initiative.</li>
                            <li>Tie-ups or arrangements with third-party entities, if any.</li>
                            <li>Any other material factor that the CSR Committee may deem fit to be included.</li>
                        </ol>
                        <p>
                            The CSR Committee shall place the CSR Plan before the Board for the Board&apos;s approval. The Board reserves the right to make suitable modifications to the CSR Plan. The Company shall execute the CSR Plan in line with the modifications suggested by the Board.
                        </p>

                        <h3>Revisions to the CSR Policy</h3>
                        <p>
                            The CSR Committee shall review and recommend revisions to the CSR Policy at least once a year and additionally whenever it deems fit, and place before the Board the CSR Policy containing such draft revisions for the Board&apos;s approval. Any revisions to the CSR Policy shall be finalized only pursuant to the Board&apos;s approval; notwithstanding the revisions suggested by the CSR Committee, the CSR Policy shall be amended in the form and manner as approved by the Board.
                        </p>

                        <h3>External Assistance</h3>
                        <p>
                            The CSR Committee reserves the right to obtain professional advice from external sources (such as expert agencies, NGOs, governmental authorities, etc.) for the purpose of carrying out the CSR activities (&quot;Third Parties&quot;). Where the Company engages Third Parties, the CSR Committee shall constitute a robust monitoring and implementation mechanism to ensure that the funds and other resources of the Company are being used in an equitable and commercially judicious manner.
                        </p>
                        <p>
                            In the event the Third Party so engaged requires access to the Company&apos;s internal records, the same shall be shared on a need-to-know basis and only after the CSR Committee has passed a unanimous resolution, authorizing the same and recording its reasons in writing.
                        </p>

                        <h2>IV. CSR Expenditure</h2>
                        <p>
                            The Board shall ensure that the Company spends, in every financial year, a minimum of 2% of the average net profits of the Company made during the three immediately preceding financial years on the CSR activities of the Company.
                        </p>
                        <p>
                            All expenditure towards the CSR activities shall be diligently documented and maintained for at least 5 (five) years. Any surplus generated out of the CSR activities of the Company shall not form part of the business profits of the Company.
                        </p>

                        <h2>V. Publication</h2>
                        <p>
                            The CSR Policy shall be displayed on the Company&apos;s website, available here <a href="http://www.mintafresh.com" className="text-[#8719C6] underline">www.mintafresh.com</a>, and a link to the same will also be included in the Directors&apos; Report for every financial year.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
