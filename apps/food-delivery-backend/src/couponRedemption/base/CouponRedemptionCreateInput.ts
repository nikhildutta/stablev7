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
import { AppUserWhereUniqueInput } from "../../appUser/base/AppUserWhereUniqueInput";
import { ValidateNested, IsBoolean, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { CouponWhereUniqueInput } from "../../coupon/base/CouponWhereUniqueInput";

@InputType()
class CouponRedemptionCreateInput {
  @ApiProperty({
    required: true,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @Field(() => AppUserWhereUniqueInput)
  appUsers!: AppUserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CouponWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CouponWhereUniqueInput)
  @Field(() => CouponWhereUniqueInput)
  coupons!: CouponWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRedeemed?: boolean | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  redemptionDate!: Date;

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

export { CouponRedemptionCreateInput as CouponRedemptionCreateInput };
