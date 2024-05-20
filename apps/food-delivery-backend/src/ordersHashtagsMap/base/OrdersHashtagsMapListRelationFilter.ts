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
import { OrdersHashtagsMapWhereInput } from "./OrdersHashtagsMapWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrdersHashtagsMapListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrdersHashtagsMapWhereInput,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapWhereInput)
  @IsOptional()
  @Field(() => OrdersHashtagsMapWhereInput, {
    nullable: true,
  })
  every?: OrdersHashtagsMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrdersHashtagsMapWhereInput,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapWhereInput)
  @IsOptional()
  @Field(() => OrdersHashtagsMapWhereInput, {
    nullable: true,
  })
  some?: OrdersHashtagsMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrdersHashtagsMapWhereInput,
  })
  @ValidateNested()
  @Type(() => OrdersHashtagsMapWhereInput)
  @IsOptional()
  @Field(() => OrdersHashtagsMapWhereInput, {
    nullable: true,
  })
  none?: OrdersHashtagsMapWhereInput;
}
export { OrdersHashtagsMapListRelationFilter as OrdersHashtagsMapListRelationFilter };
