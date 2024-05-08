import { Restaurant } from "../restaurant/Restaurant";

export type PayoutInformationTable = {
  bankAccountNumber: string | null;
  bankIfscCode: string | null;
  createdAt: Date | null;
  firstPayoutDate: Date | null;
  id: string;
  isBankAccountVerified: boolean | null;
  panNumber: string;
  payoutCycleLength: number | null;
  payoutDateOffset: number | null;
  restaurants?: Restaurant;
  tanNumber: string | null;
  updatedAt: Date | null;
};
