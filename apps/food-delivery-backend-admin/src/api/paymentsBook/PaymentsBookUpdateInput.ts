import { ComplaintsBookUpdateManyWithoutPaymentsBooksInput } from "./ComplaintsBookUpdateManyWithoutPaymentsBooksInput";
import { OrderHistoryWhereUniqueInput } from "../orderHistory/OrderHistoryWhereUniqueInput";
import { Decimal } from "decimal.js";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";

export type PaymentsBookUpdateInput = {
  complaintsBook?: ComplaintsBookUpdateManyWithoutPaymentsBooksInput;
  errorCode?: number | null;
  orderHistory?: OrderHistoryWhereUniqueInput;
  paymentAmount?: Decimal | null;
  paymentCurrency?: string | null;
  paymentDate?: Date | null;
  paymentMethods?: PaymentMethodWhereUniqueInput;
  paymentStatus?: boolean | null;
  updatedAt?: Date | null;
};
