import { Decimal } from "decimal.js";
import { Restaurant } from "../restaurant/Restaurant";

export type OrderPackagingFee = {
  id: string;
  packingFee: Decimal | null;
  restaurants?: Restaurant;
};
