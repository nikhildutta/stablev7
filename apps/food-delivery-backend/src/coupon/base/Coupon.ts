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
import {
  IsString,
  ValidateNested,
  IsOptional,
  IsDate,
  IsBoolean,
} from "class-validator";
import { CouponRedemption } from "../../couponRedemption/base/CouponRedemption";
import { Type } from "class-transformer";
import { Discount } from "../../discount/base/Discount";
import { OrderHistory } from "../../orderHistory/base/OrderHistory";

@ObjectType()
class Coupon {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  code!: string;

  @ApiProperty({
    required: false,
    type: () => [CouponRedemption],
  })
  @ValidateNested()
  @Type(() => CouponRedemption)
  @IsOptional()
  couponRedemptions?: Array<CouponRedemption>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @ApiProperty({
    required: true,
    type: () => Discount,
  })
  @ValidateNested()
  @Type(() => Discount)
  discount?: Discount;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  expirationDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [OrderHistory],
  })
  @ValidateNested()
  @Type(() => OrderHistory)
  @IsOptional()
  orderHistory?: Array<OrderHistory>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;
}

export { Coupon as Coupon };