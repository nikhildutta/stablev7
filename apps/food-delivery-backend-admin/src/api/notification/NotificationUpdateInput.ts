import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type NotificationUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  isRead?: boolean | null;
  message?: string | null;
};
