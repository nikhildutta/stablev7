import { AppUser } from "../appUser/AppUser";
import { JsonValue } from "type-fest";

export type AccessLog = {
  action: string | null;
  appUsers?: AppUser;
  createdAt: Date | null;
  deviceInfo: JsonValue;
  errorMessage: string | null;
  id: string;
  ipAddress: string | null;
  responseStatus: number | null;
  timestamp: Date | null;
  updatedAt: Date | null;
};
