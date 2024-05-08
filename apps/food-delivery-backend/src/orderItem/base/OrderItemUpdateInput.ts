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
import { ComplaintItemUpdateManyWithoutOrderItemsInput } from "./ComplaintItemUpdateManyWithoutOrderItemsInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OptionsVarientsItemWhereUniqueInput } from "../../optionsVarientsItem/base/OptionsVarientsItemWhereUniqueInput";
import { OrderHistoryWhereUniqueInput } from "../../orderHistory/base/OrderHistoryWhereUniqueInput";
import { OrderItemsAddonUpdateManyWithoutOrderItemsInput } from "./OrderItemsAddonUpdateManyWithoutOrderItemsInput";
import { OrderItemsRatingUpdateManyWithoutOrderItemsInput } from "./OrderItemsRatingUpdateManyWithoutOrderItemsInput";

@InputType()
class OrderItemUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ComplaintItemUpdateManyWithoutOrderItemsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintItemUpdateManyWithoutOrderItemsInput)
  @IsOptional()
  @Field(() => ComplaintItemUpdateManyWithoutOrderItemsInput, {
    nullable: true,
  })
  complaintItem?: ComplaintItemUpdateManyWithoutOrderItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customizationOptions?: string | null;

  @ApiProperty({
    required: false,
    type: () => OptionsVarientsItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptionsVarientsItemWhereUniqueInput)
  @IsOptional()
  @Field(() => OptionsVarientsItemWhereUniqueInput, {
    nullable: true,
  })
  optionsVarientsItem?: OptionsVarientsItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderHistoryWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderHistoryWhereUniqueInput, {
    nullable: true,
  })
  orderHistory?: OrderHistoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemsAddonUpdateManyWithoutOrderItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemsAddonUpdateManyWithoutOrderItemsInput)
  @IsOptional()
  @Field(() => OrderItemsAddonUpdateManyWithoutOrderItemsInput, {
    nullable: true,
  })
  orderItemsAddons?: OrderItemsAddonUpdateManyWithoutOrderItemsInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemsRatingUpdateManyWithoutOrderItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemsRatingUpdateManyWithoutOrderItemsInput)
  @IsOptional()
  @Field(() => OrderItemsRatingUpdateManyWithoutOrderItemsInput, {
    nullable: true,
  })
  orderItemsRatings?: OrderItemsRatingUpdateManyWithoutOrderItemsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;
}

export { OrderItemUpdateInput as OrderItemUpdateInput };
