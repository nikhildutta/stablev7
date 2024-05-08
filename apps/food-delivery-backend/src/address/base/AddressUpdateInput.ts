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
import { AccountsAddressMapUpdateManyWithoutAddressesInput } from "./AccountsAddressMapUpdateManyWithoutAddressesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { ContactDetailUpdateManyWithoutAddressesInput } from "./ContactDetailUpdateManyWithoutAddressesInput";
import { CustomerAddressMapUpdateManyWithoutAddressesInput } from "./CustomerAddressMapUpdateManyWithoutAddressesInput";
import { DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput } from "./DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput";
import { GeoLocationUpdateManyWithoutAddressesInput } from "./GeoLocationUpdateManyWithoutAddressesInput";
import { OrderHistoryUpdateManyWithoutAddressesInput } from "./OrderHistoryUpdateManyWithoutAddressesInput";

@InputType()
class AddressUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountsAddressMapUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => AccountsAddressMapUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => AccountsAddressMapUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  accountsAddressMap?: AccountsAddressMapUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine1?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine2?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine3?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: () => ContactDetailUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => ContactDetailUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => ContactDetailUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  contactDetails?: ContactDetailUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerAddressMapUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => CustomerAddressMapUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => CustomerAddressMapUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  customerAddressMap?: CustomerAddressMapUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: () => GeoLocationUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => GeoLocationUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => GeoLocationUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  geoLocations?: GeoLocationUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPrimary?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nickName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderHistoryUpdateManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => OrderHistoryUpdateManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => OrderHistoryUpdateManyWithoutAddressesInput, {
    nullable: true,
  })
  orderHistory?: OrderHistoryUpdateManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pincode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

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

export { AddressUpdateInput as AddressUpdateInput };