"use client";

import { projects, skills } from "@/src";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Beautiful
            <span className="block bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack software developer passionate about creating
            elegant solutions to complex problems. Let me help bring your vision
            to life.
          </p>
          <Link
            href="/projects"
            className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            View All Projects
          </Link>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-linear-to-br from-blue-50 to-blue-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                With 5+ years of experience in web development, I've helped
                startups and enterprises build scalable, user-friendly
                applications. My expertise spans across modern JavaScript
                frameworks, cloud infrastructure, and best practices in software
                engineering.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
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
                  className="bg-linear-to-br from-blue-500/20 to-blue-600/20 p-8 rounded-lg border border-blue-500/30 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-lg overflow-hidden border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/0 to-blue-700/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all" />
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
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
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-blue-700">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-linear-to-r from-blue-400 to-blue-600 rounded-full" />
                      <span className="text-sm text-gray-700">{skill}</span>
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
          <p className="text-xl text-gray-600 mb-12">
            Have a project in mind? Let's collaborate and build something
            extraordinary together.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
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
              className="px-8 py-3 border border-blue-400 rounded-lg font-semibold text-blue-600 hover:bg-blue-50 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rephidimC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-400 rounded-lg font-semibold text-blue-600 hover:bg-blue-50 transition-all"
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
            © {new Date().getFullYear()} Victor Adeleke. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
