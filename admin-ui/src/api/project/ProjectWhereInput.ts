import { StringFilter } from "../../util/StringFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProjectWhereInput = {
  gitlabProjects?: StringFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
