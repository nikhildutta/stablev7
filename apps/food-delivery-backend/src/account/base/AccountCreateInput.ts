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
import { AccountRestaurantLookupCreateNestedManyWithoutAccountsInput } from "./AccountRestaurantLookupCreateNestedManyWithoutAccountsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { AccountsAddressMapCreateNestedManyWithoutAccountsInput } from "./AccountsAddressMapCreateNestedManyWithoutAccountsInput";

@InputType()
class AccountCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountRestaurantLookupCreateNestedManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => AccountRestaurantLookupCreateNestedManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => AccountRestaurantLookupCreateNestedManyWithoutAccountsInput, {
    nullable: true,
  })
  accountRestaurantLookup?: AccountRestaurantLookupCreateNestedManyWithoutAccountsInput;

  @ApiProperty({
    required: false,
    type: () => AccountsAddressMapCreateNestedManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => AccountsAddressMapCreateNestedManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => AccountsAddressMapCreateNestedManyWithoutAccountsInput, {
    nullable: true,
  })
  accountsAddressMap?: AccountsAddressMapCreateNestedManyWithoutAccountsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  businessname?: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deliveryStateCode?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fssaiLicenseNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fssaiLicenseUrl?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  fssaiValidFrom?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  fssaiValidTo?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  inceptiondate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFssaiLicenseVerified?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  ispaid?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mobilenumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pin?: string | null;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { AccountCreateInput as AccountCreateInput };