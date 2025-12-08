import "./ScoreCard.css";

interface ScoreCardProps {
  score: number;
  maxScore: number;
  rating: string;
  description: string;
}

export const ScoreCard = ({
  score,
  maxScore,
  rating,
  description,
}: ScoreCardProps) => {
  return (
    <section className="score-card" aria-label="Overall test score">
      <div className="score-card__content">
        <p className="score-card__title">Your Result</p>
        <div
          className="score-card__circle"
          role="img"
          aria-label={`Score: ${score} out of ${maxScore}`}
        >
          <p className="score-card__value">{score}</p>
          <p className="score-card__total">of {maxScore}</p>
        </div>
        <div className="score-card__description">
          <p className="score-card__rating">{rating}</p>
          <p className="score-card__text">{description}</p>
        </div>
      </div>
    </section>
  );
};
