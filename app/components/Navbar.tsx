"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-blue-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Victor
        </Link>
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
      </div>
    </nav>
  );
}
