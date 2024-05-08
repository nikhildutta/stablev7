import { Address } from "../address/Address";
import { ContactHashtagsMap } from "../contactHashtagsMap/ContactHashtagsMap";

export type ContactDetail = {
  addresses?: Address;
  contactHashtagsMap?: Array<ContactHashtagsMap>;
  contactName: string | null;
  contactNumber: string | null;
  createdAt: Date | null;
  id: string;
  updatedAt: Date | null;
};
