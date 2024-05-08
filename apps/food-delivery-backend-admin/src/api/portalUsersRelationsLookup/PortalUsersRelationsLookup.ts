import { PortalUser } from "../portalUser/PortalUser";
import { Restaurant } from "../restaurant/Restaurant";

export type PortalUsersRelationsLookup = {
  id: string;
  portalUsers?: PortalUser;
  restaurants?: Restaurant;
  user_role?: "Owner" | "Manager" | "Staff" | "Account_Manager" | null;
};
