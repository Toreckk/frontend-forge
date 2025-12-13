import { lazy } from "react";
import type { ChallengeMeta } from "../../../types/challenge";

const Component = lazy(() => import("./MortgageCalculator"));

export const info: ChallengeMeta = {
  id: "mortgage-calculator",
  title: "Mortgage calculator component",
  thumbnailUrl:
    "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ep8l77qejuek0qsmrwsn.jpg",
  status: "WIP",
  difficulty: "Junior",
  level: 2,
  languages: ["HTML", "CSS", "JS"],
  description:
    "This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM. Remember to focus on accessibility, too!",
  component: Component,
};
