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
import { OrderHistoryWhereInput } from "./OrderHistoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrderHistoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrderHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderHistoryWhereInput)
  @IsOptional()
  @Field(() => OrderHistoryWhereInput, {
    nullable: true,
  })
  every?: OrderHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderHistoryWhereInput)
  @IsOptional()
  @Field(() => OrderHistoryWhereInput, {
    nullable: true,
  })
  some?: OrderHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrderHistoryWhereInput,
  })
  @ValidateNested()
  @Type(() => OrderHistoryWhereInput)
  @IsOptional()
  @Field(() => OrderHistoryWhereInput, {
    nullable: true,
  })
  none?: OrderHistoryWhereInput;
}
export { OrderHistoryListRelationFilter as OrderHistoryListRelationFilter };
