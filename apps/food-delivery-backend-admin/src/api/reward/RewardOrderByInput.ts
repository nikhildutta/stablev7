import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
};
