import Container from '../ui/Container'

const testimonials = [
  {
    quote: "Indus AI has transformed our business operations. Their machine learning solutions have increased our efficiency by 300%.",
    author: "Sarah Chen",
    role: "CTO, TechCorp Global",
    company: "TechCorp"
  },
  {
    quote: "The team's expertise in AI consulting helped us navigate our digital transformation with confidence.",
    author: "Michael Rodriguez",
    role: "Director of Innovation, FutureScale",
    company: "FutureScale"
  },
  {
    quote: "Their NLP solutions have revolutionized how we interact with our customers. The results have been outstanding.",
    author: "Emily Watson",
    role: "Head of Product, DataFlow",
    company: "DataFlow"
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-white border-t border-gray-200 font-raleway">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Trusted by Leaders
          </h2>
          <p className="text-gray-600 text-lg">
            See how we&apos;ve helped companies achieve breakthrough results with AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="mb-8">
                <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="text-lg text-gray-900 mb-6 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <div>
                <div className="font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 