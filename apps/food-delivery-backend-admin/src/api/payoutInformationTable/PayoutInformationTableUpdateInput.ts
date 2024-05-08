import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PayoutInformationTableUpdateInput = {
  bankAccountNumber?: string | null;
  bankIfscCode?: string | null;
  firstPayoutDate?: Date | null;
  isBankAccountVerified?: boolean | null;
  panNumber?: string;
  payoutCycleLength?: number | null;
  payoutDateOffset?: number | null;
  restaurants?: RestaurantWhereUniqueInput;
  tanNumber?: string | null;
  updatedAt?: Date | null;
};
