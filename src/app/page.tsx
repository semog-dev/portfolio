import { LuConstruction } from "react-icons/lu";
import { getPinnedProjects } from "../services/projects/projects.service";

export default function EmConstrucao() {
  const projects = getPinnedProjects();

  return (
    <div className="flex items-center justify-center gap-2 h-full text-3xl">
      <h1>Em construção...</h1>
      <LuConstruction />
    </div>
  );
}
