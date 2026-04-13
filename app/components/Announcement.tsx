import { useEffect, useRef, useState } from "react";

const AnnouncementBar = () => {
  const contentRef = useRef(null);
  const [repeat, setRepeat] = useState(2);

  useEffect(() => {
    const updateRepeat = () => {
      const width = contentRef.current.offsetWidth;
      const screenWidth = window.innerWidth;

      // Calculate how many times needed to fill + overflow
      const needed = Math.ceil((screenWidth * 2) / width);
      setRepeat(needed);
    };

    updateRepeat();
    window.addEventListener("resize", updateRepeat);
    return () => window.removeEventListener("resize", updateRepeat);
  }, []);

  const text = (
    <>
      🎓 Admissions Open 2026 – Apply Now! &nbsp;&nbsp;|&nbsp;&nbsp;
      📢 New Courses Available: AI & Data Science &nbsp;&nbsp;|&nbsp;&nbsp;
      🏆 100% Placement Assistance &nbsp;&nbsp;|&nbsp;&nbsp;
      📅 Last Date to Apply: May 30, 2026 &nbsp;&nbsp;|&nbsp;&nbsp;
    </>
  );

  return (
    <div className="bg-primary text-white py-2 overflow-hidden">
      <div className="flex animate-marquee w-max">
        {/* Hidden original to measure width */}
        <div ref={contentRef} className="flex whitespace-nowrap gap-10 px-4">
          {text}
        </div>

        {/* Infinite repeated copies */}
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex whitespace-nowrap gap-10 px-4">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;