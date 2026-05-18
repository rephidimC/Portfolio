"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "BlockBeat",
      description:
        "A comprehensive blockchain analytics and monitoring platform providing real-time insights into blockchain networks, transactions, and market trends.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Web3",
        "Tailwind CSS",
        "Highcharts",
      ],
      link: "https://www.blockbeat.io",
      type: "Client Project",
    },
    {
      id: 2,
      title: "GetRoasted",
      description:
        "An AI-powered platform leveraging machine learning to provide intelligent feedback and analysis. Built with cutting-edge AI technologies for personalized user experiences.",
      tech: [
        "React",
        "TypeScript",
        "OpenAI API",
        "LangChain",
        "Node.js",
        "Tailwind CSS",
      ],
      link: "https://www.getroasted.ai",
      type: "Client Project",
    },
    {
      id: 3,
      title: "baba",
      description:
        "A language learning and translation platform transforming how people connect across languages, starting with Hebrew. Captures cultural nuances, gender dynamics, and real-world usage to help users communicate naturally and authentically in business, social, and personal contexts.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      link: "https://www.itsbaba.com",
      type: "Client Project",
    },
    {
      id: 4,
      title: "Graceland Psychiatry",
      description:
        "A professional healthcare website for a psychiatry practice featuring appointment scheduling, patient portal, and medical information resources.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      link: "https://www.gracelandpsychiatry.com",
      type: "Client Project",
    },
    {
      id: 5,
      title: "Mastermind Recovery",
      description:
        "A comprehensive recovery and wellness platform designed to support patients with treatment information, resources, and community engagement.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://www.mastermindrecovery.org",
      type: "Client Project",
    },
    {
      id: 6,
      title: "MEV Specialist Care",
      description:
        "A medical practice website showcasing specialized healthcare services with appointment booking and patient management capabilities.",
      tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
      link: "https://www.mevspecialistcare.com",
      type: "Client Project",
    },
    {
      id: 7,
      title: "Lantana Crown Braids",
      description:
        "San Antonio's premier destination for professional braiding services. A beautifully designed salon website showcasing braid styles, booking system, and the salon's commitment to celebrating natural hair and providing exceptional service in a welcoming environment.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      link: "https://www.landtana.com",
      type: "Client Project",
    },
    {
      id: 8,
      title: "Health Triage System",
      description:
        "Masters project: An AI-enhanced mental health triage and care management system that combines patient intake, risk assessment (LLM + PHQ-9), and clinician workflows. The platform enables prioritization of high-risk patients, supports scheduling, and provides explainable AI insights with audit logging.",
      frontendTech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Vercel Analytics",
      ],
      backendTech: [
        "Node.js",
        "Express",
        "TypeScript",
        "Supabase",
        "OpenAI API",
        "PostgreSQL",
      ],
      link: "https://health-triage-fe.vercel.app",
      type: "Masters Project",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Victor
          </Link>
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-gray-300">
            A showcase of my work across various technologies and industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Project (Masters) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-purple-300">
              Academic Achievement
            </h2>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500/50 rounded-lg overflow-hidden hover:border-purple-500/80 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold">Health Triage System</h3>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                    Masters Project
                  </span>
                </div>
                <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                  An intelligent healthcare triage system using machine learning
                  to assess patient urgency and optimize resource allocation in
                  medical settings. This project demonstrates advanced ML
                  integration with modern web technologies across full-stack
                  development.
                </p>
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">
                    Frontend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "React Query",
                      "Vercel Analytics",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/30 border border-blue-400/50 rounded-full text-sm text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">
                    Backend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express",
                      "TypeScript",
                      "Supabase",
                      "OpenAI API",
                      "PostgreSQL",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-500/30 border border-green-400/50 rounded-full text-sm text-green-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://health-triage-fe.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          </div>

          {/* Client Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-300">
              Client Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects
                .filter((project) => project.type === "Client Project")
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all" />
                    <div className="relative p-8 h-full flex flex-col">
                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                      >
                        Visit Site →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Impressed?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate on your next amazing project. I'm always excited
            to work on challenging and innovative ideas.
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Victor Adeleke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
