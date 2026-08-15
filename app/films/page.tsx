import type { Metadata } from "next";

import { DivisionPage } from "@/components/division-page";
import { divisions } from "@/lib/content";

const division = divisions.films;

export const metadata: Metadata = {
  title: `${division.name} — ${division.discipline}`,
  description: division.intro,
  openGraph: { title: division.name, description: division.intro },
};

export default function FilmsPage() {
  return <DivisionPage division={division} />;
}
