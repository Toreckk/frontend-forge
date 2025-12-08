import "./SummaryCard.css";
import type { SummaryCategory } from "../../types";
import { SummaryItem } from "../SummaryItem";

interface SummaryCardProps {
  categories: SummaryCategory[];
  onContinue?: () => void;
}

export const SummaryCard = ({ categories, onContinue }: SummaryCardProps) => {
  return (
    <section className="summary-card-wrapper" aria-label="Category scores">
      <div className="summary-card">
        <h2 className="summary-card__title">Summary</h2>
        <div className="summary-card__content">
          {categories.map((category) => (
            <SummaryItem key={category.id} category={category} />
          ))}
        </div>
        <button
          type="button"
          className="summary-card__button"
          onClick={onContinue}
          aria-label="Continue to next step"
        >
          Continue
        </button>
      </div>
    </section>
  );
};
