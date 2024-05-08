import { SortOrder } from "../../util/SortOrder";

export type OptionsAddonsGroupOrderByInput = {
  addOnName?: SortOrder;
  addOnPrice?: SortOrder;
  addonsImageUrl?: SortOrder;
  containsEgg?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isVegetarian?: SortOrder;
  lowerLimit?: SortOrder;
  option_variant_id?: SortOrder;
  updatedAt?: SortOrder;
  upperLimit?: SortOrder;
};
