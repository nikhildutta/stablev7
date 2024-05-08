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
import { OPTIONSVARIENTSITEM_TITLE_FIELD } from "../optionsVarientsItem/OptionsVarientsItemTitle";

export const OptionsAddonsGroupList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OptionsAddonsGroups"}
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
        <TextField label="Lower Limit" source="lowerLimit" />
        <ReferenceField
          label="Options Varients Item"
          source="optionsvarientsitem.id"
          reference="OptionsVarientsItem"
        >
          <TextField source={OPTIONSVARIENTSITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Upper Limit" source="upperLimit" />
      </Datagrid>
    </List>
  );
};
