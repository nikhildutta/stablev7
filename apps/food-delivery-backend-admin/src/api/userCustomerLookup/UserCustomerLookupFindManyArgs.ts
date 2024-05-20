import { UserCustomerLookupWhereInput } from "./UserCustomerLookupWhereInput";
import { UserCustomerLookupOrderByInput } from "./UserCustomerLookupOrderByInput";

export type UserCustomerLookupFindManyArgs = {
  where?: UserCustomerLookupWhereInput;
  orderBy?: Array<UserCustomerLookupOrderByInput>;
  skip?: number;
  take?: number;
};
