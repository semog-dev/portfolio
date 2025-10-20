import { GithubData } from "@/types/github-data.type";

export async function getPinnedProjects(): Promise<GithubData> {
  const token = process.env.GITHUB_API_TOKEN;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      {
        user(login: "semog-dev") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
              }
            }
          }
        }
      }
      `,
    }),
  });

  return (await res.json()) as GithubData;
}
