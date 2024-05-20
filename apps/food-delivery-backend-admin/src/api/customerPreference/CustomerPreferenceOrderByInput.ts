import { SortOrder } from "../../util/SortOrder";

export type CustomerPreferenceOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  preferenceType?: SortOrder;
  preferenceValue?: SortOrder;
  updatedAt?: SortOrder;
};
