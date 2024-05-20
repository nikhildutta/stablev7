import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ReportCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  reportData?: InputJsonValue;
  reportType?: string | null;
  updatedAt?: Date | null;
};
