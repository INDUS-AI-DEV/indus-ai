import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const openPositions = [
  {
    id: 1,
    title: 'AI Engineering Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Join our AI engineering team to work on cutting-edge voice AI solutions. You\'ll help develop and optimize our AI models and infrastructure.',
    responsibilities: [
      'Assist in developing and optimizing AI/ML models for voice processing',
      'Implement and test new algorithms and approaches',
      'Work with the engineering team to integrate AI components',
      'Participate in code reviews and technical discussions',
      'Document research findings and implementation details'
    ],
    requirements: [
      'Pursuing or recently completed a degree in Computer Science, AI, or related field',
      'Strong programming skills in Python',
      'Familiarity with machine learning frameworks (PyTorch, TensorFlow)',
      'Basic understanding of NLP and speech processing concepts',
      'Good problem-solving and analytical skills',
      'Strong communication and teamwork abilities'
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Build the Future of Voice AI</h1>
              <p className="text-xl text-blue-100 mb-8">Join our team of passionate engineers and researchers creating cutting-edge AI solutions for the Indian market.</p>
              <div className="flex justify-center gap-4">
                <Button href="#open-positions" variant="secondary">View Open Positions</Button>
                <Button href="mailto:hr@indusai.app" variant="outline">Contact HR</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join IndusAI?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">We're building the future of voice AI, and we want you to be part of our journey.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cutting-Edge Work',
                  description: 'Work on challenging problems in AI, NLP, and voice technology that impact millions of users.'
                },
                {
                  title: 'Learning & Growth',
                  description: 'Learn from industry experts and work with the latest tools and technologies in AI.'
                },
                {
                  title: 'Flexible Work',
                  description: 'Enjoy a flexible work environment that values results over rigid schedules.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600">Join our growing team</p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                        <div className="flex items-center mt-2 text-gray-600 space-x-4">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 12h.01M8 12h.01M12 16h.01" />
                            </svg>
                            {position.type}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <Button 
                        href={`mailto:hr@indusai.app?subject=Application for ${position.title}`} 
                        size="sm"
                        variant="primary"
                      >
                        Apply Now
                      </Button>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">About the Role</h4>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      
                      <div className="mt-6 grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">Responsibilities</h5>
                          <ul className="space-y-2 text-gray-600">
                            {position.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-900 mb-3">Requirements</h5>
                          <ul className="space-y-2 text-gray-600">
                            {position.requirements.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-4">To apply, please send your resume and a brief introduction to <a href="mailto:hr@indusai.app" className="text-indigo-600 hover:underline">hr@indusai.app</a> with the position title in the subject line.</p>
                        <Button 
                          href={`mailto:hr@indusai.app?subject=Application for ${position.title}`}
                          variant="primary"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-12">
                <p className="text-lg text-gray-600 mb-6">Don't see a role that matches your skills? We're always looking for talented people to join our team.</p>
                <Button href="mailto:hr@indusai.app?subject=General Application" variant="outline">
                  Send Us Your Resume
                </Button>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Call to Action */}
        <section className="bg-indigo-700 text-white py-16">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to build the future of voice AI with us?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join our team of passionate engineers and researchers creating cutting-edge AI solutions.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="#open-positions" variant="secondary" size="lg">
                  View Open Positions
                </Button>
                <Button href="mailto:hr@indusai.app" variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
