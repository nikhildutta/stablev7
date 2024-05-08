/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DeliveryPartnerInstructionWhereUniqueInput } from "../../deliveryPartnerInstruction/base/DeliveryPartnerInstructionWhereUniqueInput";

@InputType()
class DeliveryInstructionAddressMapCreateInput {
  @ApiProperty({
    required: true,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @Field(() => AddressWhereUniqueInput)
  addresses!: AddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DeliveryPartnerInstructionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeliveryPartnerInstructionWhereUniqueInput)
  @Field(() => DeliveryPartnerInstructionWhereUniqueInput)
  deliveryPartnerInstruction!: DeliveryPartnerInstructionWhereUniqueInput;
}

export { DeliveryInstructionAddressMapCreateInput as DeliveryInstructionAddressMapCreateInput };