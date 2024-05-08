import { TimeWindowWhereInput } from "./TimeWindowWhereInput";
import { TimeWindowOrderByInput } from "./TimeWindowOrderByInput";

export type TimeWindowFindManyArgs = {
  where?: TimeWindowWhereInput;
  orderBy?: Array<TimeWindowOrderByInput>;
  skip?: number;
  take?: number;
};
