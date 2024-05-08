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
import { Discount } from "../../discount/base/Discount";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class DiscountType {
  @ApiProperty({
    required: false,
    type: () => [Discount],
  })
  @ValidateNested()
  @Type(() => Discount)
  @IsOptional()
  discount?: Array<Discount>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  discountType!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { DiscountType as DiscountType };