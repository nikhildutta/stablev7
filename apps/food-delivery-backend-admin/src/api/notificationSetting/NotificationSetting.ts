import { AppUser } from "../appUser/AppUser";

export type NotificationSetting = {
  appUsers?: AppUser;
  createdAt: Date | null;
  id: string;
  settingName: string | null;
  settingValue: boolean | null;
  updatedAt: Date | null;
};
