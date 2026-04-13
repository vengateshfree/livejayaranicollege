import PowerCell from "@/pages/services/PowerCell";
import WomenEmpowerment from "@/pages/services/WomenEmpowerment";

import NotFound from "../../Notfound";
import { ReactNode } from "react";

const routes: Record<string, ReactNode> = {
  "women-empowerment": <WomenEmpowerment />,
  "power-cell": <PowerCell />,
};

export default function ServicesSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return routes[params.slug] ?? <NotFound />;
}
