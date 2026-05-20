"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Meta Info */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm text-blue-700 mb-4">
              Backend
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Building Scalable Full-Stack Applications
            </h1>
            <div className="flex gap-4 text-gray-400 text-sm md:text-base">
              <span>May 15, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Building scalable applications is one of the most important skills
              in modern software development. Whether you're building a startup
              or working for an enterprise, understanding how to architect
              systems that can handle millions of users is crucial.
            </p>

            <h2 className="text-3xl font-bold text-blue-700 mt-10 mb-4">
              Understanding Scalability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Scalability refers to a system's ability to handle increased
              workload. This includes not just the volume of users but also the
              complexity of operations and data processing.
            </p>

            <h2 className="text-3xl font-bold text-blue-300 mt-10 mb-4">
              Key Considerations
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
              <li>Database optimization and indexing</li>
              <li>Caching strategies and CDN usage</li>
              <li>Load balancing and horizontal scaling</li>
              <li>Microservices architecture</li>
              <li>Asynchronous processing and job queues</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-700 mt-10 mb-4">
              Best Practices
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Follow these practices to ensure your application scales
              effectively:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
              <li>Monitor performance metrics continuously</li>
              <li>Use automated testing to catch issues early</li>
              <li>Implement proper logging and observability</li>
              <li>Plan for database scaling from the start</li>
              <li>Use containerization for consistent deployments</li>
            </ul>

            <p className="text-gray-300 leading-relaxed mt-8">
              By following these principles and continuously monitoring your
              application's performance, you can build systems that grow with
              your business needs.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Want to discuss this?</h3>
            <p className="text-gray-300 mb-6">
              Have thoughts on scalability or want to share your own
              experiences? Feel free to reach out!
            </p>
            <a
              href="mailto:adelekeafolayan@gmail.com"
              className="inline-block px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-400/50 transition-all"
            >
              Send me an Email
            </a>
          </div>

          {/* Navigation */}
          <div className="border-t border-blue-200 pt-8">
            <Link
              href="/blog"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-blue-200 py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Victor Adeleke. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
