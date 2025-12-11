import type { GithubUser } from "../types/github";

export const fetchGithubUser = async (
  username: string
): Promise<GithubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
