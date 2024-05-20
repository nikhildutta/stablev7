import { AppUser } from "../appUser/AppUser";
import { JsonValue } from "type-fest";

export type Report = {
  appUsers?: AppUser;
  createdAt: Date | null;
  id: string;
  reportData: JsonValue;
  reportType: string | null;
  updatedAt: Date | null;
};
