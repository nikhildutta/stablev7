import { FulfillmentBookWhereInput } from "./FulfillmentBookWhereInput";
import { FulfillmentBookOrderByInput } from "./FulfillmentBookOrderByInput";

export type FulfillmentBookFindManyArgs = {
  where?: FulfillmentBookWhereInput;
  orderBy?: Array<FulfillmentBookOrderByInput>;
  skip?: number;
  take?: number;
};
