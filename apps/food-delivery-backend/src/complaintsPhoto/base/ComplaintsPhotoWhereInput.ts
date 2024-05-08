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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ComplaintsBookWhereUniqueInput } from "../../complaintsBook/base/ComplaintsBookWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class ComplaintsPhotoWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  complaintImageUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ComplaintsBookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComplaintsBookWhereUniqueInput)
  @IsOptional()
  @Field(() => ComplaintsBookWhereUniqueInput, {
    nullable: true,
  })
  complaintsBook?: ComplaintsBookWhereUniqueInput;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { ComplaintsPhotoWhereInput as ComplaintsPhotoWhereInput };