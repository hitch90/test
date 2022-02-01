import { User } from "../user/User";
import { Project } from "../project/Project";

export type Group = {
  channelWebhook: string | null;
  createdAt: Date;
  id: string;
  members?: Array<User>;
  projects?: Array<Project>;
  updatedAt: Date;
};
