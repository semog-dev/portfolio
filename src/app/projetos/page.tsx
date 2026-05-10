import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPinnedProjects } from "@/services/projects/projects.service";
import { ExternalLink, GitFork, Star } from "lucide-react";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

export default async function ProjetosPage() {
  let projects: Awaited<
    ReturnType<typeof getPinnedProjects>
  >["data"]["user"]["pinnedItems"]["nodes"] = [];

  try {
    const data = await getPinnedProjects();
    projects = data.data.user.pinnedItems.nodes;
  } catch {
    projects = [];
  }

  return (
    <section className="mt-4">
      <div className="mb-8">
        <h1 className="text-xl text-muted-foreground">Projetos</h1>
        <h2 className="text-3xl font-black md:text-5xl">
          Meus projetos no <span className="text-red-500">GitHub</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          Repositórios fixados no meu perfil
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-muted-foreground">
          <LuGithub className="size-12 opacity-30" />
          <p>Nenhum projeto encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              className="group"
            >
              <Card className="h-full flex flex-col justify-between transition-colors group-hover:border-primary">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="transition-colors group-hover:text-primary">
                      {project.name}
                    </CardTitle>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  {project.description && (
                    <CardDescription>{project.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {project.primaryLanguage && (
                      <span className="flex items-center gap-1">
                        <span
                          className="inline-block size-3 rounded-full"
                          style={{
                            backgroundColor:
                              project.primaryLanguage.color ?? "#ccc",
                          }}
                        />
                        {project.primaryLanguage.name}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="size-3" />
                      {project.stargazerCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="size-3" />
                      {project.forkCount}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Button variant="outline" asChild>
          <Link href="https://github.com/semog-dev" target="_blank">
            <LuGithub /> Ver todos os projetos
          </Link>
        </Button>
      </div>
    </section>
  );
}
