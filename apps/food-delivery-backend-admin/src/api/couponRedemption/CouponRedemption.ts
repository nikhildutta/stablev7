import { AppUser } from "../appUser/AppUser";
import { Coupon } from "../coupon/Coupon";

export type CouponRedemption = {
  appUsers?: AppUser;
  coupons?: Coupon;
  createdAt: Date | null;
  id: string;
  isRedeemed: boolean | null;
  redemptionDate: Date;
  updatedAt: Date | null;
};
