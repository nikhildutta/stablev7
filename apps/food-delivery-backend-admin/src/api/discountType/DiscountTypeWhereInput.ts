import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiscountTypeWhereInput = {
  discount?: DiscountListRelationFilter;
  discountType?: StringNullableFilter;
  id?: StringFilter;
};
