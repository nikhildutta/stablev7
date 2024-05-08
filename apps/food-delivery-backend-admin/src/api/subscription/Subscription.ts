import { AppUser } from "../appUser/AppUser";
import { CustomerSubscription } from "../customerSubscription/CustomerSubscription";
import { SubscriptionPlan } from "../subscriptionPlan/SubscriptionPlan";

export type Subscription = {
  appUsers?: AppUser;
  autoRenew: boolean;
  createdAt: Date | null;
  customerSubscriptions?: Array<CustomerSubscription>;
  endDate: Date | null;
  id: string;
  paymentStatus: string;
  startDate: Date;
  status: string;
  subscriptionPlans?: SubscriptionPlan;
  updatedAt: Date | null;
};
