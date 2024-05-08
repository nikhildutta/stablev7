import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ErrorLogUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  errorCode?: number | null;
  errorMessage?: string | null;
  requestInfo?: InputJsonValue;
  stackTrace?: string | null;
  timestamp?: Date | null;
};
