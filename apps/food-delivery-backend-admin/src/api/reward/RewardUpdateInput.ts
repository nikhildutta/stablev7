import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type RewardUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  expirationDate?: Date | null;
  points?: number | null;
  updatedAt?: Date | null;
};
