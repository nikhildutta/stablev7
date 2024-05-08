import { ComplaintsBookWhereUniqueInput } from "../complaintsBook/ComplaintsBookWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type ComplaintItemWhereInput = {
  complaintsBook?: ComplaintsBookWhereUniqueInput;
  createdAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isRefund?: BooleanNullableFilter;
  orderItems?: OrderItemWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
