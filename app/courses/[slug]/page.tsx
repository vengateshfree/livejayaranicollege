import BAEnglish from "../../pathcomponent/courses/BAEnglish";
import BCom from "../../pathcomponent/courses/BCom";
import BComCA from "../../pathcomponent/courses/BComCA";
import BScAIDS from "../../pathcomponent/courses/BScAIDS";
import BScCS from "../../pathcomponent/courses/BScCS";
import BScMaths from "../../pathcomponent/courses/BScMaths";
// import NotFound from "@/pages/NotFound";

import NotFound from "../../Notfound";
import { ReactNode } from "react";
import CoursePage from "../../components/CoursePage";

const routes: Record<string, ReactNode> = {
  "ba-english": <BAEnglish />,
  bcom: <BCom />,
  "bcom-ca": <BComCA />,
  "bsc-maths": <BScMaths />,
  "bsc-cs": <BScCS />,
  "bsc-ai-ds": <BScAIDS />,
};

const fallbackCourseTitles: Record<string, string> = {
  "bsc-physics": "B.Sc. Physics",
  "ma-tamil": "M.A. Tamil",
  "ma-history": "M.A. History (E/T Medium)",
  "ma-economics": "M.A. Economics (E/T Medium)",
  "ma-sociology": "M.A. Sociology (E/T Medium)",
  "ma-english": "M.A. English",
  mcom: "M.Com.",
  "msc-maths": "M.Sc. Mathematics",
  mba: "MBA",
  mca: "MCA",
  "diploma-social": "Diploma in Social Welfare Administration",
  "diploma-ngo": "Diploma in NGO Management",
  "diploma-digital": "Diploma in Digital Marketing",
  "diploma-finance": "Diploma in Financial Planning",
  rural: "Rural Development & Panchayat Raj",
  social: "Social Entrepreneurship",
  library: "Library & Information Science",
  data: "Data Visualisation",
  tally: "Tally with GST",
  environment: "Environmental Impact Assessment",
  disaster: "Disaster Management",
  gst: "GST Filing",
};

function GenericCoursePage({ title }: { title: string }) {
  return (
    <CoursePage
      title={title}
      code={title}
      duration="As per program curriculum"
      seats="As per college norms"
      eligibility="As per admission requirements"
      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
      content={{
        objectives: [
          "To provide strong academic foundations and practical knowledge.",
          "To build communication, analytical, and career-ready skills.",
          "To support holistic development through co-curricular learning.",
        ],
        vision:
          "To nurture confident learners with academic excellence and social responsibility.",
        mission: [
          "Deliver student-centered learning with quality teaching practices.",
          "Encourage innovation, discipline, and ethical values.",
          "Prepare students for higher studies, careers, and entrepreneurship.",
        ],
        features: [
          "Structured curriculum with learner-focused delivery.",
          "Regular academic activities and skill development sessions.",
          "Guidance and mentoring support for student success.",
        ],
        blendedLearning:
          "The program follows a blended approach combining classroom learning with digital resources and practical activities.",
        activities: [
          "Seminars, workshops, and student forums.",
          "Skill-based clubs and academic competitions.",
          "Career guidance and placement support activities.",
        ],
        addOnCourses: [
          "Communication Skills",
          "Computer Applications",
          "Career Readiness",
        ],
        benefits: [
          "Conceptual understanding and practical application",
          "Enhanced employability and higher education readiness",
          "Personal growth with confidence and leadership",
        ],
        empowerment: [
          "Mentorship from experienced faculty members.",
          "Opportunities for practical exposure and internships.",
          "Career support for placement and competitive pathways.",
        ],
      }}
    />
  );
}

export default function CourseSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  if (routes[params.slug]) {
    return routes[params.slug];
  }

  if (fallbackCourseTitles[params.slug]) {
    return <GenericCoursePage title={fallbackCourseTitles[params.slug]} />;
  }

  return <NotFound />;
}
