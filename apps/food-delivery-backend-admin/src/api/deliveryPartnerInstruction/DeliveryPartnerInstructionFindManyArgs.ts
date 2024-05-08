import { DeliveryPartnerInstructionWhereInput } from "./DeliveryPartnerInstructionWhereInput";
import { DeliveryPartnerInstructionOrderByInput } from "./DeliveryPartnerInstructionOrderByInput";

export type DeliveryPartnerInstructionFindManyArgs = {
  where?: DeliveryPartnerInstructionWhereInput;
  orderBy?: Array<DeliveryPartnerInstructionOrderByInput>;
  skip?: number;
  take?: number;
};
