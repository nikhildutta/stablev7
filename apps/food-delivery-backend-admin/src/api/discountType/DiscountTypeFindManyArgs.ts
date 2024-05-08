import { DiscountTypeWhereInput } from "./DiscountTypeWhereInput";
import { DiscountTypeOrderByInput } from "./DiscountTypeOrderByInput";

export type DiscountTypeFindManyArgs = {
  where?: DiscountTypeWhereInput;
  orderBy?: Array<DiscountTypeOrderByInput>;
  skip?: number;
  take?: number;
};
