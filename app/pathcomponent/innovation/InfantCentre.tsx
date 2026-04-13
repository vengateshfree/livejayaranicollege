import GenericPage from "@/components/GenericPage";

const InfantCentre = () => (
  <GenericPage
    title="Infant Innovation Centre"
    subtitle="Nurturing creative ideas into impactful solutions"
    breadcrumb="Home / Innovation"
    sections={[
      { heading: "About the Centre", content: "The Infant Innovation Centre provides a creative space where students can experiment, prototype, and develop their innovative ideas. Equipped with modern tools and mentored by experts, it bridges the gap between academic learning and real-world problem solving." },
      { heading: "Facilities", content: "The centre features a maker space with 3D printers, IoT kits, robotics equipment, and software development stations. Regular workshops, design thinking sessions, and prototype development camps are conducted throughout the year." },
    ]}
    features={["Maker space with modern equipment", "3D printing and prototyping", "IoT and robotics lab", "Design thinking workshops", "Mentorship from industry experts", "Funding support for promising ideas", "Inter-college innovation challenges", "Annual innovation expo"]}
  />
);

export default InfantCentre;
