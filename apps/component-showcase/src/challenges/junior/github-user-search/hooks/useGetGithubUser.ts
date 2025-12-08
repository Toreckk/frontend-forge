import { useCallback, useEffect, useState } from "react";
import type { GithubUser } from "../types/github";
import { fetchGithubUser } from "../api/github";

export function useGetGithubUser() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async (username: string) => {
    setLoading(true);
    setError(null); // Reset error before new request

    try {
      const data = await fetchGithubUser(username);
      setUser(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser("Toreckk");
  }, []);

  return { user, isLoading, error, searchUser: fetchUser };
}
