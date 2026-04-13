import GenericPage from "@/components/GenericPage";

const Career = () => (
  <GenericPage
    title="Career Development Programmes"
    subtitle="Guiding students towards successful careers"
    breadcrumb="Home / Placement"
    sections={[
      { heading: "About the Programme", content: "Career Development Programmes provide students with industry insights, career counselling, and professional development opportunities. Regular seminars by industry leaders, career fairs, and one-on-one mentoring sessions help students make informed career decisions." },
    ]}
    features={["Industry expert seminars", "Career counselling sessions", "Personality development", "Professional certification support", "Competitive exam coaching", "Higher education guidance", "Industry visit programmes", "Alumni mentoring network"]}
  />
);

export default Career;
