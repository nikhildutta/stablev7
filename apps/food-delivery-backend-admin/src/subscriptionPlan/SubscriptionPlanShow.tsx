import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "./SubscriptionPlanTitle";
import { SUBSCRIPTION_TITLE_FIELD } from "../subscription/SubscriptionTitle";

export const SubscriptionPlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Duration" source="duration" />
        <TextField label="Duration Unit" source="durationUnit" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Updated At" source="updatedAt" />
        <ReferenceManyField
          reference="CustomerSubscription"
          target="plan_id"
          label="CustomerSubscriptions"
        >
          <Datagrid rowClick="show">
            <TextField label="Activation Date" source="activationDate" />
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expiration Date" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="Renewal Count" source="renewalCount" />
            <ReferenceField
              label="Subscription Plans"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Subscriptions"
              source="subscription.id"
              reference="Subscription"
            >
              <TextField source={SUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="plan_id"
          label="Subscriptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="App Users"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Auto Renew" source="autoRenew" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Payment Status" source="paymentStatus" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Subscription Plans"
              source="subscriptionplan.id"
              reference="SubscriptionPlan"
            >
              <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
