import CoursePage from "../../components/CoursePage";
const BScMaths = () => (
  <CoursePage
    title="B.Sc (Mathematics)"
    code="Bachelor of Science in Mathematics"
    duration="3 Years"
    seats="60"
    eligibility="10+2 with Mathematics"
    description="The B.Sc Mathematics programme provides deep understanding of pure and applied mathematics. Students develop strong analytical and problem-solving abilities sought after in research, education, and industry."
    highlights={["Research-oriented teaching", "Mathematical modelling workshops", "Competitive exam coaching", "National seminar participation", "Advanced computing lab", "Peer tutoring programmes"]}
    subjects={["Algebra", "Calculus", "Real Analysis", "Differential Equations", "Number Theory", "Statistics", "Numerical Methods", "Linear Programming"]}
    careers={["Data Scientist", "Actuary", "Statistician", "Research Analyst", "Teacher / Professor", "Quantitative Analyst", "Operations Research Analyst", "Cryptographer"]}
  />
);

export default BScMaths;
