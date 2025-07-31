import Container from "../components/ui/Container";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <Container>
        <div className="py-12 md:py-16 max-w-4xl mx-auto">
          {/* Close/Back Button */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: January 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                IndusAI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, process, and share your Personal Data in compliance with the Digital Personal Data Protection Act, 2023 and other applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Scope & Applicability</h2>
              <p className="text-gray-700 mb-4">
                This Policy applies to all individuals ("Data Principals") whose personal data is processed by IndusAI, whether through our website, services, or otherwise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. What Personal Data We Collect</h2>
              <p className="text-gray-700 mb-4">Depending on your interactions, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Identity & Contact Data:</strong> Name, email, phone number, organization.</li>
                <li><strong>Technical & Usage Data:</strong> IP address, device/browser info, time zone, analytics, cookies.</li>
                <li><strong>Service Data:</strong> Account details, CRM integration logs, support chat, demo requests.</li>
                <li><strong>User-generated input:</strong> Feedback, messages, uploaded documents.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Collect Data</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Directly:</strong> When you register, request a demo, fill forms, or contact us.</li>
                <li><strong>Automatically:</strong> Via cookies, analytics tools, server logs when you visit or use our platform.</li>
                <li><strong>Third-party sources:</strong> Partners or affiliates, only if you've consented or it's for expected purposes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Purposes of Processing</h2>
              <p className="text-gray-700 mb-4">We process personal data to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide and manage your account and services.</li>
                <li>Respond to support requests and inquiries.</li>
                <li>Deliver marketing communications (with explicit consent).</li>
                <li>Personalize your experience and improve our offerings.</li>
                <li>Ensure security, prevent abuse, and troubleshoot issues.</li>
                <li>Fulfill legal or regulatory obligations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Legal Basis for Processing</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Consent:</strong> For all non-essential functions like marketing.</li>
                <li><strong>Legitimate Interest:</strong> For service delivery, support, analytics, security.</li>
                <li><strong>Legal Compliance:</strong> When required by law.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Sharing & Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share personal data with:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Analytics, cloud hosting, CRM, technical support.</li>
                <li><strong>Affiliates or partners:</strong> For joint service delivery or legal compliance.</li>
                <li><strong>Legal authorities:</strong> If required by law or for fraud prevention.</li>
                <li><strong>Change in business structure:</strong> e.g. merger, acquisition—under binding obligations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cross‑Border Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your data may be processed or stored outside India. Transfers will comply with the DPDP Act's provisions, including safeguards when transferring to jurisdictions not on India's restricted list.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain personal data only as long as necessary for the purposes disclosed or as required by law. When no longer needed, data will be securely deleted or anonymized.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Your Rights as a Data Principal</h2>
              <p className="text-gray-700 mb-4">Under the DPDP Act, you may request to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access the personal data we hold.</li>
                <li>Correct, update, or complete your data.</li>
                <li>Delete your data.</li>
                <li>Restrict or object to processing.</li>
                <li>Withdraw consent (for marketing or other applicable purposes).</li>
                <li>Lodge a grievance with our designated officer.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Cookies & Similar Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and tracking technologies to improve site functionality, analytics, and security. You can manage or disable cookies through browser settings, though it may affect your experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Security Measures</h2>
              <p className="text-gray-700 mb-4">
                We implement technical and organizational safeguards to protect your personal data, including encryption, access controls, and staff training. In the event of a breach, we will notify affected users as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy at any time. Major changes will be notified to you or posted on the site. Continued use implies acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information & Grievance Officer</h2>
              <p className="text-gray-700 mb-4">For any privacy inquiries or grievances, please contact:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Data Protection Officer</strong></p>
                <p className="text-gray-700">Email: <a href="mailto:info@indusai.app" className="text-blue-600 hover:text-blue-800">info@indusai.app</a></p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
} 