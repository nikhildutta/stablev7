import { AppUser } from "../appUser/AppUser";
import { JsonValue } from "type-fest";

export type ErrorLog = {
  appUsers?: AppUser;
  errorCode: number | null;
  errorMessage: string | null;
  id: string;
  requestInfo: JsonValue;
  stackTrace: string | null;
  timestamp: Date | null;
};
