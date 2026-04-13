import FineArts from "@/pages/skills/FineArts";
import Literary from "@/pages/skills/Literary";
import Science from "@/pages/skills/Science";
import NotFound from "../../Notfound";
import { ReactNode } from "react";

const routes: Record<string, ReactNode> = {
  "fine-arts": <FineArts />,
  literary: <Literary />,
  science: <Science />,
};

export default function SkillsSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return routes[params.slug] ?? <NotFound />;
}
