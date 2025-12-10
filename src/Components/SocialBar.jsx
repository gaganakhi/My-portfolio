import { useState } from "react";

/**
 * SocialBar.jsx
 * - Fixed vertical icon bar left side
 * - Click the 'profile' icon to open a sliding drawer with name, title and resume download
 *
 * Notes:
 * - Put resume at public/resume.pdf (accessible at /resume.pdf)
 * - Replace links (linkedinUrl, githubUrl, mailto) with your real links
 * - You can replace inline SVGs with react-icons if you prefer
 */

export default function SocialBar() {
  const [open, setOpen] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/YOURPROFILE";
  const githubUrl = "https://github.com/YOURUSERNAME";
  const mailto = "mailto:you@example.com";
  const resumeUrl = "/resume.pdf"; // put resume.pdf into public/

  return (
    <>
      {/* Sliding panel */}
      <div
        aria-hidden={!open}
        className={
          "fixed top-0 left-0 h-full z-50 pointer-events-none " +
          "transition-transform duration-300 " +
          (open ? "transform translate-x-0" : "transform -translate-x-full")
        }
        style={{ width: 320 }}
      >
        <div className="h-full bg-white shadow-lg pointer-events-auto">
          <div className="px-6 py-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xl font-semibold text-gray-900">Gagan N</div>
                <div className="text-sm text-gray-600">QA Test Engineer</div>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close panel"
                className="p-2 rounded hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm text-gray-700">
              Hi — I’m Gagan. I do Manual & Automation testing (Selenium + Java). Download my resume or contact me via the links below.
            </p>

            <div className="flex gap-3">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
              >
                Download Resume
              </a>

              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
              >
                Email
              </a>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Quick links</h4>

              <div className="flex flex-col gap-2">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  • LinkedIn
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 hover:underline"
                >
                  • GitHub
                </a>
                <a href={mailto} className="text-gray-800 hover:underline">
                  • Email me
                </a>
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 border-t">
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} Gagan N
            </div>
          </div>
        </div>
      </div>

      {/* Left vertical icon bar */}
      <div className="fixed left-2 top-1/3 z-40 hidden md:flex flex-col gap-4">
        {/* Icon button - LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500 text-white shadow hover:scale-105 transform transition"
          aria-label="LinkedIn"
        >
          {/* simple LinkedIn SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" fill="currentColor" />
            <path d="M6.7 9.7h2.6v8H6.7zM8 7.9a1.3 1.3 0 11-.002-2.601A1.3 1.3 0 018 7.9zM13.3 12a1.96 1.96 0 011.95-1.96c1.08 0 1.7.74 1.7 1.8v4.2h-2.6v-3.7c0-.88-.32-1.46-1.17-1.46-.64 0-.97.43-1.13.84-.06.16-.07.38-.07.59V20h-2.6v-8h2.6v.9z" fill="#fff"/>
          </svg>
        </a>

        {/* Icon button - GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 text-white shadow hover:scale-105 transform transition"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.63.5 12.02c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.56-3.88-1.56-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.89-.39c.98.01 1.98.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.07 0 4.39-2.68 5.36-5.24 5.64.41.35.78 1.03.78 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.2.68.8.56A10.53 10.53 0 0023.5 12.02C23.5 5.63 18.36.5 12 .5z" fill="currentColor"/>
          </svg>
        </a>

        {/* Icon button - Email */}
        <a
          href={mailto}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-600 text-white shadow hover:scale-105 transform transition"
          aria-label="Email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 18.5v-12z" fill="currentColor"/>
            <path d="M4 6.5l8 6 8-6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Icon - person (opens slide panel) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500 text-white shadow hover:scale-105 transform transition"
          aria-label="Open profile panel"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM3 20a9 9 0 0118 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  );
}
