export interface SummaryCategory {
  id: string;
  name: string;
  icon: string;
  score: number;
  maxScore: number;
  variant: "red" | "yellow" | "green" | "blue";
}
