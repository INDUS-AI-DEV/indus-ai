import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Image from "next/image";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import ServicesSection from "../components/sections/ServicesSection";

const expertise = [
  {
    area: "Machine Learning",
    description: "Transform raw data into actionable insights with our advanced machine learning products that power intelligent decision-making and automation.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks"],
  },
  {
    area: "Deep Learning",
    description: "Leverage the power of neural networks to solve complex problems with unprecedented accuracy and efficiency.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
        />
      </svg>
    ),
    tools: ["CNNs", "RNNs", "Transformers", "GANs"],
  },
  {
    area: "Natural Language Processing",
    description: "Unlock the power of human language with our NLP products that understand, interpret, and generate text with human-like accuracy.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    tools: ["BERT", "GPT", "NLTK", "spaCy"],
  },
  {
    area: "Computer Vision",
    description: "Enable machines to interpret and understand visual information with our state-of-the-art computer vision solutions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: ["OpenCV", "TensorFlow Vision", "PyTorch Vision", "MediaPipe"],
  },
  {
    area: "Text-to-Speech (TTS)",
    description: "Create natural-sounding speech from text with our advanced TTS solutions that deliver human-like voice synthesis.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    tools: ["WaveNet", "Tacotron", "FastSpeech", "VITS"],
  },
  {
    area: "Quantum Computing",
    description: "Harness the power of quantum mechanics to solve problems beyond the reach of classical computers with our quantum computing solutions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    tools: ["Qiskit", "Cirq", "Q#", "Quantum ML"],
  },
  {
    area: "Cloud Computing",
    description: "Scale your AI solutions with our cloud computing products that provide on-demand computing power and storage.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-4m-8-4l-4 4m4-4l4 4m-4-4v12"
        />
      </svg>
    ),
    tools: ["AWS", "Azure", "GCP", "Kubernetes"],
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-indus-50/50 to-transparent" />
        <Container className="relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indus-100 text-indus-700 mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indus-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indus-600"></span>
              </span>
              Enterprise AI Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center font-raleway bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Transform Your Business with <span className="text-indus-600">AI-Powered</span> Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 font-raleway font-medium max-w-4xl mx-auto">
              Enterprise-grade AI solutions that deliver measurable impact and drive digital transformation
            </p>
            <p className="text-lg text-gray-600 text-center mb-12 font-raleway max-w-3xl mx-auto">
              Our AI products are engineered to solve complex business challenges, enhance customer experiences, and unlock new opportunities for growth in the age of artificial intelligence.
            </p>
            <div className="flex justify-center gap-4 flex-wrap whitespace-nowrap">
              <Button size="lg">
                <a href="https://calendly.com/indusai-app/meet">
                  Schedule Consultation
                </a>
              </Button>
              <Button variant="secondary" size="lg">
                <a href="https://www.linkedin.com/company/indus-ai/">
                  View Case Studies
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-raleway">
              Our <span className="text-indus-600">Technical</span> Expertise
            </h2>
            <p className="text-lg text-gray-600 font-raleway max-w-2xl mx-auto">
              Leveraging cutting-edge AI technologies to deliver innovative solutions that drive business transformation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 px-4">
            {expertise.map((item) => (
              <div
                key={item.area}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indus-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-indus-50 flex items-center justify-center text-indus-600 group-hover:bg-indus-100 group-hover:text-indus-700 transition-colors duration-300 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-raleway group-hover:text-indus-700 transition-colors">
                    {item.area}
                  </h3>
                  <p className="text-gray-600 mb-6 font-raleway leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-50 text-gray-700 group-hover:bg-indus-50 group-hover:text-indus-700 transition-all duration-300 border border-gray-100 group-hover:border-indus-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-raleway">
              Industries We <span className="text-indus-600">Empower</span>
            </h2>
            <p className="text-lg text-gray-600 font-raleway max-w-2xl mx-auto">
              Tailored AI solutions designed to address the unique challenges of your industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[
              {
                name: 'Banking & Finance',
                description: 'Transform financial services with AI-powered solutions for risk assessment, fraud detection, and personalized banking experiences.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.1-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                name: 'Telecom',
                description: 'Enhance customer experience and optimize network performance with intelligent telecom solutions.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                name: 'E-commerce / Quick Commerce',
                description: 'Drive sales and customer satisfaction with personalized recommendations and intelligent inventory management.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                )
              },
              {
                name: 'Retail & Consumer Brands',
                description: 'Revolutionize retail with AI-powered insights, demand forecasting, and customer engagement tools.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                name: 'Travel & Hospitality',
                description: 'Deliver exceptional guest experiences with AI-driven personalization and operational efficiency.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                name: 'EdTech',
                description: 'Transform education with adaptive learning platforms and intelligent content delivery systems.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                name: 'Automobile',
                description: 'Drive innovation in automotive with AI-powered predictive maintenance and connected vehicle solutions.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              }
            ].map((industry, index) => (
              <div 
                key={industry.name}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indus-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indus-50 text-indus-600 flex items-center justify-center mb-4 group-hover:bg-indus-100 transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-raleway">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-4">
                    <button className="text-sm font-medium text-indus-600 hover:text-indus-700 flex items-center transition-colors">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
