import { SsoLookupWhereInput } from "./SsoLookupWhereInput";
import { SsoLookupOrderByInput } from "./SsoLookupOrderByInput";

export type SsoLookupFindManyArgs = {
  where?: SsoLookupWhereInput;
  orderBy?: Array<SsoLookupOrderByInput>;
  skip?: number;
  take?: number;
};
