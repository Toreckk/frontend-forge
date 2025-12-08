import "./ResultsSummary.css";
import type { SummaryCategory } from "./types";
import { ScoreCard } from "./components/ScoreCard";
import { SummaryCard } from "./components/SummaryCard";
import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";

const ResultsSummary = () => {
  const summaryData: SummaryCategory[] = [
    {
      id: "reaction",
      name: "Reaction",
      icon: iconReaction,
      score: 80,
      maxScore: 100,
      variant: "red",
    },
    {
      id: "memory",
      name: "Memory",
      icon: iconMemory,
      score: 92,
      maxScore: 100,
      variant: "yellow",
    },
    {
      id: "verbal",
      name: "Verbal",
      icon: iconVerbal,
      score: 61,
      maxScore: 100,
      variant: "green",
    },
    {
      id: "visual",
      name: "Visual",
      icon: iconVisual,
      score: 72,
      maxScore: 100,
      variant: "blue",
    },
  ];

  return (
    <div className="results-container">
      <main className="results-wrapper" role="main">
        <article className="results-card" aria-label="Test results summary">
          <ScoreCard
            score={76}
            maxScore={100}
            rating="Great"
            description="You scored higher than 65% of the people who have taken these tests."
          />
          <SummaryCard categories={summaryData} />
        </article>
      </main>
    </div>
  );
};

export default ResultsSummary;
