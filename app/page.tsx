"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      id: 1,
      title: "BlockBeat",
      description:
        "A comprehensive blockchain analytics and monitoring platform providing real-time insights into blockchain networks and market trends.",
      tech: ["Next.js", "React", "Web3", "TypeScript"],
      link: "https://www.blockbeat.io",
    },
    {
      id: 2,
      title: "GetRoasted",
      description:
        "An AI-powered platform leveraging machine learning to provide intelligent feedback and analysis with personalized user experiences.",
      tech: ["React", "TypeScript", "OpenAI API", "LangChain"],
      link: "https://www.getroasted.ai",
    },
    {
      id: 3,
      title: "Health Triage System",
      description:
        "Masters project: An intelligent healthcare triage system using ML to assess patient urgency and optimize resource allocation. Full-stack with AI integration.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "TypeScript",
        "Supabase",
        "OpenAI API",
      ],
      link: "https://health-triage-fe.vercel.app",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "React",
        "Next.js",
        "Tailwind CSS",
        "React Query",
        "Highcharts",
        "AG Grid",
        "Jest",
        "Vitest",
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        "Node.js",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
        "MongoDB",
        "Mongoose",
        "Serverless",
        "AWS Lambda",
        "DynamoDB",
        "Redis",
        "Elasticsearch",
      ],
    },
    {
      category: "ML & AI",
      items: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "Neural Networks",
        "LangChain",
      ],
    },
    {
      category: "Data Visualization",
      items: ["Matplotlib", "Seaborn", "Highcharts"],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes",
        "Git",
        "GitHub",
        "Google Cloud Platform",
        "Heroku",
      ],
    },
    {
      category: "Analytics",
      items: ["Mixpanel", "Google Analytics", "Vercel Analytics"],
    },
    {
      category: "Tools",
      items: [
        "Jupyter Notebook",
        "Google Colab",
        "Streamlit",
        "Webpack",
        "Yarn",
        "Figma",
        "Slack",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Victor
          </div>
          <div className="hidden md:flex gap-8">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "/projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-purple-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Building Beautiful
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack software developer passionate about creating
            elegant solutions to complex problems. Let me help bring your vision
            to life.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View All Projects
            </Link>
            <button className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>{" "}
      id="about"
      {/* About Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With 5+ years of experience in web development, I've helped
                startups and enterprises build scalable, user-friendly
                applications. My expertise spans across modern JavaScript
                frameworks, cloud infrastructure, and best practices in software
                engineering.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm obsessed with writing clean, maintainable code and creating
                delightful user experiences. When I'm not coding, you'll find me
                exploring new technologies or contributing to open-source
                projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "40+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-lg border border-purple-500/30 text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all" />
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
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
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                  >
                    Visit Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-900/50" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-purple-400">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full" />
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 px-6" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? Let's collaborate and build something
            extraordinary together.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="mailto:your@email.com"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Send me an Email
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
            >
              GitHub
            </a>
          </div>
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
