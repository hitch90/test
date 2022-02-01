import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ProjectUpdateInput = {
  gitlabProjects?: string;
  group?: GroupWhereUniqueInput;
  name?: string | null;
};
