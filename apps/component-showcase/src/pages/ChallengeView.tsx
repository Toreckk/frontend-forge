import { useParams, Link } from "react-router-dom";
import { challengeRegistry } from "../data/challenges";
import { Suspense } from "react";

export function ChallengeView() {
  const { id } = useParams<{ id: string }>();
  if (!id || !challengeRegistry[id]) {
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
  const ActiveChallenge = challengeRegistry[id];

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <p className="text-sm font-medium text-slate-500">
              Loading Challenge...
            </p>
          </div>
        </div>
      }
    >
      <ActiveChallenge />
    </Suspense>
  );
}
