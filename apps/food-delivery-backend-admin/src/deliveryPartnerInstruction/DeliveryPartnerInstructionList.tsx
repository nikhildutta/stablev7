import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DeliveryPartnerInstructionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeliveryPartnerInstructions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Add Direction To Reach Audio Url"
          source="addDirectionToReachAudioUrl"
        />
        <TextField
          label="Add Direction To Reach Instruction"
          source="addDirectionToReachInstruction"
        />
        <BooleanField label="Avoid Calling Bool" source="avoidCallingBool" />
        <BooleanField
          label="Avoid Ringing Bell Bool"
          source="avoidRingingBellBool"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Leave At Door Bool" source="leaveAtDoorBool" />
        <BooleanField
          label="Leave With Security Bool"
          source="leaveWithSecurityBool"
        />
        <BooleanField label="Pet At Home" source="petAtHome" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
