/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintItemUpdateManyWithoutComplaintsBooksInput } from "./ComplaintItemUpdateManyWithoutComplaintsBooksInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  IsNumber,
  IsInt,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput } from "./ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput";
import { EnumComplaintsBookIssueCategory } from "./EnumComplaintsBookIssueCategory";
import { PaymentsBookWhereUniqueInput } from "../../paymentsBook/base/PaymentsBookWhereUniqueInput";
import { Decimal } from "decimal.js";
import { EnumComplaintsBookRefundEligibility } from "./EnumComplaintsBookRefundEligibility";
import { EnumComplaintsBookRefundMode } from "./EnumComplaintsBookRefundMode";
import { EnumComplaintsBookRefundType } from "./EnumComplaintsBookRefundType";

@InputType()
class ComplaintsBookUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ComplaintItemUpdateManyWithoutComplaintsBooksInput,
  })
  @ValidateNested()
  @Type(() => ComplaintItemUpdateManyWithoutComplaintsBooksInput)
  @IsOptional()
  @Field(() => ComplaintItemUpdateManyWithoutComplaintsBooksInput, {
    nullable: true,
  })
  complaintItem?: ComplaintItemUpdateManyWithoutComplaintsBooksInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput,
  })
  @ValidateNested()
  @Type(() => ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput)
  @IsOptional()
  @Field(() => ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput, {
    nullable: true,
  })
  complaintsPhotos?: ComplaintsPhotoUpdateManyWithoutComplaintsBooksInput;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookIssueCategory,
  })
  @IsEnum(EnumComplaintsBookIssueCategory)
  @IsOptional()
  @Field(() => EnumComplaintsBookIssueCategory, {
    nullable: true,
  })
  issue_category?:
    | "Order_Cancellation"
    | "Missing_Items"
    | "Inadequate_Quantity"
    | "Food_Quality"
    | "Packaging_Issues"
    | "Delivery_Issues"
    | "Payment_Issues"
    | "Other_Issues"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  issueDescription?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  orderId?: string;

  @ApiProperty({
    required: false,
    type: () => PaymentsBookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentsBookWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentsBookWhereUniqueInput, {
    nullable: true,
  })
  paymentsBook?: PaymentsBookWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  refundAmount?: Decimal | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundEligibility,
  })
  @IsEnum(EnumComplaintsBookRefundEligibility)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundEligibility, {
    nullable: true,
  })
  refund_eligibility?:
    | "No_Refund"
    | "Customer_Refund"
    | "Merchant_Refund"
    | "Both"
    | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundMode,
  })
  @IsEnum(EnumComplaintsBookRefundMode)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundMode, {
    nullable: true,
  })
  refund_mode?: "Wallet" | "Original_Payment_Method" | null;

  @ApiProperty({
    required: false,
    enum: EnumComplaintsBookRefundType,
  })
  @IsEnum(EnumComplaintsBookRefundType)
  @IsOptional()
  @Field(() => EnumComplaintsBookRefundType, {
    nullable: true,
  })
  refund_type?: "Full" | "Partial" | "Custom" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  ticketId?: number;

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

export { ComplaintsBookUpdateInput as ComplaintsBookUpdateInput };