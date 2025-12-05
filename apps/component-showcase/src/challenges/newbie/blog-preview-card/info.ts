import { lazy } from "react";
import type { ChallengeMeta } from "../../../types/challenge";

const Component = lazy(() => import("./BlogPreviewCard"));

export const info: ChallengeMeta = {
  id: "blog-preview-card",
  title: "Blog preview card component",
  thumbnailUrl:
    "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/kaiwxzdh90xhbdwsstvl.jpg",
  status: "WIP",
  difficulty: "Newbie",
  level: 1,
  languages: ["HTML", "CSS"],
  description:
    "This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",
  component: Component,
};
