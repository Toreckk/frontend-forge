import { useState, useId } from "react";
import "./FAQElement.css";
import chevron from "../../assets/chevron.svg";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQElementProps extends FAQItem {
  defaultOpen?: boolean;
}

export const FAQElement = ({
  question,
  answer,
  defaultOpen = false,
}: FAQElementProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const uniqueId = useId();
  const answerId = `faq-answer-${uniqueId}`;

  return (
    <li className="faq-section">
      <h2 className="faq-header">
        <button
          className="faq-question-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={answerId}
        >
          {question}
          <img
            src={chevron}
            alt=""
            className={isOpen ? "faq-icon rotated" : "faq-icon"}
            aria-hidden="true"
          />
        </button>
      </h2>
      <div
        id={answerId}
        className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        {isOpen && <p className="faq-answer">{answer}</p>}
      </div>
    </li>
  );
};
