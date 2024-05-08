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
import { OptionsAddOnsItemWhereUniqueInput } from "../../optionsAddOnsItem/base/OptionsAddOnsItemWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";

@InputType()
class OrderItemsAddonUpdateInput {
  @ApiProperty({
    required: false,
    type: () => OptionsAddOnsItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptionsAddOnsItemWhereUniqueInput)
  @IsOptional()
  @Field(() => OptionsAddOnsItemWhereUniqueInput, {
    nullable: true,
  })
  optionsAddOnsItem?: OptionsAddOnsItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderItemWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderItemWhereUniqueInput, {
    nullable: true,
  })
  orderItems?: OrderItemWhereUniqueInput;

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

export { OrderItemsAddonUpdateInput as OrderItemsAddonUpdateInput };