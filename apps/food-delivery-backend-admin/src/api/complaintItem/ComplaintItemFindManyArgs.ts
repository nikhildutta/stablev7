import { ComplaintItemWhereInput } from "./ComplaintItemWhereInput";
import { ComplaintItemOrderByInput } from "./ComplaintItemOrderByInput";

export type ComplaintItemFindManyArgs = {
  where?: ComplaintItemWhereInput;
  orderBy?: Array<ComplaintItemOrderByInput>;
  skip?: number;
  take?: number;
};
