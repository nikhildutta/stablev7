import { OrderHistoryUpdateManyWithoutPaymentMethodsInput } from "./OrderHistoryUpdateManyWithoutPaymentMethodsInput";
import { PaymentsBookUpdateManyWithoutPaymentMethodsInput } from "./PaymentsBookUpdateManyWithoutPaymentMethodsInput";

export type PaymentMethodUpdateInput = {
  methodDetails?: string | null;
  methodName?: string | null;
  orderHistory?: OrderHistoryUpdateManyWithoutPaymentMethodsInput;
  paymentsBook?: PaymentsBookUpdateManyWithoutPaymentMethodsInput;
  updatedAt?: Date | null;
};
