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
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsBoolean,
  IsDate,
  IsString,
} from "class-validator";
import { Decimal } from "decimal.js";
import { ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput } from "./ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput";
import { Type } from "class-transformer";
import { OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput } from "./OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput";
import { OptionsVarientsGroupWhereUniqueInput } from "../../optionsVarientsGroup/base/OptionsVarientsGroupWhereUniqueInput";
import { OrderItemUpdateManyWithoutOptionsVarientsItemsInput } from "./OrderItemUpdateManyWithoutOptionsVarientsItemsInput";

@InputType()
class OptionsVarientsItemUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  additionalPrice?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput,
  })
  @ValidateNested()
  @Type(() => ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput)
  @IsOptional()
  @Field(() => ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput, {
    nullable: true,
  })
  comboItemTable?: ComboItemTableUpdateManyWithoutOptionsVarientsItemsInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDefault?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput,
  })
  @ValidateNested()
  @Type(() => OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput)
  @IsOptional()
  @Field(() => OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput, {
    nullable: true,
  })
  optionsAddonsGroup?: OptionsAddonsGroupUpdateManyWithoutOptionsVarientsItemsInput;

  @ApiProperty({
    required: false,
    type: () => OptionsVarientsGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptionsVarientsGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => OptionsVarientsGroupWhereUniqueInput, {
    nullable: true,
  })
  optionsVarientsGroup?: OptionsVarientsGroupWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderItemUpdateManyWithoutOptionsVarientsItemsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemUpdateManyWithoutOptionsVarientsItemsInput)
  @IsOptional()
  @Field(() => OrderItemUpdateManyWithoutOptionsVarientsItemsInput, {
    nullable: true,
  })
  orderItems?: OrderItemUpdateManyWithoutOptionsVarientsItemsInput;

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
  variantDescription?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  variantImageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  variantName?: string | null;
}

export { OptionsVarientsItemUpdateInput as OptionsVarientsItemUpdateInput };