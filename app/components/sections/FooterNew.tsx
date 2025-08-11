import Link from "next/link";
import Container from "../ui/Container";
import Image from "next/image";

const navigation = {
  solutions: [
    { name: "Automotive", href: "/solutions/automotive" },
    { name: "Banking & Finance", href: "/solutions/banking" },
    { name: "D2C & FMCG", href: "/solutions/d2c-fmcg" },
    { name: "Healthcare", href: "/solutions/healthcare" },
  ],
  company: [
    { name: "About IndusAI", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Whitepapers", href: "/whitepapers" },
    { name: "Blog", href: "/blog" },
    { name: "API Documentation", href: "/docs" },
  ],
  support: [
    { name: "Contact Sales", href: "/contact-sales" },
    { name: "Technical Support", href: "/support" },
    { name: "System Status", href: "/status" },
    { name: "Security", href: "/security" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Data Processing", href: "/data-processing" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/indus-ai/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/indusai_app",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@indusai",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ],
};

export default function FooterNew() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden font-raleway">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <Link href="/" className="block mb-6">
                <Image
                  src="/images/logo.png"
                  alt="IndusAI"
                  width={120}
                  height={120}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-blue-200 mb-8 leading-relaxed">
                The Proven Voice AI Platform for India's Leading Enterprises. Automate 80% of customer conversations and reduce costs by 40%.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">22+</div>
                  <div className="text-xs text-blue-300">Enterprises</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">95%</div>
                  <div className="text-xs text-blue-300">FCR Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">24/7</div>
                  <div className="text-xs text-blue-300">AI Support</div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-blue-300 hover:text-white transition-colors p-2 bg-white/10 rounded-lg hover:bg-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/20 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Customer Experience?
            </h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Join 20+ enterprises already using IndusAI to automate conversations, increase sales, and reduce operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://calendly.com/indusai-app/meet"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact-sales"
                className="px-8 py-3 border-2 border-blue-400 text-blue-200 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} IndusAI. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-blue-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
