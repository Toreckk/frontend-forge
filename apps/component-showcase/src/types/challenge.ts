export type Difficulty =
  | "Newbie"
  | "Junior"
  | "Intermediate"
  | "Advanced"
  | "Guru";

export interface ChallengeMeta {
  id: string;
  title: string;
  thumbnailUrl: string;
  type: "Free" | "Free+" | "Premium";
  difficulty: Difficulty;
  level: number;
  languages: ("HTML" | "CSS" | "JS" | "API")[];
  description: string;
}
