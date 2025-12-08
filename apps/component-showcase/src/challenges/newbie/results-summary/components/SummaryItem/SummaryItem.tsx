import "./SummaryItem.css";
import type { SummaryCategory } from "../../types";

interface SummaryItemProps {
  category: SummaryCategory;
}

export const SummaryItem = ({ category }: SummaryItemProps) => {
  return (
    <div className={`summary-item bg-${category.variant}`}>
      <div className="summary-item__content">
        <div className="summary-item__title">
          <img
            src={category.icon}
            alt={`${category.name} icon`}
            className="summary-item__icon"
          />
          <p className={`summary-item__label text-${category.variant}`}>
            {category.name}
          </p>
        </div>
        <div className="summary-item__score">
          <div className="summary-item__value">{category.score}</div>
          <div className="summary-item__total">/{category.maxScore}</div>
        </div>
      </div>
    </div>
  );
};
