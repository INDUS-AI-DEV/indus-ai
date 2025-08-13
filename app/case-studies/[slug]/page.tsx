import { notFound } from 'next/navigation';
import { caseStudies } from '../data';
import Image from 'next/image';
import Container from '@/app/components/ui/Container';
import Link from 'next/link';

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related case studies (excluding the current one)
  const relatedCaseStudies = caseStudies
    .filter((cs) => cs.slug !== caseStudy.slug)
    .slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <Container className="max-w-5xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm mb-6">
              {caseStudy.industry}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex items-center justify-center text-gray-200">
              <div className="flex items-center mr-8">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{caseStudy.duration} Project</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{caseStudy.industry}</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden mb-4">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-blue-800/80" />
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          {/* Client Logo */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-16 w-auto relative">
              <Image
                src={caseStudy.logoUrl}
                alt={`${caseStudy.client} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Key Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {caseStudy.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
              <div className="prose dark:prose-invert">
                <p>{caseStudy.challenge}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h2>
              <div 
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: caseStudy.solution.replace(/\n/g, '<br/><br/>') }}
              />
            </div>
          </div>

          {/* Impact */}
          <div className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Impact</h2>
            <ul className="space-y-4">
              {caseStudy.impact.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="h-12 w-12 text-indigo-100 dark:text-indigo-900 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">"{caseStudy.testimonial.text}"</p>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{caseStudy.testimonial.author}</p>
                <p className="text-indigo-600 dark:text-indigo-400">{caseStudy.testimonial.role}, {caseStudy.testimonial.company}</p>
              </div>
            </div>
          </div>

          {/* Related Case Studies */}
          {relatedCaseStudies.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                More Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedCaseStudies.map((relatedCaseStudy) => (
                  <Link
                    key={relatedCaseStudy.slug}
                    href={`/case-studies/${relatedCaseStudy.slug}`}
                    className="group block"
                  >
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={relatedCaseStudy.coverImage}
                        alt={relatedCaseStudy.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-600 text-white">
                          {relatedCaseStudy.industry}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {relatedCaseStudy.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {relatedCaseStudy.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to see what IndusAI can do for you?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our AI experts to discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-sales"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="bg-transparent hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg border border-white transition-colors"
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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} | IndusAI Case Study`,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['IndusAI Team'],
    },
  };
}
