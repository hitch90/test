import { Group } from "../group/Group";

export type Project = {
  createdAt: Date;
  gitlabProjects: string;
  group?: Group;
  id: string;
  name: string | null;
  updatedAt: Date;
};
