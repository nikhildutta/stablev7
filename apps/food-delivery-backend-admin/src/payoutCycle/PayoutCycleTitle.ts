import { PayoutCycle as TPayoutCycle } from "../api/payoutCycle/PayoutCycle";

export const PAYOUTCYCLE_TITLE_FIELD = "utrNumber";

export const PayoutCycleTitle = (record: TPayoutCycle): string => {
  return record.utrNumber?.toString() || String(record.id);
};
