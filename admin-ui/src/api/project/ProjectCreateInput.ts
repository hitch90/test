import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ProjectCreateInput = {
  gitlabProjects: string;
  group: GroupWhereUniqueInput;
};
