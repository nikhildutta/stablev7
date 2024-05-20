import { Decimal } from "decimal.js";
import { ComboItemTableCreateNestedManyWithoutComboGroupsInput } from "./ComboItemTableCreateNestedManyWithoutComboGroupsInput";
import { ComboItemWindowMapCreateNestedManyWithoutComboGroupsInput } from "./ComboItemWindowMapCreateNestedManyWithoutComboGroupsInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type ComboGroupCreateInput = {
  comboBasePrice?: Decimal | null;
  comboDescription?: string | null;
  comboItemTable?: ComboItemTableCreateNestedManyWithoutComboGroupsInput;
  comboItemWindowMap?: ComboItemWindowMapCreateNestedManyWithoutComboGroupsInput;
  comboName: string;
  combo_type?: "Default" | "Customizable" | null;
  isBankCoupon?: boolean | null;
  isPlatformCoupon?: boolean | null;
  isRestuaruantCoupon?: boolean | null;
  restaurants: RestaurantWhereUniqueInput;
  updatedAt?: Date | null;
};
