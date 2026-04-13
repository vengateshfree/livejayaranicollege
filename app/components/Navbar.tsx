"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Courses",
    children: [
      { label: "B.A. (English)", path: "/courses/ba-english" },
      { label: "B.Com (Commerce)", path: "/courses/bcom" },
      { label: "B.Com CA (Computer Applications)", path: "/courses/bcom-ca" },
      { label: "B.Sc (Maths)", path: "/courses/bsc-maths" },
      { label: "B.Sc (Computer Science)", path: "/courses/bsc-cs" },
      { label: "B.Sc CS AI & DS", path: "/courses/bsc-ai-ds" },
    ],
  },
  {
    label: "Innovation",
    children: [
      { label: "Institutions' Innovation Council", path: "/innovation/iic" },
      { label: "Infant Innovation Centre", path: "/innovation/infant-centre" },
      { label: "Research & Development", path: "/innovation/research" },
      { label: "Entrepreneurship Development Cell", path: "/innovation/edc" },
    ],
  },
  {
    label: "Skill Development",
    children: [
      { label: "Fine Arts Club", path: "/skills/fine-arts" },
      { label: "Literary Club", path: "/skills/literary" },
      { label: "Science Club", path: "/skills/science" },
    ],
  },
  {
    label: "Service Associations",
    children: [
      { label: "Women Empowerment Cell", path: "/services/women-empowerment" },
      { label: "Infant Jesus Power Cell", path: "/services/power-cell" },
    ],
  },
  {
    label: "Placement",
    children: [
      { label: "Training", path: "/placement/training" },
      { label: "Career Development", path: "/placement/career" },
      { label: "Campus Drives", path: "/placement/drives" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50">

      {/* ================= MARQUEE ================= */}
      <div className="bg-[#2F4A8A] text-white overflow-hidden py-2 text-sm font-medium">
        <div
          className="flex w-max gap-10 animate-[marquee_18s_linear_infinite]"
        >
          <span>🎓 Admissions Open 2026 – Apply Now!</span>
          <span>📢 New Courses: AI & Data Science</span>
          <span>🏆 100% Placement Assistance</span>
          <span>📅 Last Date: May 30, 2026</span>

          <span>🎓 Admissions Open 2026 – Apply Now!</span>
          <span>📢 New Courses: AI & Data Science</span>
          <span>🏆 100% Placement Assistance</span>
          <span>📅 Last Date: May 30, 2026</span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2F4A8A] rounded-md" />
              <div>
                <h1 className="text-lg font-bold text-[#2F4A8A]">
                  Jayarani College Salem
                </h1>
                <p className="text-sm text-gray-500">
                  Arts & Science (Women)
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
              <button className="relative group flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#1f3a73] transition">

  {item.label}
  {item.children && <ChevronDown className="w-4 h-4" />}

  {/* Yellow Hover Animation */}
  <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

</button>

                  {/* DROPDOWN WITH SMOOTH ANIMATION */}
                 {item.children && (
  <div
    className={`absolute left-0 top-full pt-2 w-64
    transition-all duration-200
    ${
      activeDropdown === item.label
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`}
  >
    <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
      {item.children.map((child) => (
        <Link
          key={child.path}
          href={child.path}
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:text-[#1f3a73] transition"
        >
          {child.label}
        </Link>
      ))}
    </div>
  </div>
)}
                </div>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-[#2F4A8A]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b">

                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-gray-700"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex justify-between items-center py-3 px-4 text-gray-700"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* MOBILE DROPDOWN ANIMATION */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          mobileDropdown === item.label
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-6 pb-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 px-3 rounded transition"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MARQUEE ANIMATION ================= */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}