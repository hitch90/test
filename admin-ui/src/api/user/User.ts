import { Group } from "../group/Group";

export type User = {
  createdAt: Date;
  firstName: string | null;
  groups?: Array<Group>;
  id: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
