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
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { ComplaintsBookWhereUniqueInput } from "../../complaintsBook/base/ComplaintsBookWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ComplaintsPhotoUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  complaintImageUrl?: string | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | null;
}

export { ComplaintsPhotoUpdateInput as ComplaintsPhotoUpdateInput };
