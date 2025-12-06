import { lazy } from "react";
import type { ChallengeMeta } from "../../../types/challenge";

const Component = lazy(() => import("./SocialLinksProfile"));

export const info: ChallengeMeta = {
  id: "social-links-profile",
  title: "Social links profile component",
  thumbnailUrl:
    "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/sfsa14rwjz0wp7lzel2x.jpg",
  status: "Completed",
  difficulty: "Newbie",
  level: 1,
  languages: ["HTML", "CSS"],
  description:
    "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",
  component: Component,
};
