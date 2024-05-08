import { ItemPackagingFee as TItemPackagingFee } from "../api/itemPackagingFee/ItemPackagingFee";

export const ITEMPACKAGINGFEE_TITLE_FIELD = "id";

export const ItemPackagingFeeTitle = (record: TItemPackagingFee): string => {
  return record.id?.toString() || String(record.id);
};
