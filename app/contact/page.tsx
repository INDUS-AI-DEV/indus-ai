import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/ui/Container";
// import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";

// const contactMethods = [
//   {
//     name: "Sales",
//     description: "Discuss AI solutions for your business",
//     phone: "+1 (555) 123-4567",
//     email: "sales@indusai.com",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Support",
//     description: "Get help with your AI implementation",
//     phone: "+1 (555) 234-5678",
//     email: "support@indusai.com",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Partnerships",
//     description: "Explore collaboration opportunities",
//     phone: "+1 (555) 345-6789",
//     email: "partners@indusai.com",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//         />
//       </svg>
//     ),
//   },
// ];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-raleway">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 font-raleway">
              Have questions about our AI solutions? We&apos;re here to help :)
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods
      <section className="py-4">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.name}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-gray-900 mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-raleway">
                  {method.name}
                </h3>
                <p className="text-gray-600 mb-6 font-raleway">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-900 font-medium font-raleway">
                    {method.phone}
                  </p>
                  <p className="text-gray-900 font-medium font-raleway">
                    {method.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      <div
        className="calendly-inline-widget min-w-[320px] h-[700px]"
        data-url="https://calendly.com/indusai-app/meet"
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />

      {/* Contact Form
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-raleway">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-900 mb-2 font-raleway"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-raleway"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-900 mb-2 font-raleway"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-raleway"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2 font-raleway"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-raleway"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 mb-2 font-raleway"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-raleway"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2 font-raleway"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-raleway"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div>
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section> */}

      <ReadyToTransform />

      <Footer />
    </main>
  );
}
