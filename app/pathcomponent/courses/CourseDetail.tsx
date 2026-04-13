import Link from "next/link";
import {
  BookOpen,
  Laptop,
  Calculator,
  Brain,
  TrendingUp,
  Globe,
} from "lucide-react";
// import Layout from "@/components/Layout";

const courseSections = [
  // ✅ UG
  {
    titlenew: "Explore Our",
    title: "UG Courses (3 Years)",
    desc: "Our undergraduate programs are designed to build strong academic foundations, practical skills, and career-ready knowledge across science, commerce, and arts streams.",
    data: [
      { name: "B.Sc. Computer Science (AI & DS)", desc: "AI & Data Science specialization", path: "/courses/bsc-ai-ds", icon: Brain, image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=1200&auto=format&fit=crop" },
      { name: "B.Sc. Computer Science", desc: "Core computing & programming", path: "/courses/bsc-cs", icon: Laptop, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
      { name: "B.Sc. Mathematics", desc: "Mathematics & analytical thinking", path: "/courses/bsc-maths", icon: Calculator, image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop" },
      { name: "B.Sc. Physics", desc: "Fundamentals of physical sciences", path: "/courses/bsc-physics", icon: Globe, image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1200&auto=format&fit=crop" },
      { name: "B.Com. Computer Applications", desc: "Commerce integrated with IT", path: "/courses/bcom-ca", icon: Laptop, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" },
      { name: "B.Com. General", desc: "Business, finance & accounting basics", path: "/courses/bcom", icon: TrendingUp, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop" },
      { name: "B.A. English", desc: "Language, literature & communication", path: "/courses/ba-english", icon: BookOpen, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" },
    ],
  },

  // ✅ PG
  {
    titlenew: "Advance Your Career with",
    title: "PG Courses (2 Years)",
    desc: "Our postgraduate programs focus on advanced knowledge, research skills, and specialization to help students excel in academics, industry, and competitive careers.",
    data: [
      { name: "M.A. Tamil", desc: "Tamil literature & research", path: "/courses/ma-tamil", icon: BookOpen, image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop" },
      { name: "M.A. History (E/T Medium)", desc: "Historical analysis & research", path: "/courses/ma-history", icon: Globe, image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200&auto=format&fit=crop" },
      { name: "M.A. Economics (E/T Medium)", desc: "Economic theories & applications", path: "/courses/ma-economics", icon: TrendingUp, image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop" },
      { name: "M.A. Sociology (E/T Medium)", desc: "Social systems & behavior", path: "/courses/ma-sociology", icon: Globe, image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop" },
      { name: "M.A. English", desc: "Advanced language & literature", path: "/courses/ma-english", icon: BookOpen, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop" },
      { name: "M.Com.", desc: "Commerce & financial expertise", path: "/courses/mcom", icon: TrendingUp, image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" },
      { name: "M.Sc. Mathematics", desc: "Advanced mathematical concepts", path: "/courses/msc-maths", icon: Calculator, image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop" },
      { name: "MBA", desc: "Leadership & business management", path: "/courses/mba", icon: TrendingUp, image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" },
      { name: "MCA", desc: "Advanced software & applications", path: "/courses/mca", icon: Laptop, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" },
    ],
  },

  // ✅ Diploma
  {
    titlenew: "Build Practical Skills with",
    title: "Diploma Courses (1 Year)",
    desc: "Our diploma programs provide industry-relevant practical knowledge and hands-on training to prepare students for immediate employment opportunities.",
    data: [
      { name: "Diploma in Social Welfare Administration", desc: "Social service & welfare", path: "/courses/diploma-social", icon: Globe, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" },
      { name: "Diploma in NGO Management", desc: "NGO operations & leadership", path: "/courses/diploma-ngo", icon: Globe, image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop" },
      { name: "Diploma in Digital Marketing", desc: "SEO & online marketing", path: "/courses/diploma-digital", icon: TrendingUp, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" },
      { name: "Diploma in Financial Planning", desc: "Finance & investment skills", path: "/courses/diploma-finance", icon: TrendingUp, image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop" },
    ],
  },

  // ✅ Certificate
  {
    titlenew: "Enhance Your Skills with",
    title: "Certificate Courses (6 Months)",
    desc: "Short-term certificate programs designed to enhance employability, technical expertise, and specialized skills in various domains.",
    data: [
      { name: "Rural Development & Panchayat Raj", desc: "Village development systems", path: "/courses/rural", icon: Globe, image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Social Entrepreneurship", desc: "Impact-driven startups", path: "/courses/social", icon: Brain, image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" },
      { name: "Library & Information Science", desc: "Library systems", path: "/courses/library", icon: BookOpen, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop" },
      { name: "Data Visualisation", desc: "Analytics & data insights", path: "/courses/data", icon: Brain, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" },
      { name: "Tally with GST", desc: "Accounting & GST tools", path: "/courses/tally", icon: Calculator, image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop" },
      { name: "Environmental Impact Assessment", desc: "Environmental studies", path: "/courses/environment", icon: Globe, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop" },
      { name: "Disaster Management", desc: "Emergency response skills", path: "/courses/disaster", icon: Globe, image: "https://images.unsplash.com/photo-1581091215367-59ab6b5a6b57?q=80&w=1200&auto=format&fit=crop" },
      { name: "GST Filing", desc: "Tax filing & compliance", path: "/courses/gst", icon: Calculator, image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" },
    ],
  },
];

const CourseSection = () => {
  return (
      // <Layout>
    <section className="py-20 bg-gray-50">
      {courseSections.map((section, index) => (
        <div key={index} className="mb-20">
          <div className="max-w-7xl mx-auto px-6 mb-10">
            <h1 className="text-4xl md:text-4xl font-bold leading-tight">
              {section.titlenew}{" "}
              <span className="text-red-900">{section.title}</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
              {section.desc}
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.data.map((course, i) => {
              const Icon = course.icon;

              return (
                <Link
                  key={i}
                  href={course.path}
                  className="group relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-xl shadow-md">
                    <Icon className="w-6 h-6 text-red-900" />
                  </div>

                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold">
                      {course.name}
                    </h3>

                    <p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition">
                      {course.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* ✅ Extra Info */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            Additional Programs & Opportunities
          </h3>

          <p className="text-gray-700 mb-3">
            <strong>Open & Distance Learning (ODL):</strong> Flexible UG & PG programs available for both boys & girls, enabling students to pursue education alongside other commitments.
          </p>

          <p className="text-gray-700">
            <strong>Add-On Skill Courses:</strong> Aari Work, Beautician, Driving, Typewriting, French & German,
            NPTEL–SWAYAM (IIT), TNPSC / Banking / SEBI Coaching, Basic Computing, Tally & ERP — designed to enhance employability and practical skills.
          </p>
        </div>
      </div>
    </section>
    // </Layout>
  );
};

export default CourseSection;