import { Discount } from "../discount/Discount";

export type DiscountType = {
  discount?: Array<Discount>;
  discountType: string | null;
  id: string;
};
