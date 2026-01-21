"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { label: "About Me", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Research Projects", href: "#research-projects" },
    { label: "Academic Research", href: "#academic-research" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#E8DCC4] border-b border-zinc-300">
      <div className="max-w-screen-lg mx-auto px-8 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide uppercase"
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute left-0 right-0 top-full bg-[#E8DCC4] border-b border-zinc-300 mt-0">
              <div className="flex flex-col px-8 py-4 gap-4">
                {sections.map((section) => (
                  <a
                    key={section.href}
                    href={section.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors tracking-wide uppercase"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
