import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ErrorLogCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  errorCode?: number | null;
  errorMessage?: string | null;
  requestInfo?: InputJsonValue;
  stackTrace?: string | null;
  timestamp?: Date | null;
};
