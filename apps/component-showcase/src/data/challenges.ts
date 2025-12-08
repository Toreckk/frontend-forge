import React from "react";
import { info as qrCode } from "../challenges/newbie/qr-code-component/info";
import { info as blogPreviewCard } from "../challenges/newbie/blog-preview-card/info";
import { info as socialLinksProfile } from "../challenges/newbie/social-links-profile/info";
import { info as resultsSummary } from "../challenges/newbie/results-summary/info";
import { info as githubUserSearch } from "../challenges/junior/github-user-search/info";
import { info as newsletter } from "../challenges/junior/newsletter-sign-up/info";
import { info as spaceTourism } from "../challenges/intermediate/space-tourism/info";
import type { ChallengeMeta } from "../types/challenge";

export const allChallenges: ChallengeMeta[] = [
  qrCode,
  blogPreviewCard,
  socialLinksProfile,
  resultsSummary,
  githubUserSearch,
  newsletter,
  spaceTourism,
];

export const challengeRegistry = allChallenges.reduce(
  (acc, challenge) => {
    acc[challenge.id] = challenge.component;
    return acc;
  },
  {} as Record<string, React.LazyExoticComponent<React.ComponentType>>
);
