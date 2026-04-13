import GenericPage from "@/components/GenericPage";

const Training = () => (
  <GenericPage
    title="Capacity Building Trainings"
    subtitle="Preparing students for industry readiness"
    breadcrumb="Home / Placement"
    sections={[
      { heading: "About the Programme", content: "Our Capacity Building Training programme bridges the gap between academic learning and industry expectations. Through aptitude training, soft skills development, technical workshops, and mock interviews, students are equipped to excel in campus recruitment drives." },
    ]}
    features={["Aptitude & reasoning training", "Soft skills workshops", "Group discussion practice", "Mock interview sessions", "Resume building workshops", "Technical skill enhancement", "Communication skills training", "Industry readiness assessments"]}
  />
);

export default Training;
