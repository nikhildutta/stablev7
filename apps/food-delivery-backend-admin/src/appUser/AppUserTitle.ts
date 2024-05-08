import { AppUser as TAppUser } from "../api/appUser/AppUser";

export const APPUSER_TITLE_FIELD = "profilePicUrl";

export const AppUserTitle = (record: TAppUser): string => {
  return record.profilePicUrl?.toString() || String(record.id);
};
