import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput } from "./CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type SubscriptionCreateInput = {
  appUsers: AppUserWhereUniqueInput;
  autoRenew: boolean;
  customerSubscriptions?: CustomerSubscriptionCreateNestedManyWithoutSubscriptionsInput;
  endDate?: Date | null;
  paymentStatus: string;
  startDate: Date;
  status: string;
  subscriptionPlans: SubscriptionPlanWhereUniqueInput;
  updatedAt?: Date | null;
};
