import { lazy } from "react";
import type { ChallengeMeta } from "../../../types/challenge";

const Component = lazy(() => import("./ResultsSummary"));

export const info: ChallengeMeta = {
  id: "results-summary",
  title: "Results summary component",
  thumbnailUrl:
    "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ib4mqpivabisoekqd7zr.jpg",
  status: "WIP",
  difficulty: "Newbie",
  level: 1,
  languages: ["HTML", "CSS"],
  description:
    "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.",
  component: Component,
};
