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
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsDate,
} from "class-validator";
import { DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput } from "./DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput";
import { Type } from "class-transformer";

@InputType()
class DeliveryPartnerInstructionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addDirectionToReachAudioUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addDirectionToReachInstruction?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  avoidCallingBool?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  avoidRingingBellBool?: boolean | null;

  @ApiProperty({
    required: false,
    type: () =>
      DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput,
  })
  @ValidateNested()
  @Type(
    () =>
      DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput
  )
  @IsOptional()
  @Field(
    () =>
      DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput,
    {
      nullable: true,
    }
  )
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapUpdateManyWithoutDeliveryPartnerInstructionsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  leaveAtDoorBool?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  leaveWithSecurityBool?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  petAtHome?: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { DeliveryPartnerInstructionUpdateInput as DeliveryPartnerInstructionUpdateInput };
