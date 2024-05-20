import { ItemPackagingFeeWhereInput } from "./ItemPackagingFeeWhereInput";
import { ItemPackagingFeeOrderByInput } from "./ItemPackagingFeeOrderByInput";

export type ItemPackagingFeeFindManyArgs = {
  where?: ItemPackagingFeeWhereInput;
  orderBy?: Array<ItemPackagingFeeOrderByInput>;
  skip?: number;
  take?: number;
};
