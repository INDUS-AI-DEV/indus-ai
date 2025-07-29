import Container from "../components/ui/Container";
import Link from "next/link";

export default function TermsAndConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: January 1, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of the Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using https://indusai.app/ (the "Site") and related services, you agree to be bound by these Terms. If you do not agree, please do not use the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 mb-4">
                You must be 18 years or older, have legal capacity to enter into binding agreements. Use by minors under 18 is allowed only with parental or guardian consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration & Security</h2>
              <p className="text-gray-700 mb-4">
                If creating an account, you must provide accurate information. You are responsible for maintaining confidentiality of your login credentials and all activity under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Permitted Use</h2>
              <p className="text-gray-700 mb-4">
                You may use our Site and services for business purposes and internal evaluation only. Prohibited uses include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Unauthorized scraping, data mining, or reverse engineering.</li>
                <li>Introducing malware or harmful code.</li>
                <li>Impersonating others, or infringing intellectual property rights.</li>
                <li>Violating applicable laws or regulations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, branding, software, and documentation on the Site is owned by IndusAI or its licensors. You may not copy, distribute, modify, or create derivative works without express permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate your access at any time for breach of these Terms. You may also terminate by ceasing use of the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                Our services are provided "as‑is" and "as‑available". To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability or fitness for a particular purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, IndusAI shall not be liable for indirect, incidental, special, punitive, or consequential damages. Our aggregate liability shall not exceed the total amount you paid to us in the preceding 12 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold IndusAI harmless from any claims, losses, liabilities arising out of your use of the Site, violation of these Terms, or infringement of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modification of Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Updates will take effect immediately once posted. Continued use constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law & Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of India. Any disputes shall be subject to exclusive jurisdiction of courts in New Delhi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Entire Agreement & Severability</h2>
              <p className="text-gray-700 mb-4">
                These Terms, together with the Privacy Policy and any additional agreements, constitute the entire agreement. If any provision is invalid, the remainder shall continue in full force.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
} 