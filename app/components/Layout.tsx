import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">

    

    <div>
 
      <div className="bg-primary text-white py-2 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 text-sm font-medium">

          {/* First copy */}
          <div className="flex gap-10">
            <span>🎓 Admissions Open 2026 – Apply Now!</span>
            <span>📢 New Courses Available: AI & Data Science</span>
            <span>🏆 100% Placement Assistance</span>
            <span>📅 Last Date to Apply: May 30, 2026</span>
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex gap-10">
            <span>🎓 Admissions Open 2026 – Apply Now!</span>
            <span>📢 New Courses Available: AI & Data Science</span>
            <span>🏆 100% Placement Assistance</span>
            <span>📅 Last Date to Apply: May 30, 2026</span>
          </div>
          <div className="flex gap-10">
            <span>🎓 Admissions Open 2026 – Apply Now!</span>
            <span>📢 New Courses Available: AI & Data Science</span>
            <span>🏆 100% Placement Assistance</span>
            <span>📅 Last Date to Apply: May 30, 2026</span>
          </div>

        </div>
      </div>
    </div>

    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
