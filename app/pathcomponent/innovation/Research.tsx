import GenericPage from "@/components/GenericPage";

const Research = () => (
  <GenericPage
    title="Research & Development"
    subtitle="Advancing knowledge through quality research"
    breadcrumb="Home / Innovation"
    sections={[
      { heading: "Research Vision", content: "Our R&D cell promotes a research-oriented mindset among faculty and students. We encourage interdisciplinary research, publication in reputed journals, and participation in national and international conferences." },
      { heading: "Focus Areas", content: "Research is conducted across multiple domains including Data Science, Environmental Studies, Commerce & Finance, English Literature, and Applied Mathematics. Faculty members actively guide students in research methodology and project execution." },
    ]}
    features={["Research methodology workshops", "Journal publication support", "Conference participation funding", "Interdisciplinary collaboration", "Student research grants", "Research seminar series", "Collaboration with universities", "Annual research symposium"]}
  />
);

export default Research;
