import GenericPage from "@/components/GenericPage";

const EDC = () => (
  <GenericPage
    title="Entrepreneurship Development Cell"
    subtitle="Building tomorrow's entrepreneurs today"
    breadcrumb="Home / Innovation"
    sections={[
      { heading: "About EDC", content: "The Entrepreneurship Development Cell inspires and equips students with the skills needed to start and manage their own ventures. Through workshops, mentoring, and exposure to successful entrepreneurs, we create a robust startup ecosystem." },
      { heading: "Activities", content: "EDC conducts business plan competitions, startup boot camps, investor pitch events, and field visits to successful startups. Students receive one-on-one mentoring from experienced entrepreneurs and access to seed funding opportunities." },
    ]}
    features={["Business plan competitions", "Startup boot camps", "Investor pitch sessions", "Mentoring by entrepreneurs", "Field visits to startups", "Seed funding guidance", "E-commerce training", "Annual entrepreneur summit"]}
  />
);

export default EDC;
