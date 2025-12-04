interface Filters {
  difficulty: string[];
  status: string[];
  languages: string[];
}

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export function Sidebar({ filters, setFilters }: SidebarProps) {
  const handleFilterChange = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <aside className="hidden w-64 flex-col border-r border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 md:flex">
      <div className="mb-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
          Difficulty
        </h3>
        <div className="space-y-2">
          {["Newbie", "Junior", "Intermediate", "Advanced", "Guru"].map(
            (level) => (
              <label
                key={level}
                className="flex items-center gap-2 text-sm text-[var(--text-primary)]"
              >
                <input
                  type="checkbox"
                  checked={filters.difficulty.includes(level)}
                  onChange={() => handleFilterChange("difficulty", level)}
                  className="rounded border-[var(--border-subtle)] text-[var(--accent-blue)] focus:ring-[var(--accent-blue)]"
                />
                {level}
              </label>
            )
          )}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
          Status
        </h3>
        <div className="space-y-2">
          {["Completed", "WIP", "Archived", "On Hold"].map((status) => (
            <label
              key={status}
              className="flex items-center gap-2 text-sm text-[var(--text-primary)]"
            >
              <input
                type="checkbox"
                checked={filters.status.includes(status)}
                onChange={() => handleFilterChange("status", status)}
                className="rounded border-[var(--border-subtle)] text-[var(--accent-blue)] focus:ring-[var(--accent-blue)]"
              />
              {status}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
          Languages
        </h3>
        <div className="space-y-2">
          {["HTML", "CSS", "JS", "API"].map((lang) => (
            <label
              key={lang}
              className="flex items-center gap-2 text-sm text-[var(--text-primary)]"
            >
              <input
                type="checkbox"
                checked={filters.languages.includes(lang)}
                onChange={() => handleFilterChange("languages", lang)}
                className="rounded border-[var(--border-subtle)] text-[var(--accent-blue)] focus:ring-[var(--accent-blue)]"
              />
              {lang}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
