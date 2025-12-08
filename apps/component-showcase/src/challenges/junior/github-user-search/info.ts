import { lazy } from "react";
import type { ChallengeMeta } from "../../../types/challenge";

const Component = lazy(() => import("./GithubUserSearch"));

export const info: ChallengeMeta = {
  id: "github-user-search",
  title: "GitHub user search component",
  thumbnailUrl:
    "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vnhorbifareii6uedrt4.jpg",
  status: "WIP",
  difficulty: "Junior",
  level: 2,
  languages: ["HTML", "CSS", "JS", "API"],
  description:
    "In this project, you'll use the GitHub users API to pull profile data and display it. It's a great challenge if you're looking to practice working with a 3rd-party API.",
  component: Component,
};
