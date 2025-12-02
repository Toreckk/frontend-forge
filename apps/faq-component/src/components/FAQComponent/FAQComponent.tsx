import { FAQElement } from "../FAQElement/FAQElement";
import type { FAQItem } from "../FAQElement/FAQElement";
import "./FAQComponent.css";

export const FAQComponent = ({ faqs }: { faqs: FAQItem[] }) => {
  return (
    <ul className="faq-container">
      {faqs.map((faq, index) => (
        <FAQElement
          key={index}
          question={faq.question}
          answer={faq.answer}
          defaultOpen={index === 0}
        />
      ))}
    </ul>
  );
};
