import GenericPage from "@/components/GenericPage";

const Literary = () => (
  <GenericPage
    title="Literary Club"
    subtitle="Nurturing the power of words and expression"
    breadcrumb="Home / Skill Development"
    sections={[
      { heading: "About the Club", content: "The Literary Club fosters a love for reading, writing, and public speaking. Through debates, essay competitions, book clubs, and creative writing workshops, students develop strong communication skills and literary appreciation." },
    ]}
    features={["Debate competitions", "Essay writing contests", "Book club sessions", "Creative writing workshops", "Poetry recital events", "Public speaking training", "Annual literary magazine", "Author meet-and-greet sessions"]}
  />
);

export default Literary;
