import { Group as TGroup } from "../api/group/Group";

export const GROUP_TITLE_FIELD = "channelWebhook";

export const GroupTitle = (record: TGroup): string => {
  return record.channelWebhook || record.id;
};
