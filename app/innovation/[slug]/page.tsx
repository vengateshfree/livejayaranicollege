import EDC from "@/pages/innovation/EDC";
import IIC from "@/pages/innovation/IIC";
import InfantCentre from "@/pages/innovation/InfantCentre";
import Research from "@/pages/innovation/Research";
// import NotFound from "@/pages/NotFound";

import NotFound from "../../Notfound";
import { ReactNode } from "react";

const routes: Record<string, ReactNode> = {
  iic: <IIC />,
  "infant-centre": <InfantCentre />,
  research: <Research />,
  edc: <EDC />,
};

export default function InnovationSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return routes[params.slug] ?? <NotFound />;
}
