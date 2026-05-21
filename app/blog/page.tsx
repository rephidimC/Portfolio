"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Full-Stack Applications",
      excerpt:
        "Learn the best practices for building scalable applications that can handle millions of users. We explore architecture patterns, database optimization, and deployment strategies.",
      date: "2026-05-15",
      readTime: "8 min read",
      category: "Backend",
      slug: "building-scalable-applications",
    },
    {
      id: 2,
      title: "React Performance Optimization Tips",
      excerpt:
        "Discover practical techniques to optimize your React applications. From memoization to code splitting, we cover everything you need to know to make your app lightning fast.",
      date: "2026-05-10",
      readTime: "6 min read",
      category: "Frontend",
      slug: "react-performance-optimization",
    },
    {
      id: 3,
      title: "Getting Started with Machine Learning",
      excerpt:
        "An introduction to machine learning fundamentals. Learn how to build your first ML model using Python, TensorFlow, and scikit-learn. Perfect for beginners.",
      date: "2026-05-05",
      readTime: "10 min read",
      category: "ML & AI",
      slug: "getting-started-with-ml",
    },
    {
      id: 4,
      title: "Web3 Development with Next.js",
      excerpt:
        "Explore how to integrate Web3 functionality into your Next.js applications. Learn about wallets, smart contracts, and blockchain interactions.",
      date: "2026-04-28",
      readTime: "12 min read",
      category: "Web3",
      slug: "web3-development-with-nextjs",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">
            Thoughts, tutorials, and insights on software development, Web3, and
            technology.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white border border-blue-200 rounded-lg p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm text-blue-700 mb-3">
                    {post.category}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group/title"
                  >
                    <h2 className="text-2xl font-bold mb-2 group-hover/title:text-blue-700 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-500">
                  {/* <span>{new Date(post.date).toLocaleDateString()}</span> */}
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center bg-linear-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Want to stay updated?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to get the latest articles delivered to your inbox.
          </p>
          <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-400/50 transition-all">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Victor Adeleke Afolayan. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
