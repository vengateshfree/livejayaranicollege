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
      { label: "Capacity Building Trainings", path: "/placement/training" },
      { label: "Career Development Programmes", path: "/placement/career" },
      { label: "On/Off Campus Drives", path: "/placement/drives" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50">
      <nav className="z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
        <div className="container mx-auto px-4">

          {/* Top bar */}
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/placeholder.svg"
                alt="Jayarani College Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h1 className="text-lg font-heading font-bold text-primary leading-tight">
                  Jayarani College Salem
                </h1>
                <p className="text-sm text-muted-foreground">
                  Arts & Science (Women)
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  
                  // ✅ FIXED HOVER LOGIC ONLY
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      className="nav-link px-4 py-2 block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="nav-link px-4 py-2 flex items-center gap-1">
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                  )}

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div
                      className="absolute top-full right-0 min-w-[280px] bg-card rounded-lg shadow-elevated border border-border py-2 animate-fade-in z-50"

                      // ✅ IMPORTANT FIX: prevents flicker when moving into dropdown
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      className="block py-3 px-4 text-sm font-medium text-foreground hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-3 px-4 text-sm font-medium text-foreground"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === item.label && item.children && (
                        <div className="pl-6">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;