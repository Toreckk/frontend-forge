import type {
  CalculateMortgageParams,
  MortgageCalculationResult,
} from "./MortgageCalculator.types";

export const formatCurrency = (
  amount = 0,
  currencyCode = "EUR",
  locale = "en-GB"
) => {
  // Ensure the number is valid
  if (typeof amount !== "number" || isNaN(amount)) {
    return "—"; // Return a placeholder for invalid input
  }

  // Create the formatter object
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2, // Ensure at least two decimal places
    maximumFractionDigits: 2, // Limit to two decimal places
  });

  return formatter.format(amount);
};

/**
 * Calculates monthly repayments for a mortgage using the amortization formula.
 * @param params - Mortgage parameters including principal, term, and interest rate
 * @returns Calculated repayment figures including monthly payment, total repayment, and total interest
 */
export const calculateMortgage = ({
  principal,
  termYears,
  annualInterestRate,
}: CalculateMortgageParams): MortgageCalculationResult => {
  const monthlyRate = annualInterestRate / 100 / 12;
  const totalMonths = termYears * 12;
  const termFactor = Math.pow(1 + monthlyRate, totalMonths);

  const monthlyRepayments =
    (principal * (monthlyRate * termFactor)) / (termFactor - 1);
  const totalRepayments = monthlyRepayments * totalMonths;
  const totalInterest = totalRepayments - principal;

  return {
    monthlyRepayments,
    totalRepayments,
    totalInterest,
  };
};
