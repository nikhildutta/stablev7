import { CouponRedemption } from "../couponRedemption/CouponRedemption";
import { Discount } from "../discount/Discount";
import { OrderHistory } from "../orderHistory/OrderHistory";

export type Coupon = {
  code: string;
  couponRedemptions?: Array<CouponRedemption>;
  createdAt: Date | null;
  discount?: Discount;
  expirationDate: Date;
  id: string;
  isActive: boolean | null;
  orderHistory?: Array<OrderHistory>;
  updatedAt: Date | null;
};
