import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { ContactHashtagsMapCreateNestedManyWithoutContactDetailsInput } from "./ContactHashtagsMapCreateNestedManyWithoutContactDetailsInput";

export type ContactDetailCreateInput = {
  addresses: AddressWhereUniqueInput;
  contactHashtagsMap?: ContactHashtagsMapCreateNestedManyWithoutContactDetailsInput;
  contactName?: string | null;
  contactNumber?: string | null;
  updatedAt?: Date | null;
};
