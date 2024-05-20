import { StringFilter } from "../../util/StringFilter";
import { PortalUserWhereUniqueInput } from "../portalUser/PortalUserWhereUniqueInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type PortalUsersRelationsLookupWhereInput = {
  id?: StringFilter;
  portalUsers?: PortalUserWhereUniqueInput;
  restaurants?: RestaurantWhereUniqueInput;
  user_role?: "Owner" | "Manager" | "Staff" | "Account_Manager";
};
