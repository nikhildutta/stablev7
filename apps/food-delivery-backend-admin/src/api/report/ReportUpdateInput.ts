import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ReportUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  reportData?: InputJsonValue;
  reportType?: string | null;
  updatedAt?: Date | null;
};
