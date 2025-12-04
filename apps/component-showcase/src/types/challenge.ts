export type Difficulty =
  | "Newbie"
  | "Junior"
  | "Intermediate"
  | "Advanced"
  | "Guru";

export type status = "Completed" | "WIP" | "Archived" | "On Hold";

export type Language = "HTML" | "CSS" | "JS" | "API";

export interface ChallengeMeta {
  id: string;
  title: string;
  thumbnailUrl: string;
  status: status;
  difficulty: Difficulty;
  level: number;
  languages: Language[];
  description: string;
}
