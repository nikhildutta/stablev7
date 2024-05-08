import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type AccessLogUpdateInput = {
  action?: string | null;
  appUsers?: AppUserWhereUniqueInput;
  deviceInfo?: InputJsonValue;
  errorMessage?: string | null;
  ipAddress?: string | null;
  responseStatus?: number | null;
  timestamp?: Date | null;
  updatedAt?: Date | null;
};
