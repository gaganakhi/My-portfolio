// src/Components/SocialBar.jsx
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";

export default function SocialBar() {
  const [open, setOpen] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/gagan-n-514608271";
  const githubUrl = "https://github.com/gaganakhi";
  const mailto = "mailto:gaganakhil3@gmail.com";
  const resumeUrl = "/Gagan_QA_Engineer.pdf";

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sliding panel */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: 320 }}
      >
        <div className="h-full bg-white shadow-lg flex flex-col">
          <div className="px-6 py-6 border-b flex justify-between">
            <div>
              <div className="text-xl font-semibold">Gagan N</div>
              <div className="text-sm text-gray-600">QA Test Engineer</div>
            </div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="p-6 flex-1 space-y-4">
            <p className="text-sm text-gray-700">
              Manual & Automation Testing (Selenium + Java)
            </p>

            <a
              href={resumeUrl}
              download
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Download Resume
            </a>
          </div>

          <div className="p-4 text-xs text-gray-500 border-t">
            © {new Date().getFullYear()} Gagan N
          </div>
        </div>
      </aside>

      {/* LEFT ORANGE SOCIAL BAR */}
      <div className="fixed left-0 top-1/3 z-50 hidden md:flex flex-col bg-orange-500 rounded-r-xl overflow-hidden">
        
        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 px-4 py-4 text-white hover:bg-orange-600 transition"
        >
          <FaLinkedin size={22} />
          <span className="w-20">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 px-4 py-4 text-white hover:bg-orange-600 transition"
        >
          <FaGithub size={22} />
          <span className="w-20">GitHub</span>
        </a>

        {/* Email */}
        <a
          href={mailto}
          className="group flex items-center gap-3 px-4 py-4 text-white hover:bg-orange-600 transition"
        >
          <FaEnvelope size={22} />
          <span className="w-20">Email</span>
        </a>

        {/* Profile / Panel */}
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 px-4 py-4 text-white hover:bg-orange-600 transition"
        >
          <FaUser size={22} />
          <span className="w-20">Profile</span>
        </button>
      </div>
    </>
  );
}
