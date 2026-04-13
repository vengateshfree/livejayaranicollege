import GenericPage from "@/components/GenericPage";

const Drives = () => (
  <GenericPage
    title="On/Off Campus Drives"
    subtitle="Connecting students with top employers"
    breadcrumb="Home / Placement"
    sections={[
      { heading: "About Campus Drives", content: "Our placement cell organizes regular on-campus and off-campus recruitment drives with leading companies across IT, banking, finance, and corporate sectors. With a strong industry network and dedicated placement team, we ensure maximum placement opportunities for our students." },
      { heading: "Placement Record", content: "Over the years, our students have been placed in reputed organizations with competitive salary packages. Our placement rate consistently exceeds 90%, reflecting the quality of our training and the calibre of our graduates." },
    ]}
    features={["Regular on-campus drives", "Off-campus placement support", "IT sector recruitments", "Banking sector opportunities", "Corporate sector placements", "Pre-placement training", "Company-specific preparation", "Alumni referral programme"]}
  />
);

export default Drives;
