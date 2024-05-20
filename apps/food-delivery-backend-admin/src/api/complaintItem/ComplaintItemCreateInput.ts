import { ComplaintsBookWhereUniqueInput } from "../complaintsBook/ComplaintsBookWhereUniqueInput";
import { OrderItemWhereUniqueInput } from "../orderItem/OrderItemWhereUniqueInput";

export type ComplaintItemCreateInput = {
  complaintsBook: ComplaintsBookWhereUniqueInput;
  isRefund?: boolean | null;
  orderItems: OrderItemWhereUniqueInput;
  updatedAt?: Date | null;
};
