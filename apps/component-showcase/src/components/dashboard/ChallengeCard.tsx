import { Link } from "react-router-dom";
import type { ChallengeMeta } from "../../types/challenge";
import { DifficultyBadge } from "./DifficultyBadge";

interface ChallengeCardProps {
  challenge: ChallengeMeta;
}

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  // Type badge colors
  const typeBadgeColors = {
    Free: "#3e54a3",
    "Free+": "#ff8f5e",
    Premium: "#e62878",
  };

  // Language colors
  const languageColors = {
    HTML: "text-blue-600",
    CSS: "text-teal-600",
    JS: "text-yellow-600",
    API: "text-slate-600",
  };

  return (
    <Link
      to={`/challenges/${challenge.id}`}
      className="group flex h-[450px] flex-col overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-shadow hover:shadow-lg"
    >
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-app)]">
        <img
          src={challenge.thumbnailUrl}
          alt={challenge.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        {/* Type Badge */}
        <div
          className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md"
          style={{ backgroundColor: typeBadgeColors[challenge.type] }}
        >
          {challenge.type}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)]">
          {challenge.title}
        </h3>

        {/* Meta Row: Technologies (Left) + Difficulty Badge (Right) */}
        <div className="flex items-center justify-between">
          {/* Technologies */}
          <div className="flex items-center gap-2">
            {challenge.languages.map((lang) => (
              <span
                key={lang}
                className={`text-lg font-bold ${languageColors[lang]}`}
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Difficulty Badge */}
          <DifficultyBadge
            level={challenge.level}
            difficulty={challenge.difficulty}
          />
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
          {challenge.description}
        </p>
      </div>
    </Link>
  );
}
