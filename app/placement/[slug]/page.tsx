// import Career from "@/pages/placement/Career";
// import Drives from "@/pages/placement/Drives";
// import Training from "@/pages/placement/Training";
// import NotFound from "@/pages/NotFound";

import Training from "@/app/pathcomponent/placement/Training";
import NotFound from "../../Notfound";
import { ReactNode } from "react";
import Career from "@/app/pathcomponent/placement/Career";
import Drives from "@/app/pathcomponent/placement/Drives";

const routes: Record<string, ReactNode> = {
  training: <Training />,
  career: <Career />,
  drives: <Drives />,
};

export default function PlacementSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return routes[params.slug] ?? <NotFound />;
}
