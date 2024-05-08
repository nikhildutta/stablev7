import { SortOrder } from "../../util/SortOrder";

export type CouponRedemptionOrderByInput = {
  user_id?: SortOrder;
  coupon_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRedeemed?: SortOrder;
  redemptionDate?: SortOrder;
  updatedAt?: SortOrder;
};
