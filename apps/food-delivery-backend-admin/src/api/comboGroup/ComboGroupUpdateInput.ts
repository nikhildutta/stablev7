import { Decimal } from "decimal.js";
import { ComboItemTableUpdateManyWithoutComboGroupsInput } from "./ComboItemTableUpdateManyWithoutComboGroupsInput";
import { ComboItemWindowMapUpdateManyWithoutComboGroupsInput } from "./ComboItemWindowMapUpdateManyWithoutComboGroupsInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ComboGroupUpdateInput = {
  comboBasePrice?: Decimal | null;
  comboDescription?: string | null;
  comboItemTable?: ComboItemTableUpdateManyWithoutComboGroupsInput;
  comboItemWindowMap?: ComboItemWindowMapUpdateManyWithoutComboGroupsInput;
  comboName?: string;
  combo_type?: "Default" | "Customizable" | null;
  isBankCoupon?: boolean | null;
  isPlatformCoupon?: boolean | null;
  isRestuaruantCoupon?: boolean | null;
  restaurants?: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
