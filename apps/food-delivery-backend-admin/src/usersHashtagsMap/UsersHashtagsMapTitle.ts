import { UsersHashtagsMap as TUsersHashtagsMap } from "../api/usersHashtagsMap/UsersHashtagsMap";

export const USERSHASHTAGSMAP_TITLE_FIELD = "id";

export const UsersHashtagsMapTitle = (record: TUsersHashtagsMap): string => {
  return record.id?.toString() || String(record.id);
};
