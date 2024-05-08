import { CouponRedemptionUpdateManyWithoutCouponsInput } from "./CouponRedemptionUpdateManyWithoutCouponsInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { OrderHistoryUpdateManyWithoutCouponsInput } from "./OrderHistoryUpdateManyWithoutCouponsInput";

export type CouponUpdateInput = {
  code?: string;
  couponRedemptions?: CouponRedemptionUpdateManyWithoutCouponsInput;
  discount?: DiscountWhereUniqueInput;
  expirationDate?: Date;
  isActive?: boolean | null;
  orderHistory?: OrderHistoryUpdateManyWithoutCouponsInput;
  updatedAt?: Date | null;
};
