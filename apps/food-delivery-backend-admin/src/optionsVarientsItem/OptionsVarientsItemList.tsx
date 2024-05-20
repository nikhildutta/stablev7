import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { OPTIONSVARIENTSGROUP_TITLE_FIELD } from "../optionsVarientsGroup/OptionsVarientsGroupTitle";

export const OptionsVarientsItemList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OptionsVarientsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Additional Price" source="additionalPrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Default" source="isDefault" />
        <ReferenceField
          label="Options Varients Group"
          source="optionsvarientsgroup.id"
          reference="OptionsVarientsGroup"
        >
          <TextField source={OPTIONSVARIENTSGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Variant Description" source="variantDescription" />
        <TextField label="Variant Image Url" source="variantImageUrl" />
        <TextField label="Variant Name" source="variantName" />
      </Datagrid>
    </List>
  );
};
