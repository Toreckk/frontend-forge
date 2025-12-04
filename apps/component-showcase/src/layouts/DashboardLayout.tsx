import { useState } from "react";
import { Header } from "../components/dashboard/Header";
import { Sidebar } from "../components/dashboard/Sidebar";
import { ChallengeCard } from "../components/dashboard/ChallengeCard";
import { allChallenges } from "../data/challenges";

export function DashboardLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    type: [] as string[],
    languages: [] as string[],
  });

  const filteredChallenges = allChallenges.filter((challenge) => {
    // Search Filter
    if (
      searchQuery &&
      !challenge.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Difficulty Filter
    if (
      filters.difficulty.length > 0 &&
      !filters.difficulty.includes(challenge.difficulty)
    ) {
      return false;
    }

    // Type Filter
    if (filters.type.length > 0 && !filters.type.includes(challenge.type)) {
      return false;
    }

    // Languages Filter
    if (filters.languages.length > 0) {
      const hasMatchingLanguage = challenge.languages.some((lang) =>
        filters.languages.includes(lang)
      );
      if (!hasMatchingLanguage) return false;
    }

    return true;
  });

  return (
    <div className="flex h-screen flex-col bg-[var(--bg-app)]">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar filters={filters} setFilters={setFilters} />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
              Showing {filteredChallenges.length} of {allChallenges.length}{" "}
              challenges
            </h2>
            {filteredChallenges.length > 0 ? (
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredChallenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} challenge={challenge} />
                ))}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center text-[var(--text-secondary)]">
                No challenges found matching your criteria.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
