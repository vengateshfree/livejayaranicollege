import CoursePage from "../../components/CoursePage";

const BCom = () => (
  <CoursePage
    title="B.Com (Commerce)"
    code="Bachelor of Commerce"
    duration="3 Years"
    seats="120"
    eligibility="10+2 in Commerce/any stream"
    description="The B.Com programme provides a thorough grounding in commerce, accounting, finance, and business management. It prepares students for careers in banking, finance, and corporate sectors with practical knowledge and industry exposure."
    highlights={["Industry-oriented curriculum", "Tally & accounting software training", "Bank visit programmes", "Mock stock trading sessions", "CA/CMA foundation coaching", "Entrepreneurship workshops"]}
    subjects={["Financial Accounting", "Cost Accounting", "Business Law", "Corporate Finance", "Taxation", "Banking & Insurance", "Business Statistics", "Management Principles"]}
    careers={["Chartered Accountant", "Financial Analyst", "Bank Officer", "Tax Consultant", "Company Secretary", "Business Manager", "Auditor", "Insurance Advisor"]}
  />
);

export default BCom;
