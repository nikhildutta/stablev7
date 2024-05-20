import { OrderPackagingFeeWhereInput } from "./OrderPackagingFeeWhereInput";
import { OrderPackagingFeeOrderByInput } from "./OrderPackagingFeeOrderByInput";

export type OrderPackagingFeeFindManyArgs = {
  where?: OrderPackagingFeeWhereInput;
  orderBy?: Array<OrderPackagingFeeOrderByInput>;
  skip?: number;
  take?: number;
};
