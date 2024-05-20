import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { OPTIONSADDONSGROUP_TITLE_FIELD } from "../optionsAddonsGroup/OptionsAddonsGroupTitle";

export const OptionsAddOnsItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OptionsAddOnsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Add On Name" source="addOnName" />
        <TextField label="Add On Price" source="addOnPrice" />
        <TextField label="Addons Image Url" source="addonsImageUrl" />
        <BooleanField label="Contains Egg" source="containsEgg" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Vegetarian" source="isVegetarian" />
        <ReferenceField
          label="Options Addons Group"
          source="optionsaddonsgroup.id"
          reference="OptionsAddonsGroup"
        >
          <TextField source={OPTIONSADDONSGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
