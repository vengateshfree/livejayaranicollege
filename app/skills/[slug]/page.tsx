// import FineArts from "@/pages/skills/FineArts";
// import Literary from "@/pages/skills/Literary";
// import Science from "@/pages/skills/Science";
import FineArts from "@/app/pathcomponent/skills/FineArts";
import NotFound from "../../Notfound";
import { ReactNode } from "react";
import Literary from "@/app/pathcomponent/skills/Literary";
import Science from "@/app/pathcomponent/skills/Science";

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
