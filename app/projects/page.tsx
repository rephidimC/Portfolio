"use client";

import { allProjects, education, mastersProject, workExperience } from "@/src";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
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
            <div className="bg-linear-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500/50 rounded-lg overflow-hidden hover:border-purple-500/80 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold">Health Triage System</h3>
                  <span className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                    Masters Project
                  </span>
                </div>
                <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                  {mastersProject.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">
                    Frontend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mastersProject.frontendTech.map((tech) => (
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
                    {mastersProject.backendTech.map((tech) => (
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
                  className="inline-block px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
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
                    className="group relative bg-linear-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all" />
                    <div className="relative p-8 h-full flex flex-col">
                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 grow leading-relaxed">
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

      {/* Work Experience Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-slate-800 to-slate-900 border border-purple-500/20 rounded-lg p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300">
                      {job.title}
                    </h3>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {job.company}
                    </a>
                  </div>
                  <span className="text-sm text-gray-400 md:text-right mt-2 md:mt-0">
                    {job.period} • {job.location}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">
            Education
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300 mb-1">{edu.school}</p>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-purple-300 mt-4 md:mt-0 md:whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center bg-linear-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:adelekeafolayan@gmail.com"
              className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/victor-adeleke-afolayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rephidimC"
              target="_blank"
              rel="noopener noreferrer"
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
          <p>
            © {new Date().getFullYear()} Victor Adeleke. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
