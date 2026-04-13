// import Layout from "@/components/Layout";
import PageHeader from "../components/PageHeader";
import { ReactNode } from "react";

interface GenericPageProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  sections: { heading: string; content: string; icon?: ReactNode }[];
  features?: string[];
}

const GenericPage = ({ title, subtitle, breadcrumb, sections, features }: GenericPageProps) => (
  // <Layout>
  <>
    <PageHeader title={title} subtitle={subtitle} breadcrumb={breadcrumb} />
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="font-heading text-2xl font-semibold mb-4">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          ))}
          {features && features.length > 0 && (
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="font-heading text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  {/* </Layout> */}
);

export default GenericPage;
