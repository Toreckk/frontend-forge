import { useFormContext } from "react-hook-form";
import { RadioField } from "../RadioField/RadioField";
import { NumberField } from "../NumberField/NumberField";
import calculateIcon from "../../assets/icon-calculator.svg";
import "./Form.css";

const rules = {
  mortgageAmount: {
    required: "This field is required",
    validate: (value: string | number) => {
      if (value === "" || value === null || value === undefined) {
        return "This field is required";
      }
      const num = Number(value);
      if (isNaN(num)) return "Please enter a valid number";
      if (num <= 0) return "Please enter a value greater than 0";
      if (num > 1000000) return "Please enter a value less than 1,000,000";
      return true;
    },
  },
  mortgageTerm: {
    required: "This field is required",
    validate: (value: string | number) => {
      if (value === "" || value === null || value === undefined) {
        return "This field is required";
      }
      const num = Number(value);
      if (isNaN(num)) return "Please enter a valid number";
      if (num <= 0) return "Please enter a value greater than 0";
      if (num > 100) return "Please enter a value less than 100";
      return true;
    },
  },
  interestRate: {
    required: "This field is required",
    validate: (value: string | number) => {
      if (value === "" || value === null || value === undefined) {
        return "This field is required";
      }
      const num = Number(value);
      if (isNaN(num)) return "Please enter a valid number";
      if (num <= 0) return "Please enter a value greater than 0";
      if (num > 100) return "Please enter a value less than 100";
      return true;
    },
  },
  mortgageType: {
    required: "This field is required",
  },
};

export const Form = () => {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();

  const handleClear = () => {
    reset();
  };

  return (
    <div className="form">
      <div className="title-bar">
        <h1 className="form-title">Mortgage Calculator</h1>
        <button className="clear-button" onClick={handleClear}>
          Clear All
        </button>
      </div>
      <div className="form-content">
        <NumberField
          name="mortgageAmount"
          label="Mortgage Amount"
          rules={rules.mortgageAmount}
          format="currency"
        />
        <NumberField
          name="mortgageTerm"
          label="Mortgage Term"
          rules={rules.mortgageTerm}
          format="years"
        />
        <NumberField
          name="interestRate"
          label="Interest Rate"
          rules={rules.interestRate}
          format="percentage"
        />
        <RadioField
          name="mortgageType"
          label="Mortgage Type"
          items={[
            {
              text: "Repayment",
              value: "repayment",
            },
            {
              text: "Interest Only",
              value: "interestOnly",
            },
          ]}
        />
      </div>
      <button
        className="calculate-button"
        disabled={isSubmitting}
        id="submit-button"
        type="submit"
      >
        <div className="calculate-button-content">
          <img className="calculate-icon" src={calculateIcon} alt="Calculate" />
          <p className="calculate-text">Calculate Repayments</p>
        </div>
      </button>
    </div>
  );
};
