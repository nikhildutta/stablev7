import { PayoutInformationTableWhereInput } from "./PayoutInformationTableWhereInput";
import { PayoutInformationTableOrderByInput } from "./PayoutInformationTableOrderByInput";

export type PayoutInformationTableFindManyArgs = {
  where?: PayoutInformationTableWhereInput;
  orderBy?: Array<PayoutInformationTableOrderByInput>;
  skip?: number;
  take?: number;
};
