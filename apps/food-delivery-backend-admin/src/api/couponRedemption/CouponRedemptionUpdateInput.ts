import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";

export type CouponRedemptionUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  coupons?: CouponWhereUniqueInput;
  isRedeemed?: boolean | null;
  redemptionDate?: Date;
  updatedAt?: Date | null;
};
