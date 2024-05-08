import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type NotificationSettingUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  settingName?: string | null;
  settingValue?: boolean | null;
  updatedAt?: Date | null;
};
