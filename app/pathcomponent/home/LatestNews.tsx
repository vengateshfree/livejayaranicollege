"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// ✅ Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import Link from "next/link";

const LatestNews = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(events, "forming right noew")

// https://opensheet.elk.sh/1wb202NVx9rfK8DgXMcyY9e16kxomMgtHHI0PYw042pI/EventsData
  useEffect(() => {
    fetch("https://opensheet.elk.sh/1wb202NVx9rfK8DgXMcyY9e16kxomMgtHHI0PYw042pI/Sheet1")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore Our{" "}
          <span className="text-red-900">News & Services</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Stay updated and explore everything at JCS
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">

   <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>

  {loading ? (
    // ✅ Loader MUST be inside SwiperSlide
    <SwiperSlide>
      <div className="flex justify-center items-center h-48 w-full">
        <div className="w-10 h-10 border-4 border-red-900 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </SwiperSlide>
  ) : events.length > 0 ? (
    
    events.map((item, i) => (
      <SwiperSlide key={i}>
        <Link href={`/news/${encodeURIComponent(item.title)}`} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
          
          {/* Image */}
          <div className="overflow-hidden">
            <iframe
  src="https://drive.google.com/file/d/15iRYOT2VfSYfkAwsxUn0f7JoN2OzC40T/preview"
  width="100%"
  height="200"
></iframe>
 
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-900 transition">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {item.desc}
            </p>

            <span className="text-red-900 font-semibold text-sm">
              Read More →
            </span>
          </div>

        </Link>
      </SwiperSlide>
    ))

  ) : (
    // ✅ Empty state also inside SwiperSlide
    <SwiperSlide>
      <p className="text-center text-gray-500 w-screen py-10">
        No news available at the moment.
      </p>
    </SwiperSlide>
  )}

</Swiper>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-end">
        <Link href="/news" className="text-red-900 font-semibold text-sm">
          More News →
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;