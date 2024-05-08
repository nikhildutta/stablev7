import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";

export type ReviewWhereInput = {
  body?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  orderHistory?: OrderHistoryWhereUniqueInput;
  reviewImg?: StringNullableFilter;
  title?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
