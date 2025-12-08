export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  location: string;
  name: string;
  company: string;
  blog: string;
  twitter_username: string;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  bio?: string;
}
