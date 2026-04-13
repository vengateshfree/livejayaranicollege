import React from 'react'
import HeroCarousel from './HeroCarousel';

function Hero() {

      const stats = [
    { value: "2000+", label: "Students" },
    { value: "100+", label: "Faculty" },
    { value: "95%", label: "Placement Rate" },
    { value: "6", label: "UG Programs" },
  ];

  return (
    <>
    <HeroCarousel/>
      <section className="relative -mt-16 z-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition duration-300"
        >
          {/* VALUE */}
          <p className="text-3xl md:text-4xl font-bold text-blue-900">
            {s.value}
          </p>

          {/* LABEL */}
          <p className="text-sm text-gray-600 mt-1">
            {s.label}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>
      </>
  )
}

export default Hero