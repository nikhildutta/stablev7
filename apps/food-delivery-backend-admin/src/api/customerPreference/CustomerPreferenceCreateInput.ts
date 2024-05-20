import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type CustomerPreferenceCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  preferenceType?: string | null;
  preferenceValue?: string | null;
  updatedAt?: Date | null;
};
