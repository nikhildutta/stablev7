import { ComboItemTableWhereInput } from "./ComboItemTableWhereInput";
import { ComboItemTableOrderByInput } from "./ComboItemTableOrderByInput";

export type ComboItemTableFindManyArgs = {
  where?: ComboItemTableWhereInput;
  orderBy?: Array<ComboItemTableOrderByInput>;
  skip?: number;
  take?: number;
};
