import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type CustomerPreferenceUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  preferenceType?: string | null;
  preferenceValue?: string | null;
  updatedAt?: Date | null;
};
