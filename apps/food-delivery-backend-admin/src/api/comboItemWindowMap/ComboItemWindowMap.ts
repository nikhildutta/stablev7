import { ComboGroup } from "../comboGroup/ComboGroup";
import { TimeWindow } from "../timeWindow/TimeWindow";

export type ComboItemWindowMap = {
  comboGroups?: ComboGroup;
  createdAt: Date | null;
  id: string;
  is247: boolean | null;
  timeWindow?: TimeWindow;
  time_window_day?:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | "All_Days"
    | null;
  updatedAt: Date | null;
};
