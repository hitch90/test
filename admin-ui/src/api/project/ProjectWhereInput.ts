import { StringFilter } from "../../util/StringFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ProjectWhereInput = {
  gitlabProjects?: StringFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
};
