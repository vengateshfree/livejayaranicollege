"use client";

  import Layout from "@/components/Layout";
  import HeroCarousel from "@/components/HeroCarousel";
  import Link from "next/link";
  import { BookOpen, Users, Award, Briefcase, Lightbulb, Heart, GraduationCap, TrendingUp } from "lucide-react";
  import LatestNews from "./home/LatestNews";
  import EventsSection from "./home/EventsSection";

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

  const stats = [
    { value: "2000+", label: "Students" },
    { value: "100+", label: "Faculty" },
    { value: "95%", label: "Placement Rate" },
    { value: "6", label: "UG Programs" },
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

  const Index = () => (
    <Layout>
      <HeroCarousel />



      {/* Stats */} 
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 text-center shadow-elevated animate-counter">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
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

      {/* About */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="section-heading mt-2 mb-4 mx-auto">Excellence in Education Since Inception</h2>
          <p className="section-subheading mx-auto mb-8">
            Jayarani College of Arts & Science is committed to providing quality education, fostering innovation,
            and nurturing future leaders through a holistic approach to learning.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: GraduationCap, title: "Academic Excellence", desc: "Rigorous curriculum designed by industry experts and academic leaders." },
              { icon: Lightbulb, title: "Innovation Driven", desc: "Dedicated innovation centres and research development programmes." },
              { icon: Heart, title: "Holistic Growth", desc: "Focus on character building, social responsibility, and leadership." },
            ].map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-8 shadow-card card-hover text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Courses */}
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

      <LatestNews />
      <EventsSection />

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="gradient-primary rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join Jayarani College and unlock your potential with world-class education and opportunities.
            </p>
            <a href="/courses/ba-english" className="inline-flex px-8 py-3 rounded-lg gradient-gold text-secondary-foreground font-semibold hover:opacity-90 transition-opacity">
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );

  export default Index;
