import type { GithubUser } from "../types/github";

export const fetchGithubUser = async (
  username: string
): Promise<GithubUser | null> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
