import { ProjectCard } from "@/components/project-card.component";
import { getPinnedProjects } from "@/services/projects/projects.service";

export default async function Page() {
  const result = await getPinnedProjects();
  const projects = result.data.user.pinnedItems.nodes;
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          description={project.description}
          url={project.url}
        />

        // <li key={project.id} className="border rounded-xl p-4 list-none">
        //   <h2 className="font-semibold text-lg">{project.name}</h2>
        //   <p className="text-gray-600">{project.description}</p>
        // </li>
      ))}
    </div>
  );
}
