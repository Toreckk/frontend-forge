import type { Difficulty } from "../../types/challenge";

interface DifficultyBadgeProps {
  level: number;
  difficulty: Difficulty;
}

export function DifficultyBadge({ level, difficulty }: DifficultyBadgeProps) {
  const colorMap = {
    Newbie: "#6abecd",
    Junior: "#aad742",
    Intermediate: "#f1b604",
    Advanced: "#f48925",
    Guru: "#ed2c49",
  };

  const color = colorMap[difficulty];

  return (
    <div
      className="inline-flex items-center overflow-hidden rounded-md border-2"
      style={{ borderColor: color }}
    >
      <span
        className="px-2 py-1 text-xs font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {level}
      </span>
      <span
        className="px-2 py-1 text-xs font-bold uppercase tracking-wide"
        style={{ color }}
      >
        {difficulty}
      </span>
    </div>
  );
}
