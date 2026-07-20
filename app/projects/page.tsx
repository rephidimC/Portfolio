"use client";

import { allProjects, education, mastersProject, workExperience } from "@/src";
import Navbar from "@/app/components/Navbar";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-gray-600">
            A showcase of my work across various technologies and industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Project (Masters) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">
              Academic Achievement
            </h2>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg overflow-hidden hover:border-blue-400 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Health Triage System
                  </h3>
                  <span className="px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 rounded-full text-sm font-semibold text-white">
                    Masters Project
                  </span>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {mastersProject.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-blue-700 mb-3">
                    Frontend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mastersProject.frontendTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border border-blue-300 rounded-full text-sm text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold text-blue-700 mb-3">
                    Backend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mastersProject.backendTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border border-blue-300 rounded-full text-sm text-blue-700"
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
                  className="inline-block px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-400/50 transition-all"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          </div>

          {/* Client Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-blue-700">
              Client Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects
                .filter((project) => project.type === "Client Project")
                .map((project) => (
                  <div
                    key={project.id}
                    className="group relative bg-white rounded-lg overflow-hidden border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/0 to-blue-700/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all" />
                    <div className="relative p-8 h-full flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-6 grow leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm text-blue-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
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
      <section className="py-20 px-6 bg-linear-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">
            Work Experience
          </h2>
          <div className="flex flex-col gap-8">
            {workExperience.map((job, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-white to-blue-50 border border-blue-200 rounded-lg p-8 hover:border-blue-400 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700">
                      {job.title}
                    </h3>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      {job.company}
                    </a>
                  </div>
                  <span className="text-sm text-gray-600 md:text-right mt-2 md:mt-0">
                    {job.period} • {job.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-blue-700"
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
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">
            Education
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white from-blue-600/20 to-blue-700/20 border border-blue-200 rounded-lg p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 mb-1">{edu.school}</p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-700 mt-4 md:mt-0 md:whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-linear-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:adelekeafolayan@gmail.com"
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-400/50 transition-all"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/victor-adeleke-afolayan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rephidimC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
            >
              GitHub
            </a>
          </div>
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
