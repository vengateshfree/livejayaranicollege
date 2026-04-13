import CoursePage from "../../components/CoursePage";

const BScAIDS = () => (
  <CoursePage
    title="B.Sc CS AI & DS"
    code="Artificial Intelligence & Data Science"
    duration="3 Years"
    seats="60"
    eligibility="10+2 with Maths/Computer Science"
    description="This cutting-edge programme covers Artificial Intelligence, Machine Learning, and Data Science. Students work with real-world datasets and AI tools, preparing them for the most in-demand careers in the tech industry."
    highlights={["AI/ML dedicated lab", "Industry collaboration projects", "Research paper publication support", "Kaggle competition participation", "IBM/Google certifications", "Startup incubation support"]}
    subjects={["Machine Learning", "Deep Learning", "Data Analytics", "Natural Language Processing", "Computer Vision", "Big Data", "Neural Networks", "Statistical Modelling"]}
    careers={["AI Engineer", "Data Scientist", "ML Engineer", "Data Analyst", "AI Researcher", "Business Intelligence Analyst", "NLP Specialist", "Robotics Engineer"]}
  />
);

export default BScAIDS;
