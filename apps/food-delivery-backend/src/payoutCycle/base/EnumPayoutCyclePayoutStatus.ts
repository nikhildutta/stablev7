/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { registerEnumType } from "@nestjs/graphql";

export enum EnumPayoutCyclePayoutStatus {
  CycleInprogress = "Cycle_Inprogress",
  CycleComplete = "Cycle_Complete",
  StatementGenerated = "Statement_Generated",
  PayoutInProcess = "Payout_In_Process",
  Settled = "Settled",
}

registerEnumType(EnumPayoutCyclePayoutStatus, {
  name: "EnumPayoutCyclePayoutStatus",
});
