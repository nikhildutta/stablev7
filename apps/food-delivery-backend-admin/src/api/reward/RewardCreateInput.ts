import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type RewardCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  expirationDate?: Date | null;
  points?: number | null;
  updatedAt?: Date | null;
};
