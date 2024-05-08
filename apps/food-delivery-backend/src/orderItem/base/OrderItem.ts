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
import { ComplaintItem } from "../../complaintItem/base/ComplaintItem";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { OptionsVarientsItem } from "../../optionsVarientsItem/base/OptionsVarientsItem";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";
import { OrderItemsAddon } from "../../orderItemsAddon/base/OrderItemsAddon";
import { OrderItemsRating } from "../../orderItemsRating/base/OrderItemsRating";

@ObjectType()
class OrderItem {
  @ApiProperty({
    required: false,
    type: () => [ComplaintItem],
  })
  @ValidateNested()
  @Type(() => ComplaintItem)
  @IsOptional()
  complaintItem?: Array<ComplaintItem>;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customizationOptions!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => OptionsVarientsItem,
  })
  @ValidateNested()
  @Type(() => OptionsVarientsItem)
  optionsVarientsItem?: OptionsVarientsItem;

  @ApiProperty({
    required: true,
    type: () => OrderHistory,
  })
  @ValidateNested()
  @Type(() => OrderHistory)
  orderHistory?: OrderHistory;

  @ApiProperty({
    required: false,
    type: () => [OrderItemsAddon],
  })
  @ValidateNested()
  @Type(() => OrderItemsAddon)
  @IsOptional()
  orderItemsAddons?: Array<OrderItemsAddon>;

  @ApiProperty({
    required: false,
    type: () => [OrderItemsRating],
  })
  @ValidateNested()
  @Type(() => OrderItemsRating)
  @IsOptional()
  orderItemsRatings?: Array<OrderItemsRating>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity!: number | null;
}

export { OrderItem as OrderItem };