import GenericPage from "@/components/GenericPage";

const WomenEmpowerment = () => (
  <GenericPage
    title="Women Empowerment Cell"
    subtitle="Empowering women through education and awareness"
    breadcrumb="Home / Service Associations"
    sections={[
      { heading: "About the Cell", content: "The Women Empowerment Cell is dedicated to promoting gender equality, safety, and the overall development of women students. Through awareness programmes, self-defence training, legal awareness camps, and motivational talks, the cell empowers students to become confident and self-reliant." },
    ]}
    features={["Self-defence training", "Gender sensitization workshops", "Legal awareness camps", "Health and wellness programmes", "Motivational speaker sessions", "Career guidance for women", "Anti-harassment awareness", "Women's Day celebrations"]}
  />
);

export default WomenEmpowerment;
