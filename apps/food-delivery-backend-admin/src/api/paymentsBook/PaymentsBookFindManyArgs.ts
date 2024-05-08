import { PaymentsBookWhereInput } from "./PaymentsBookWhereInput";
import { PaymentsBookOrderByInput } from "./PaymentsBookOrderByInput";

export type PaymentsBookFindManyArgs = {
  where?: PaymentsBookWhereInput;
  orderBy?: Array<PaymentsBookOrderByInput>;
  skip?: number;
  take?: number;
};
