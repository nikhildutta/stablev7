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
import { ComboGroupWhereUniqueInput } from "../../comboGroup/base/ComboGroupWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OptionsVarientsItemWhereUniqueInput } from "../../optionsVarientsItem/base/OptionsVarientsItemWhereUniqueInput";

@InputType()
class ComboItemTableWhereInput {
  @ApiProperty({
    required: false,
    type: () => ComboGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComboGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => ComboGroupWhereUniqueInput, {
    nullable: true,
  })
  comboGroups?: ComboGroupWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isAddonAllowed?: BooleanNullableFilter;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { ComboItemTableWhereInput as ComboItemTableWhereInput };