import { useFormContext } from "react-hook-form";
import type { IResults } from "../../MortgageCalculator.types";
import illustationEmpty from "../../assets/illustration-empty.svg";
import { formatCurrency } from "../../MortgageCalculator.utils";
import "./Results.css";

export const Results = ({ results }: { results: IResults }) => {
  const {
    formState: { isSubmitSuccessful },
  } = useFormContext();

  return (
    <div className="results">
      <div className={`title-bar ${isSubmitSuccessful ? "" : "no-results"}`}>
        {isSubmitSuccessful && <p className="title">Your results</p>}
        {isSubmitSuccessful && (
          <p className="description">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
        )}
        {!isSubmitSuccessful && (
          <img
            src={illustationEmpty}
            alt="no results image"
            className="no-results-image"
          />
        )}
        {!isSubmitSuccessful && <p className="title">Results shown here</p>}
        {!isSubmitSuccessful && (
          <p className="description no-results">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        )}
      </div>
      {isSubmitSuccessful && (
        <div className="results-content">
          <div className="results-section">
            <p className="results-label">
              {results.mortgageType === "repayment"
                ? "Your monthly repayments"
                : "Your total interest"}
            </p>
            <p className="monthly-amount">
              {results.mortgageType === "repayment"
                ? formatCurrency(results.monthlyRepayments ?? 0)
                : formatCurrency(results.totalInterest ?? 0)}
            </p>
          </div>
          <div className="separator"></div>
          <div className="results-section">
            <p className="results-label">Total you'll repay over the term</p>
            <p className="total-amount">
              {formatCurrency(results.totalRepayments ?? 0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
