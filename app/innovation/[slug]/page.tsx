// import EDC from "../";
// import IIC from "@/pages/innovation/IIC";
// import InfantCentre from "@/pages/innovation/InfantCentre";
// import Research from "@/pages/innovation/Research";
// import NotFound from "@/pages/NotFound";

import IIC from "@/app/pathcomponent/innovation/IIC";
import NotFound from "../../Notfound";
import { ReactNode } from "react";
import InfantCentre from "@/app/pathcomponent/innovation/InfantCentre";
import Research from "@/app/pathcomponent/innovation/Research";
import EDC from "@/app/pathcomponent/innovation/EDC";

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
