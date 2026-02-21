import React from "react";

const PolicyPage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Zenitho Policies
                </h1>

                <div className="flex justify-center mb-12">
                    <a
                        href="https://docs.google.com/document/d/1dfLaFbjaZtbrRTxks7AAw92OQjyqlkYN8vuzh_0yrnI/edit?tab=t.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 text-gray-800"
                    >
                        <span>View Original Document</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                </div>

                <div className="space-y-12">
                    {/* Privacy Policy */}
                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2 text-blue-600">1. Privacy Policy</h2>
                        <p className="text-sm text-gray-500 mb-6">Effective Date: January 9, 2026</p>

                        <div className="space-y-6 text-gray-700">
                            <p>
                                At <strong>Zenitho Labs</strong>, we are committed to transparency and the protection of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and service interactions.
                            </p>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">1.1 Information We Collect</h3>
                                <p>We collect several types of information from and about users of our Website, including:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
                                    <li><strong>Contact Data:</strong> Email address and telephone numbers.</li>
                                    <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                                    <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                                    <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us and our third parties (via Wallaxy and Cheerio).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">1.2 How Your Data is Collected</h3>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Direct Interactions:</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
                                    <li><strong>Automated Technologies:</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns using cookies and server logs.</li>
                                    <li><strong>Third-Party Sources:</strong> We receive data from analytics providers (Google Analytics) and marketing automation tools.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">1.3 How We Use Your Data</h3>
                                <p>We only use your data when the law allows us to. Most commonly, we use your data to:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li>Register you as a new client.</li>
                                    <li>Process and deliver your project (including managing payments via Razorpay).</li>
                                    <li>Manage our relationship with you (notifying you about changes to our terms).</li>
                                    <li>Use data analytics to improve our website, services, and customer experiences.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">1.4 Third-Party Disclosures</h3>
                                <p>We do not sell, trade, or otherwise transfer your Personal Identifiable Information to outside parties except for:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Vercel:</strong> For web hosting and infrastructure.</li>
                                    <li><strong>Razorpay:</strong> For secure payment processing.</li>
                                    <li><strong>Wallaxy & Cheerio:</strong> For lead generation and marketing automation.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">1.5 Your Rights (CCPA/GDPR Compliance)</h3>
                                <p>Depending on your location, you have the right to:</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li>Request access to your personal data.</li>
                                    <li>Request correction or erasure of your personal data.</li>
                                    <li>Object to processing of your personal data.</li>
                                    <li>Request restriction of processing your personal data.</li>
                                </ul>
                                <p className="mt-2">To exercise these rights, contact us at <a href="mailto:sales@zenitholabs.com" className="text-blue-600 hover:text-blue-500">sales@zenitholabs.com</a>.</p>
                            </div>
                        </div>
                    </section>

                    {/* Terms and Conditions */}
                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2 text-purple-600">2. Terms and Conditions</h2>
                        <p className="text-sm text-gray-500 mb-6">Effective Date: January 9, 2026</p>

                        <div className="space-y-6 text-gray-700">
                            <p>
                                These Terms and Conditions govern the professional relationship between <strong>Zenitho Labs</strong> (&quot;Agency&quot;) and the Client. By signing a Statement of Work (SOW) or paying an initial deposit, the Client agrees to be bound by these terms.
                            </p>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">2.1 Scope of Services</h3>
                                <p>Zenitho Labs provides digital product development, AI automation, and engineering services. The specific deliverables, timelines, and technical requirements will be outlined in a separate Statement of Work (SOW).</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">2.2 Intellectual Property (IP) Transfer</h3>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Conditional Assignment:</strong> All rights, title, and interest in the software, code, and designs created by the Agency shall remain the property of the Agency until the Client has paid all fees due under the Agreement in full.</li>
                                    <li><strong>Final Transfer:</strong> Upon receipt of the Full and Final Payment, the Agency hereby assigns and transfers all IP rights to the Client.</li>
                                    <li><strong>Standard Frameworks:</strong> The Agency may use its own proprietary libraries or open-source tools. The Client is granted a non-exclusive, perpetual license to use any such pre-existing code embedded in the final product.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">2.3 Payment Terms & Late Fees</h3>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Structure:</strong> 50% Advance (Deposit), 25% at Beta Phase, 25% prior to Launch (Production).</li>
                                    <li><strong>Invoicing:</strong> Invoices are due upon receipt. Failure to pay within 7 days of a milestone may result in a &quot;Stop Work&quot; order, delaying the project timeline.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">2.4 Termination & Suspension</h3>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Client Termination:</strong> The Client may terminate the project at any time with written notice.</li>
                                    <li><strong>Effect of Termination:</strong> Upon termination, the Client is liable for all hours worked and costs incurred up to the date of termination. No refunds will be provided for the 50% initial deposit.</li>
                                    <li><strong>Suspension:</strong> We reserve the right to suspend services if the Client fails to provide necessary feedback or assets for more than 14 days.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">2.5 Support and Warranty</h3>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>30-Day Support:</strong> Zenitho Labs provides a 30-day &quot;Stability Period&quot; post-launch. During this time, we will fix any bugs or errors that deviate from the agreed-upon SOW at no additional cost.</li>
                                    <li><strong>Exclusions:</strong> This support does not cover new features, third-party API changes, or issues caused by Client-side modifications to the code.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Refund & Cancellation Policy */}
                    <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-semibold mb-2 text-pink-600">3. Refund & Cancellation Policy</h2>
                        <p className="text-sm text-gray-500 mb-6">Effective Date: January 9, 2026</p>

                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">3.1 Non-Refundable Services</h3>
                                <p>Zenitho Labs provides professional services involving significant manual labor, strategy, and resource allocation.</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Advance Payments:</strong> The initial 50% deposit is non-refundable. This fee covers the &quot;Vision to Scale&quot; discovery phase, resource booking, and initial architectural setup.</li>
                                    <li><strong>Completed Milestones:</strong> Once a milestone (e.g., UI/UX Design or Beta Version) has been presented to the Client, the associated payment is considered earned and non-refundable.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">3.2 Timeline and Delivery Disclaimer</h3>
                                <p>Software development is an iterative and complex process.</p>
                                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                                    <li><strong>Estimates, Not Guarantees:</strong> Timelines provided are good-faith estimates. Zenitho Labs is not liable for refunds or penalties due to delays caused by technical complexity, third-party API limitations, or &quot;Force Majeure&quot; events.</li>
                                    <li><strong>Discretionary Discounts:</strong> If a deadline is significantly missed due to Agency negligence, we may, at our sole discretion, offer a discount on the final milestone payment as a gesture of goodwill.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">3.3 Dispute Resolution</h3>
                                <p>In the event of a dispute regarding the quality of work:</p>
                                <ol className="list-decimal list-inside mt-2 space-y-1 ml-4">
                                    <li>The Client must provide a detailed written list of items that do not meet the SOW requirements.</li>
                                    <li>Zenitho Labs will have 14 days to remediate these issues.</li>
                                    <li>If the Client remains unsatisfied, both parties agree to attempt mediation before pursuing legal action.</li>
                                </ol>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">3.4 Contact Information</h3>
                                <p className="mb-2">For questions regarding refunds or cancellations, please contact our accounts department:</p>
                                <ul className="space-y-2">
                                    <li><strong>Email:</strong> <a href="mailto:sales@zenitholabs.com" className="text-blue-600 hover:text-blue-500">sales@zenitholabs.com</a></li>
                                    <li><strong>Address:</strong> D-198, Road, Gurunanakpura, Raja Park, Jaipur, Rajasthan 302004</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PolicyPage;
