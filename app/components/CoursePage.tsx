// import Layout from "@/components/Layout";
import PageHeader from "../components/PageHeader";
import { BookOpen, Clock, Users, Award, CheckCircle, Star } from "lucide-react";

interface CoursePageProps {
  title: string;
  code: string;
  duration: string;
  seats: string;
  eligibility: string;
  image: string;
  content: {
    objectives: string[];
    vision: string;
    mission: string[];
    features: string[];
    blendedLearning: string;
    activities: string[];
    addOnCourses: string[];
    benefits: string[];
    empowerment: string[];
  };
}

const CoursePage = ({ title, code, duration, seats, eligibility, image, content }: CoursePageProps) => (
  // <Layout>
  <>
    <PageHeader image={image} title={title} subtitle={code} breadcrumb="Home / Courses" />

    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">

            <div>
              <h2 className="text-2xl text-red-900 font-semibold mb-4">Objectives of the Department</h2>
              <ul className="space-y-2 text-muted-foreground">
                {content.objectives.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-5 rounded-xl shadow">
                <h3 className="font-semibold mb-2 text-blue-900">Vision</h3>
                <p className="text-sm text-muted-foreground">{content.vision}</p>
              </div>

              <div className="bg-card p-5 rounded-xl shadow">
                <h3 className="font-semibold mb-2 text-blue-900">Mission</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {content.mission.map((m, idx) => <li key={idx}>{m}</li>)}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-red-900">Features of the Department</h2>
              <ul className="space-y-2 text-muted-foreground">
                {content.features.map((f, idx) => <li key={idx}>• {f}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-red-900">Blended Learning Approach</h2>
              <p className="text-muted-foreground">{content.blendedLearning}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-red-900">Department Activities</h2>
              <ul className="space-y-2 text-muted-foreground">
                {content.activities.map((a, idx) => <li key={idx}>• {a}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-red-900">Add-On Courses</h2>
           <div className="flex flex-wrap gap-2">
  {content.addOnCourses.map((c, idx) => (
    <span
      key={idx}
      className="bg-accent px-3 py-1 rounded-full text-sm flex items-center gap-1 text-blue-900"
    >
      <Star className="w-4 h-4 text-blue-900" />
      {c}
    </span>
  ))}
</div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-red-900">Key Benefits</h2>
              <ul className="space-y-2 text-muted-foreground">
                {content.benefits.map((b, idx) => <li key={idx}>• {b}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-red-900">How We Empower You</h2>
              <ul className="space-y-2 text-muted-foreground">
                {content.empowerment.map((e, idx) => <li key={idx}>• {e}</li>)}
              </ul>
            </div>

          </div>
          {/* RIGHT SIDEBAR */}
          <div>
            <div className="bg-card rounded-xl shadow p-6 sticky top-28 space-y-5">
              <h3 className="font-semibold text-red-900">Quick Info</h3>

              {[
                { icon: Clock, label: "Duration", value: duration },
                { icon: Users, label: "Seats", value: seats },
                { icon: BookOpen, label: "Eligibility", value: eligibility },
                { icon: Award, label: "Affiliation", value: "University Affiliated" }
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-center">
                  <item.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              <button className="w-full py-3 bg-primary text-white rounded-lg">Apply Now</button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  // </Layout> 
);

export default CoursePage;