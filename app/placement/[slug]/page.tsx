import Career from "@/pages/placement/Career";
import Drives from "@/pages/placement/Drives";
import Training from "@/pages/placement/Training";
// import NotFound from "@/pages/NotFound";

import NotFound from "../../Notfound";
import { ReactNode } from "react";

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
