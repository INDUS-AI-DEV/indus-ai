import Container from "../ui/Container";
import Button from "../ui/Button";

const products = [
  {
    title: "Vijaya AI – Secure & Personalized LLMs for Enterprises",
    description:
      "Vijaya AI is a cutting-edge Large Language Model (LLM) solution designed to help enterprises and government organizations deploy custom AI models tailored to their data. With on-premise and cloud options, it ensures data security, cost efficiency (up to 70% savings), and seamless AI adoption for businesses looking to leverage generative AI.",
    features: [
      "Data Security",
      "Cost Efficiency",
      "Seamless AI Adoption",
      "Custom AI Models",
    ],
  },
  {
    title: "VivOne AI– Intelligent Chat & Voice AI",
    description:
      "Our AI Agent is a next-gen customer support solution that offers real-time chat and voice assistance, automating interactions with human-like accuracy. Designed for businesses across industries, it enhances customer experiences by providing instant, context-aware responses, reducing operational costs, and improving support efficiency — adaptable for various enterprises.",
    features: [
      "Real-time Chat",
      "Voice Assistance",
      "Human-like Accuracy",
      "Context-aware Responses",
    ],
  },
  // {
  //   title: "Machine Learning Solutions",
  //   description:
  //     "Custom ML models tailored to your business needs, from predictive analytics to computer vision.",
  //   features: [
  //     "Predictive Analytics",
  //     "Computer Vision",
  //     "Pattern Recognition",
  //     "Data Mining",
  //   ],
  // },
  // {
  //   title: "Natural Language Processing",
  //   description:
  //     "Advanced NLP solutions for chatbots, text analysis, and automated content generation.",
  //   features: [
  //     "Sentiment Analysis",
  //     "Text Generation",
  //     "Language Understanding",
  //     "Chatbots",
  //   ],
  // },
  // {
  //   title: "AI Consulting",
  //   description:
  //     "Strategic guidance on AI implementation and digital transformation for your organization.",
  //   features: [
  //     "Strategy Development",
  //     "Technical Assessment",
  //     "Implementation",
  //     "Training",
  //   ],
  // },
];

export default function Products() {
  return (
    <section className="py-32 bg-gray-50">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-raleway">
            Comprehensive AI Solutions
          </h2>
          <p className="text-gray-900/60 text-lg font-raleway">
            Leverage the power of artificial intelligence to transform your
            business and stay ahead of the competition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="bg-white p-12 relative group rounded-xl shadow-sm border border-gray-200"
            >
              <div className="relative">
                <div className="mb-8">
                  <span className="text-gray-400 text-sm font-raleway">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-raleway">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-raleway">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-12">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-500 flex items-center gap-2 font-raleway"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="sm" className="font-raleway">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
