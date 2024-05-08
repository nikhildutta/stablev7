import { SortOrder } from "../../util/SortOrder";

export type NotificationSettingOrderByInput = {
  user_id?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  settingName?: SortOrder;
  settingValue?: SortOrder;
  updatedAt?: SortOrder;
};
