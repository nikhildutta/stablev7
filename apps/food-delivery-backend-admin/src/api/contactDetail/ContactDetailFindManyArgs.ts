import { ContactDetailWhereInput } from "./ContactDetailWhereInput";
import { ContactDetailOrderByInput } from "./ContactDetailOrderByInput";

export type ContactDetailFindManyArgs = {
  where?: ContactDetailWhereInput;
  orderBy?: Array<ContactDetailOrderByInput>;
  skip?: number;
  take?: number;
};
