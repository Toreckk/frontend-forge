import { useParams, Link } from "react-router-dom";

export function ChallengeView() {
  const { id } = useParams();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[var(--bg-app)] text-[var(--text-primary)]">
      <h1 className="mb-4 text-3xl font-bold">Challenge ID: {id}</h1>
      <p className="mb-8 text-[var(--text-secondary)]">
        This is a placeholder for the challenge view.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-[var(--accent-blue)] px-6 py-2 font-semibold text-white transition-colors hover:opacity-90"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
