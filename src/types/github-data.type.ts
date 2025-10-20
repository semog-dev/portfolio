import { Project } from "./project.type";

export type GithubData = {
  data: {
    user: {
      pinnedItems: {
        nodes: Project[];
      };
    };
  };
};
