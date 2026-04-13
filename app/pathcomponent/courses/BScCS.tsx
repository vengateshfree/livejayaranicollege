import CoursePage from "../../components/CoursePage";

const BScCS = () => (
  <CoursePage
    title="B.Sc (Computer Science)"
    code="Bachelor of Science in Computer Science"
    duration="3 Years"
    seats="60"
    eligibility="10+2 with Maths/Computer Science"
    description="B.Sc Computer Science equips students with comprehensive knowledge in programming, software engineering, and emerging technologies. The programme emphasizes practical skills through lab work, projects, and industry internships."
    highlights={["Modern computer labs", "Industry internship programme", "Hackathon participation", "Cloud computing training", "Open source contributions", "Placement assistance"]}
    subjects={["Programming in Java", "Data Structures", "Operating Systems", "Database Systems", "Computer Networks", "Software Engineering", "Web Technologies", "Python Programming"]}
    careers={["Software Engineer", "Web Developer", "System Analyst", "Database Administrator", "Network Engineer", "QA Tester", "IT Consultant", "Cyber Security Analyst"]}
  />
);

export default BScCS;
