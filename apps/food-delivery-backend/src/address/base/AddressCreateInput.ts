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
import { AccountsAddressMapCreateNestedManyWithoutAddressesInput } from "./AccountsAddressMapCreateNestedManyWithoutAddressesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { ContactDetailCreateNestedManyWithoutAddressesInput } from "./ContactDetailCreateNestedManyWithoutAddressesInput";
import { CustomerAddressMapCreateNestedManyWithoutAddressesInput } from "./CustomerAddressMapCreateNestedManyWithoutAddressesInput";
import { DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput } from "./DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput";
import { GeoLocationCreateNestedManyWithoutAddressesInput } from "./GeoLocationCreateNestedManyWithoutAddressesInput";
import { OrderHistoryCreateNestedManyWithoutAddressesInput } from "./OrderHistoryCreateNestedManyWithoutAddressesInput";

@InputType()
class AddressCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountsAddressMapCreateNestedManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => AccountsAddressMapCreateNestedManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => AccountsAddressMapCreateNestedManyWithoutAddressesInput, {
    nullable: true,
  })
  accountsAddressMap?: AccountsAddressMapCreateNestedManyWithoutAddressesInput;

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
    type: () => ContactDetailCreateNestedManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => ContactDetailCreateNestedManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => ContactDetailCreateNestedManyWithoutAddressesInput, {
    nullable: true,
  })
  contactDetails?: ContactDetailCreateNestedManyWithoutAddressesInput;

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
    type: () => CustomerAddressMapCreateNestedManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => CustomerAddressMapCreateNestedManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => CustomerAddressMapCreateNestedManyWithoutAddressesInput, {
    nullable: true,
  })
  customerAddressMap?: CustomerAddressMapCreateNestedManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: () =>
      DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(
    () => DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput
  )
  @IsOptional()
  @Field(
    () => DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput,
    {
      nullable: true,
    }
  )
  deliveryInstructionAddressMap?: DeliveryInstructionAddressMapCreateNestedManyWithoutAddressesInput;

  @ApiProperty({
    required: false,
    type: () => GeoLocationCreateNestedManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => GeoLocationCreateNestedManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => GeoLocationCreateNestedManyWithoutAddressesInput, {
    nullable: true,
  })
  geoLocations?: GeoLocationCreateNestedManyWithoutAddressesInput;

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
    type: () => OrderHistoryCreateNestedManyWithoutAddressesInput,
  })
  @ValidateNested()
  @Type(() => OrderHistoryCreateNestedManyWithoutAddressesInput)
  @IsOptional()
  @Field(() => OrderHistoryCreateNestedManyWithoutAddressesInput, {
    nullable: true,
  })
  orderHistory?: OrderHistoryCreateNestedManyWithoutAddressesInput;

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

export { AddressCreateInput as AddressCreateInput };