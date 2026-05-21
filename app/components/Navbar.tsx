"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: isHome ? "#about" : "/#about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "Skills",
      href: isHome ? "#skills" : "/#skills",
    },
    {
      label: "Contact",
      href: isHome ? "#contact" : "/#contact",
    },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-blue-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Victor
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-200 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
