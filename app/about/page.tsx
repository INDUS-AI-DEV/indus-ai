import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import TeamMember from "../components/about/TeamMember";
import Image from "next/image";
import ReadyToTransform from "../components/sections/ReadyToTransform";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "AI Solutions Delivered", value: "500+" },
  { label: "Global Clients", value: "22+" },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what's possible with AI technology.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Client Success",
    description:
      "Your success is our success. We're committed to delivering measurable results.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Ethical AI",
    description:
      "We develop AI solutions with strong ethical principles and transparency.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients to ensure solutions meet their specific needs.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Vivek Gupta",
    role: "Founder & CEO",
    image: "/images/team/Vivek.jpg",
    bio: "AI entrepreneur and engineering leader with over 13 years of experience in building scalable technology solutions across industries.",
    linkedin: "https://www.linkedin.com/in/vivekgupta668/",
  },
  {
    name: "Sachin Keshav",
    role: "Co-Founder & Lead",
    image: "/images/team/Sachin.jpeg",
    bio: "Technology leader with expertise in AI/ML and enterprise software solutions.",
    linkedin: "https://www.linkedin.com/in/sachin-keshav-349b7884/",
  },
  {
    name: "Shreeyash Kanwade",
    role: "AI Product Manager",
    image: "/images/team/Shreeyash.jpg",
    bio: "Product strategist specializing in AI-driven solutions and user experience.",
    linkedin: "https://www.linkedin.com/in/shreeyash-kanwade-ab2741223/",
  },
  {
    name: "Dr. Laxmi Gupta",
    role: "Assistant Professor",
    image: "/images/team/LaxmiGupta.jpg",
    bio: "Expert in AI research and development with a focus on practical applications.",
    linkedin: "https://www.linkedin.com/in/dr-laxmi-gupta-05a0b378/",
  },
  {
    name: "Dr. Ravi Shankar",
    role: "Advisor, IIT Delhi",
    image: "/images/team/Ravi.jpg",
    bio: "Mentor and Advisor in AI and Machine Learning",
    linkedin: "https://www.linkedin.com/in/ravi-shankar/",
  },
  {
    name: "Dr. Madhuri Gupta",
    role: "Advisor",
    image: "/images/team/MadhuriGupta.jpg",
    bio: "Specialist in advanced machine learning algorithms and data analysis.",
    linkedin: "https://www.linkedin.com/in/dr-madhuri-gupta-606b8572/",
  },
  {
    name: "Bittu Kumar",
    role: "Advisor",
    image: "/images/team/BittuKumar.jpg",
    bio: "Mentor and Advisor in AI and Machine Learning",
    linkedin: "https://www.linkedin.com/in/bittukr/",
  },
  {
    name: "Vineet Vaid",
    role: "Advisor",
    image: "/images/team/Vineet.jpg",
    bio: "Seasoned technology leader with expertise in digital transformation and business strategy.",
    linkedin: "https://www.linkedin.com/in/vineet-vaid-aa2b03/"
  },
];

export default function About() {
  return (
    <div className={`${inter.variable} font-sans min-h-screen bg-white`}>
      <Navbar />
      <main className={`${playfair.variable} font-serif`}>
        {/* Hero Section */}
        <section className="pt-28 pb-20 bg-white">
        <Container>
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-serif leading-tight">
              About <span className="text-indigo-600">IndusAI</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Pioneering the future of voice AI with cutting-edge technology and human-centered design. Since our inception, we've been at the forefront of artificial intelligence innovation, helping businesses transform their operations and customer experiences through intelligent voice solutions.
            </p>
            <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { ...stats[0], description: 'Delivering cutting-edge AI solutions since 2015' },
              { ...stats[1], description: 'Successfully implemented across various industries' },
              { ...stats[2], description: 'Serving clients across 15+ countries' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-indigo-600 mb-3 font-serif">{stat.value}</div>
                <div className="text-lg font-medium text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
            <div>
              <span className="inline-block text-sm font-medium text-indigo-600 mb-4">OUR VISION</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Shaping the Future of Voice Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At IndusAI, we're on a mission to bridge the gap between human communication and artificial intelligence. Our vision is to create voice solutions that understand not just words, but context, emotion, and intent.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe in building technology that serves people first. Our team of world-class engineers, linguists, and AI specialists work tirelessly to develop solutions that are not just powerful, but also intuitive and accessible to everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Cutting-edge AI research and development</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">Enterprise-grade security and compliance</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">24/7 dedicated support</p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center p-6 shadow-sm border border-gray-100">
              <Image
                src="/images/about/hero.png"
                alt="AI Technology"
                className="object-contain h-full w-auto max-w-full"
                width={600}
                height={600}
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-indigo-100"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-indigo-600">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-5xl mx-auto mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A dedicated team of AI specialists, engineers, and industry experts committed to delivering exceptional voice AI solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </Container>
      </section>

        <ReadyToTransform />
      </main>
      <Footer />
    </div>
  );
}
