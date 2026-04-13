import GenericPage from "@/components/GenericPage";

const Science = () => (
  <GenericPage
    title="Science Club"
    subtitle="Inspiring scientific curiosity and discovery"
    breadcrumb="Home / Skill Development"
    sections={[
      { heading: "About the Club", content: "The Science Club encourages scientific temper and curiosity among students through experiments, science fairs, guest lectures by scientists, and field trips to research institutions. It bridges the gap between theoretical learning and practical application." },
    ]}
    features={["Science fair and exhibitions", "Lab experiment demonstrations", "Guest lectures by scientists", "Field trips to research labs", "Science quiz competitions", "Project-based learning", "Environmental awareness drives", "National Science Day celebrations"]}
  />
);

export default Science;
