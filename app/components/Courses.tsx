import Link from 'next/link';
import React from 'react'

function Courses() {

    
  const courses = [
    {
      name: "B.A. (English)",
      path: "/courses/ba-english",
      desc: "Master the art of language and literature",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "B.Com (Commerce)",
      path: "/courses/bcom",
      desc: "Build a strong foundation in commerce",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "B.Com CA",
      path: "/courses/bcom-ca",
      desc: "Commerce meets computer applications",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "B.Sc (Maths)",
      path: "/courses/bsc-maths",
      desc: "Explore the world of mathematics",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "B.Sc (Computer Science)",
      path: "/courses/bsc-cs",
      desc: "Shape the future with technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "B.Sc CS AI & DS",
      path: "/courses/bsc-ai-ds",
      desc: "Artificial Intelligence & Data Science",
      image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

      const features = [
    {
      title: "Life at JCS",
      desc: "At Jayarani College, life is more than just lectures and labs...",
      image: "https://images.pexels.com/photos/5211457/pexels-photo-5211457.jpeg",
    },
    {
      title: "Collaborate at JCS",
      desc: "We believe in industry-academia partnerships to drive innovation.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "Studying at JCS",
      desc: "Join our vibrant community of learners, dreamers, and achievers.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    },
  ];
  return (
    <>
    
          <section className="pt-16 pb-32 bg-gray-50">
        
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Welcome to{" "}
      <span className="text-red-900">Jayarani College</span>
    </h1>

    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
      Where knowledge meets empowerment, and every woman is inspired to achieve excellence.
    </p>
  </div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

    {features.map((item, i) => (
      <div
        key={i}
        className="group relative rounded-2xl overflow-visible "
      >

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-80 object-cover"
        />

        {/* Glass Card */}
        <div className="absolute -bottom-20 left-0 right-0 m-4 p-5 rounded-xl bg-blue-900/90 backdrop-blur-md border border-white/20 text-white transition group-hover:bg-blue-900/80">
          
          <h3 className="text-lg font-semibold mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-white/80">
            {item.desc}
          </p>

        </div>

      </div>
    ))}

  </div>

      </section>

         <section className="py-20 bg-accent/50">
      <div className="max-w-7xl mx-auto px-6 mb-16">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Explore to{" "}
      <span className="text-red-900">Our Courses</span>
    </h1>

    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
      Choose from a wide range of programs designed to empower students with knowledge, skills, and real-world experience.

    </p>
  </div>

      <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {courses.map((c, i) => (
        <Link
          href={c.path}
          key={c.name}
          className="group relative rounded-2xl overflow-hidden shadow-lg"
        >
          
          {/* Image */}
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 p-6 text-white">
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition">
              {c.name}
            </h3>

            <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition duration-300">
              {c.desc}
            </p>

          </div>

        </Link>
      ))}

    </div>
  </div>
  <div className="max-w-7xl mx-auto px-6 mt-10 flex justify-end">
    <Link href="/courses" className="text-red-900 font-semibold text-sm">
      More Courses →
    </Link>
  </div>
      </section>
    </>
  )
}

export default Courses