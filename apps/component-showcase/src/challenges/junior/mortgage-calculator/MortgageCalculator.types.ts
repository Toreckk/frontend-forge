export const MortgageType = {
  Repayment: "repayment",
  InterestOnly: "interestOnly",
} as const;

type MortgageType = (typeof MortgageType)[keyof typeof MortgageType];

export interface FormValues {
  mortgageAmount: string;
  mortgageTerm: string;
  interestRate: string;
  mortgageType: MortgageType | null;
}

export interface IResults {
  monthlyRepayments: number | null;
  totalRepayments: number | null;
  totalInterest: number | null;
  mortgageType: MortgageType | null;
}

export interface CalculateMortgageParams {
  principal: number;
  termYears: number;
  annualInterestRate: number;
}

export interface MortgageCalculationResult {
  monthlyRepayments: number;
  totalRepayments: number;
  totalInterest: number;
}
