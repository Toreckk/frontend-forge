import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "./components/Form/Form";
import { Results } from "./components/Results/Results";
import "./MortgageCalculator.css";
import type { FormValues, IResults } from "./MortgageCalculator.types";
import { calculateMortgage } from "./MortgageCalculator.utils";

const INITIAL_RESULTS: IResults = {
  monthlyRepayments: null,
  totalInterest: null,
  totalRepayments: null,
  mortgageType: null,
};

const DEFAULT_FORM_VALUES: FormValues = {
  interestRate: "",
  mortgageAmount: "",
  mortgageTerm: "",
  mortgageType: null,
};

const MortgageCalculator = () => {
  const [results, setResults] = useState<IResults>(INITIAL_RESULTS);

  const methods = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const onSubmit = (data: FormValues) => {
    const { monthlyRepayments, totalRepayments, totalInterest } =
      calculateMortgage({
        principal: Number(data.mortgageAmount),
        termYears: Number(data.mortgageTerm),
        annualInterestRate: Number(data.interestRate),
      });

    setResults({
      monthlyRepayments,
      totalInterest,
      totalRepayments,
      mortgageType: data.mortgageType,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mortgage-calculator">
          <Form />
          <Results results={results} />
        </div>
      </form>
    </FormProvider>
  );
};

export default MortgageCalculator;
