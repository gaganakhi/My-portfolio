// src/Components/SocialBar.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialBar() {
  const [open, setOpen] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/gagan-n-514608271";
  const githubUrl = "https://github.com/gaganakhi";
  const mailto = "mailto:gaganakhil3@gmail.com";
  const resumeUrl = "/Gagan_QA_Engineer.pdf"; // put file in public/

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Overlay (click to close) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
          aria-hidden="true"
        />
      )}

      {/* Sliding panel */}
      <aside
        aria-hidden={!open}
        className={
          "fixed top-0 left-0 h-full z-50 transition-transform duration-300 " +
          (open ? "translate-x-0" : "-translate-x-full")
        }
        style={{ width: 320 }}
      >
        <div className="h-full bg-white shadow-lg flex flex-col">
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

          <div className="p-6 space-y-4 flex-1">
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

          <div className="p-4 border-t text-xs text-gray-500">
            © {new Date().getFullYear()} Gagan N
          </div>
        </div>
      </aside>

      {/* Left vertical icon bar (updated colors + icons) */}
      <div className="fixed left-2 top-1/3 z-50 hidden md:flex flex-col gap-4">
        {/* LinkedIn (brand blue) */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0A66C2] text-white shadow hover:scale-110 transform transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        {/* GitHub (dark neutral) */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#24292F] text-white shadow hover:scale-110 transform transition"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        {/* Email (accent red) */}
        <a
          href={mailto}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#EA4335] text-white shadow hover:scale-110 transform transition"
          aria-label="Email"
        >
          {/* Mail icon (inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8.5v7a2 2 0 002 2h14a2 2 0 002-2v-7M3 8.5l9 6 9-6" />
          </svg>
        </a>

        {/* Profile button opens panel (neutral gray) */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-600 text-white shadow hover:scale-110 transform transition"
          aria-label="Open profile panel"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM3 20a9 9 0 0118 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  );
}
