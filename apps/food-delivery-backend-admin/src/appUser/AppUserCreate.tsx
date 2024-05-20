import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccessLogTitle } from "../accessLog/AccessLogTitle";
import { CouponRedemptionTitle } from "../couponRedemption/CouponRedemptionTitle";
import { CustomerPreferenceTitle } from "../customerPreference/CustomerPreferenceTitle";
import { CustomerSubscriptionTitle } from "../customerSubscription/CustomerSubscriptionTitle";
import { ErrorLogTitle } from "../errorLog/ErrorLogTitle";
import { FavouriteTitle } from "../favourite/FavouriteTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { NotificationSettingTitle } from "../notificationSetting/NotificationSettingTitle";
import { OrderHistoryTitle } from "../orderHistory/OrderHistoryTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";
import { RewardTitle } from "../reward/RewardTitle";
import { SettlementsBreakupTitle } from "../settlementsBreakup/SettlementsBreakupTitle";
import { SsoLookupTitle } from "../ssoLookup/SsoLookupTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { UserCustomerLookupTitle } from "../userCustomerLookup/UserCustomerLookupTitle";
import { UserFeedbackTitle } from "../userFeedback/UserFeedbackTitle";
import { UsersHashtagsMapTitle } from "../usersHashtagsMap/UsersHashtagsMapTitle";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accessLogs"
          reference="AccessLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccessLogTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="account_status"
          label="Account Status"
          choices={[
            { label: "Live", value: "Live" },
            { label: "Is_Disabled", value: "Is_Disabled" },
            { label: "Is_Deleted", value: "Is_Deleted" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="couponRedemptions"
          reference="CouponRedemption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CouponRedemptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customerPreferences"
          reference="CustomerPreference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerPreferenceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customerSubscriptions"
          reference="CustomerSubscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerSubscriptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="errorLogs"
          reference="ErrorLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ErrorLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="favourites"
          reference="Favourite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavouriteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="notificationSettings"
          reference="NotificationSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="orderHistory"
          reference="OrderHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderHistoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="Profile Pic Url" source="profilePicUrl" />
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rewards"
          reference="Reward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RewardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="settlementsBreakup"
          reference="SettlementsBreakup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SettlementsBreakupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ssoLookup"
          reference="SsoLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SsoLookupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="subscriptions"
          reference="Subscription"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SubscriptionTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <ReferenceArrayInput
          source="userCustomerLookup"
          reference="UserCustomerLookup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserCustomerLookupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userFeedbacks"
          reference="UserFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="usersHashtagsMap"
          reference="UsersHashtagsMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsersHashtagsMapTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
