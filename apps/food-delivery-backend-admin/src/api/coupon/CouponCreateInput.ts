import { CouponRedemptionCreateNestedManyWithoutCouponsInput } from "./CouponRedemptionCreateNestedManyWithoutCouponsInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { OrderHistoryCreateNestedManyWithoutCouponsInput } from "./OrderHistoryCreateNestedManyWithoutCouponsInput";

export type CouponCreateInput = {
  code: string;
  couponRedemptions?: CouponRedemptionCreateNestedManyWithoutCouponsInput;
  discount: DiscountWhereUniqueInput;
  expirationDate: Date;
  isActive?: boolean | null;
  orderHistory?: OrderHistoryCreateNestedManyWithoutCouponsInput;
  updatedAt?: Date | null;
};
