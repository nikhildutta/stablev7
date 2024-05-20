import { ComboGroupWhereInput } from "./ComboGroupWhereInput";
import { ComboGroupOrderByInput } from "./ComboGroupOrderByInput";

export type ComboGroupFindManyArgs = {
  where?: ComboGroupWhereInput;
  orderBy?: Array<ComboGroupOrderByInput>;
  skip?: number;
  take?: number;
};
