import { PortalUserWhereInput } from "./PortalUserWhereInput";
import { PortalUserOrderByInput } from "./PortalUserOrderByInput";

export type PortalUserFindManyArgs = {
  where?: PortalUserWhereInput;
  orderBy?: Array<PortalUserOrderByInput>;
  skip?: number;
  take?: number;
};
