import { PayoutCycleWhereInput } from "./PayoutCycleWhereInput";
import { PayoutCycleOrderByInput } from "./PayoutCycleOrderByInput";

export type PayoutCycleFindManyArgs = {
  where?: PayoutCycleWhereInput;
  orderBy?: Array<PayoutCycleOrderByInput>;
  skip?: number;
  take?: number;
};
