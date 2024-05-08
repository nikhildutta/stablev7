import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactHashtagsMapUpdateManyWithoutContactDetailsInput } from "./ContactHashtagsMapUpdateManyWithoutContactDetailsInput";

export type ContactDetailUpdateInput = {
  addresses?: AddressWhereUniqueInput;
  contactHashtagsMap?: ContactHashtagsMapUpdateManyWithoutContactDetailsInput;
  contactName?: string | null;
  contactNumber?: string | null;
  updatedAt?: Date | null;
};
