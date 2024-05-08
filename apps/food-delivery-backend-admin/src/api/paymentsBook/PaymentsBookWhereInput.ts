import { ComplaintsBookListRelationFilter } from "../complaintsBook/ComplaintsBookListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PaymentsBookWhereInput = {
  complaintsBook?: ComplaintsBookListRelationFilter;
  createdAt?: DateTimeNullableFilter;
  errorCode?: IntNullableFilter;
  id?: StringFilter;
  orderHistory?: OrderHistoryWhereUniqueInput;
  paymentAmount?: DecimalNullableFilter;
  paymentCurrency?: StringNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethods?: PaymentMethodWhereUniqueInput;
  paymentStatus?: BooleanNullableFilter;
  updatedAt?: DateTimeNullableFilter;
};
