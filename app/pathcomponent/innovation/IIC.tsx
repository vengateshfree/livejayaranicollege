import GenericPage from "@/components/GenericPage";

const IIC = () => (
  <GenericPage
    title="Institutions' Innovation Council"
    subtitle="Fostering a culture of innovation among students and faculty"
    breadcrumb="Home / Innovation"
    sections={[
      { heading: "About IIC", content: "The Institutions' Innovation Council (IIC) is established under the guidelines of the Ministry of Education's Innovation Cell. It aims to create a vibrant local innovation ecosystem, promote startup culture, and build institutional capacity for innovation." },
      { heading: "Our Mission", content: "To systematically foster innovation culture in the institution, guide students towards startup creation, and build strong industry-academia partnerships for technology transfer and collaborative research." },
    ]}
    features={["Innovation workshops and bootcamps", "Ideathon and hackathon events", "Startup mentoring sessions", "Patent filing guidance", "Industry expert talks", "Innovation ambassador training", "National-level competition participation", "Entrepreneurial skill development"]}
  />
);

export default IIC;
