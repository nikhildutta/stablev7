import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "nickName";

export const AddressTitle = (record: TAddress): string => {
  return record.nickName?.toString() || String(record.id);
};
