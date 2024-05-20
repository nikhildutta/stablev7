import { Decimal } from "decimal.js";
import { Restaurant } from "../restaurant/Restaurant";

export type TaxRateInformation = {
  cgstRate: Decimal | null;
  createdAt: Date | null;
  id: string;
  netTaxTransferrable: boolean | null;
  restaurants?: Restaurant;
  sgstRate: Decimal | null;
  updatedAt: Date | null;
};
