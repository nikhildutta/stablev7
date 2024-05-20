import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  discount_id?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  updatedAt?: SortOrder;
};
