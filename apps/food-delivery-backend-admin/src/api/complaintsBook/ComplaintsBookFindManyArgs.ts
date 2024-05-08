import { ComplaintsBookWhereInput } from "./ComplaintsBookWhereInput";
import { ComplaintsBookOrderByInput } from "./ComplaintsBookOrderByInput";

export type ComplaintsBookFindManyArgs = {
  where?: ComplaintsBookWhereInput;
  orderBy?: Array<ComplaintsBookOrderByInput>;
  skip?: number;
  take?: number;
};
