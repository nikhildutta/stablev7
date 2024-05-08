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
import { CustomerSubscriptionWhereInput } from "./CustomerSubscriptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomerSubscriptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomerSubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerSubscriptionWhereInput)
  @IsOptional()
  @Field(() => CustomerSubscriptionWhereInput, {
    nullable: true,
  })
  every?: CustomerSubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerSubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerSubscriptionWhereInput)
  @IsOptional()
  @Field(() => CustomerSubscriptionWhereInput, {
    nullable: true,
  })
  some?: CustomerSubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerSubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerSubscriptionWhereInput)
  @IsOptional()
  @Field(() => CustomerSubscriptionWhereInput, {
    nullable: true,
  })
  none?: CustomerSubscriptionWhereInput;
}
export { CustomerSubscriptionListRelationFilter as CustomerSubscriptionListRelationFilter };