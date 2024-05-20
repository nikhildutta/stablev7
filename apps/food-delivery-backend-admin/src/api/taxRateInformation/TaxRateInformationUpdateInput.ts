import { Decimal } from "decimal.js";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TaxRateInformationUpdateInput = {
  cgstRate?: Decimal | null;
  netTaxTransferrable?: boolean | null;
  restaurants?: RestaurantWhereUniqueInput;
  sgstRate?: Decimal | null;
  updatedAt?: Date | null;
};
