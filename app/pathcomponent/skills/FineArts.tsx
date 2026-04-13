import GenericPage from "@/components/GenericPage";

const FineArts = () => (
  <GenericPage
    title="Fine Arts Club"
    subtitle="Celebrating creativity and artistic expression"
    breadcrumb="Home / Skill Development"
    sections={[
      { heading: "About the Club", content: "The Fine Arts Club provides a platform for students to explore and showcase their artistic talents in dance, music, drama, painting, and other performing arts. Regular practice sessions, inter-college competitions, and cultural events are organized throughout the year." },
    ]}
    features={["Annual cultural festival", "Inter-college competitions", "Dance and music workshops", "Theatre and drama performances", "Art exhibitions", "Talent shows", "Cultural exchange programmes", "Professional artist interactions"]}
  />
);

export default FineArts;
