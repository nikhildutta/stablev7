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
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";
import { ValidateNested, IsNumber, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";

@InputType()
class ItemPackagingFeeCreateInput {
  @ApiProperty({
    required: true,
    type: () => MenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereUniqueInput)
  @Field(() => MenuItemWhereUniqueInput)
  menuItems!: MenuItemWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  packingFee?: Decimal | null;
}

export { ItemPackagingFeeCreateInput as ItemPackagingFeeCreateInput };
