import { type Request, type Response, Router } from 'express';

interface Project {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string | null } | null;
}

export const projetosRouter = Router();

projetosRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env['GITHUB_API_TOKEN']}`,
      },
      body: JSON.stringify({
        query: `{ user(login: "semog-dev") { pinnedItems(first: 6, types: REPOSITORY) {
          nodes { ... on Repository { id name description url stargazerCount forkCount
            primaryLanguage { name color } } } } } }`,
      }),
    });

    const data = await response.json();
    const nodes: Project[] | undefined = data?.data?.user?.pinnedItems?.nodes;

    res.json(nodes ?? []);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    res.json([]);
  }
});
