/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumMerchantInvoiceInvoiceStatus } from "./EnumMerchantInvoiceInvoiceStatus";
import { EnumMerchantInvoiceInvoiceType } from "./EnumMerchantInvoiceInvoiceType";
import { Restaurant } from "../../restaurant/base/Restaurant";

@ObjectType()
class MerchantInvoice {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  invoiceGenerationDate!: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  invoiceSentDate!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumMerchantInvoiceInvoiceStatus,
  })
  @IsEnum(EnumMerchantInvoiceInvoiceStatus)
  @IsOptional()
  @Field(() => EnumMerchantInvoiceInvoiceStatus, {
    nullable: true,
  })
  invoice_status?: "Invoice_Generated" | "Invoice_Sent" | "Error_Found" | null;

  @ApiProperty({
    required: false,
    enum: EnumMerchantInvoiceInvoiceType,
  })
  @IsEnum(EnumMerchantInvoiceInvoiceType)
  @IsOptional()
  @Field(() => EnumMerchantInvoiceInvoiceType, {
    nullable: true,
  })
  invoice_type?: "Online_Order" | "Dine_In" | "Take_Away" | "Recovery" | null;

  @ApiProperty({
    required: true,
    type: () => Restaurant,
  })
  @ValidateNested()
  @Type(() => Restaurant)
  restaurants?: Restaurant;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { MerchantInvoice as MerchantInvoice };