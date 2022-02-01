import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  gitlabProjects?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
