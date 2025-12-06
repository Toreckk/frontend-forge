import "./ResultsSummary.css";
import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";

const ResultsSummary = () => {
  return (
    <main className="results-summary-wrapper">
      <div className="results-score-card">
        <div className="results-score-card-content">
          <p className="results-score-card-title">Your Result</p>
          <div className="results-score-card-score">
            <p className="results-score-card-score-value">76</p>
            <p className="results-score-card-score-total">of 100</p>
          </div>
          <div className="results-score-card-description">
            <p className="results-score-card-description-title">Great</p>
            <p className="results-score-card-description-text">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
      </div>
      <div className="results-summary-card">
        <p className="results-summary-card-title">Summary</p>
        <div className="results-summary-card-content">
          <div className="results-summary-card-content-item">
            <div className="results-summary-card-content-item-title">
              <img src={iconReaction} alt="icon-reaction" className="icon" />
              <p>Reaction</p>
            </div>
            <div className="results-summary-card-content-item-score">
              <div>80</div>
              <div>/100</div>
            </div>
          </div>
          <div className="results-summary-card-content-item">
            <div className="results-summary-card-content-item-title">
              <img src={iconMemory} alt="icon-memory" className="icon" />
              <p>Memory</p>
            </div>
            <div className="results-summary-card-content-item-score">
              <div>92</div>
              <div>/100</div>
            </div>
          </div>
          <div className="results-summary-card-content-item">
            <div className="results-summary-card-content-item-title">
              <img src={iconVerbal} alt="icon-verbal" className="icon" />
              <p>Verbal</p>
            </div>
            <div className="results-summary-card-content-item-score">
              <div>61</div>
              <div>/100</div>
            </div>
          </div>
          <div className="results-summary-card-content-item">
            <div className="results-summary-card-content-item-title">
              <img src={iconVisual} alt="icon-visual" className="icon" />
              <p>Visual</p>
            </div>
            <div className="results-summary-card-content-item-score">
              <div>72</div>
              <div>/100</div>
            </div>
          </div>
        </div>
        <button className="results-summary-card-button">Continue</button>
      </div>
    </main>
  );
};

export default ResultsSummary;
