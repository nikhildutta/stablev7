import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { CustomerSubscriptionUpdateManyWithoutSubscriptionsInput } from "./CustomerSubscriptionUpdateManyWithoutSubscriptionsInput";
import { SubscriptionPlanWhereUniqueInput } from "../subscriptionPlan/SubscriptionPlanWhereUniqueInput";

export type SubscriptionUpdateInput = {
  appUsers?: AppUserWhereUniqueInput;
  autoRenew?: boolean;
  customerSubscriptions?: CustomerSubscriptionUpdateManyWithoutSubscriptionsInput;
  endDate?: Date | null;
  paymentStatus?: string;
  startDate?: Date;
  status?: string;
  subscriptionPlans?: SubscriptionPlanWhereUniqueInput;
  updatedAt?: Date | null;
};
