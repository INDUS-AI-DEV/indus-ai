import { caseStudies } from "./data";
import CaseStudyCard from "@/app/components/case-studies/CaseStudyCard";
import Container from "@/app/components/ui/Container";

export const metadata = {
  title: "Case Studies | IndusAI - Success Stories & Client Results",
  description: "Discover how IndusAI has helped businesses across industries transform their operations with AI-powered solutions. Explore our success stories and measurable results.",
};

const industries = [
  { id: "all", name: "All Industries" },
  { id: "Healthcare", name: "Healthcare" },
  { id: "Hospitality", name: "Hospitality" },
  { id: "Real Estate", name: "Real Estate" },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover how IndusAI is transforming businesses across industries with cutting-edge AI solutions that drive real results.
            </p>
          </div>
        </Container>
      </div>

      {/* Case Studies Grid */}
      <Container className="py-16">
        {/* Industry Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                industry.id === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} {...caseStudy} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to transform your business with AI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Schedule a consultation with our AI experts to discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-sales"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Talk to an Expert
              </a>
              <a
                href="/solutions"
                className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-medium py-3 px-8 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
