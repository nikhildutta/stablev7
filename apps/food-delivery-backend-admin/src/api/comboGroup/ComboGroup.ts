import { Decimal } from "decimal.js";
import { ComboItemTable } from "../comboItemTable/ComboItemTable";
import { ComboItemWindowMap } from "../comboItemWindowMap/ComboItemWindowMap";
import { Restaurant } from "../restaurant/Restaurant";

export type ComboGroup = {
  comboBasePrice: Decimal | null;
  comboDescription: string | null;
  comboItemTable?: Array<ComboItemTable>;
  comboItemWindowMap?: Array<ComboItemWindowMap>;
  comboName: string;
  combo_type?: "Default" | "Customizable" | null;
  createdAt: Date | null;
  id: string;
  isBankCoupon: boolean | null;
  isPlatformCoupon: boolean | null;
  isRestuaruantCoupon: boolean | null;
  restaurants?: Restaurant;
  updatedAt: Date | null;
};
