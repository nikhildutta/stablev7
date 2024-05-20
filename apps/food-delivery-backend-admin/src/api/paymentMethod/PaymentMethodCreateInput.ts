import { OrderHistoryCreateNestedManyWithoutPaymentMethodsInput } from "./OrderHistoryCreateNestedManyWithoutPaymentMethodsInput";
import { PaymentsBookCreateNestedManyWithoutPaymentMethodsInput } from "./PaymentsBookCreateNestedManyWithoutPaymentMethodsInput";

export type PaymentMethodCreateInput = {
  methodDetails?: string | null;
  methodName?: string | null;
  orderHistory?: OrderHistoryCreateNestedManyWithoutPaymentMethodsInput;
  paymentsBook?: PaymentsBookCreateNestedManyWithoutPaymentMethodsInput;
  updatedAt?: Date | null;
};
