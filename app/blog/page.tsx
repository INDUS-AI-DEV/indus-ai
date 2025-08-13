import { blogPosts } from "./data";
import BlogCard from "@/app/components/blog/BlogCard";
import Container from "@/app/components/ui/Container";

export const metadata = {
  title: "Blog | IndusAI - Insights on AI and Technology",
  description: "Stay updated with the latest trends, insights, and innovations in AI technology from IndusAI experts.",
};

export default function BlogPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Updates</h1>
            <p className="text-xl text-indigo-100">
              Discover the latest trends, research, and insights in AI technology and its transformative impact on businesses.
            </p>
          </div>
        </Container>
      </div>

      {/* Blog Posts Grid */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with the Latest in AI
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, research, and updates on AI technology and its applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
