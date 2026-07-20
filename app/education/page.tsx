"use client";

import { education } from "@/src";
import Navbar from "@/app/components/Navbar";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Education</h1>
          <p className="text-xl text-gray-600">
            My academic journey and qualifications
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-400 to-blue-600 transform md:-translate-x-1/2" />

            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`relative md:flex ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white transform md:-translate-x-1/2 -translate-x-1.5" />

                {/* Content */}
                <div
                  className={`md:w-1/2 ml-8 md:ml-0 ${
                    idx % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white border-2 border-blue-200 rounded-lg p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-700 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-gray-700 mb-1">
                          {edu.school}
                        </p>
                        <p className="text-gray-600">{edu.location}</p>
                      </div>
                      <span className="inline-block text-sm font-semibold text-blue-700 px-4 py-2 bg-blue-100 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Academic Background
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With a strong foundation in mechanical engineering and complemented
            by advanced degrees in business administration and software
            engineering, I bring a multidisciplinary approach to technology and
            problem-solving. My education has equipped me with both technical
            expertise and strategic business acumen.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">3</h3>
              <p className="text-gray-600">Degrees</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">2</h3>
              <p className="text-gray-600">Master&apos;s Programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">2</h3>
              <p className="text-gray-600">Institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center bg-linear-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating or learning more about my background?
            Feel free to reach out!
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
