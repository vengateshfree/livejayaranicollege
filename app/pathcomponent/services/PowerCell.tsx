import GenericPage from "@/components/GenericPage";

const PowerCell = () => (
  <GenericPage
    title="Jayarani Power Cell"
    subtitle="Spiritual growth and community service"
    breadcrumb="Home / Service Associations"
    sections={[
      { heading: "About the Cell", content: "The Jayarani Power Cell promotes spiritual growth, moral values, and community service among students. Through prayer meetings, social service activities, and value-based education programmes, the cell nurtures responsible citizens with a strong ethical foundation." },
    ]}
    features={["Community service programmes", "Value-based education", "Social outreach activities", "Village adoption programmes", "Blood donation drives", "Environmental campaigns", "Old age home visits", "Orphanage support programmes"]}
  />
);

export default PowerCell;
