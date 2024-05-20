import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type NotificationSettingCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  settingName?: string | null;
  settingValue?: boolean | null;
  updatedAt?: Date | null;
};
