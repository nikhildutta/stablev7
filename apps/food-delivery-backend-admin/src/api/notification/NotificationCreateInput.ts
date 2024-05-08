import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type NotificationCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  isRead?: boolean | null;
  message?: string | null;
};
