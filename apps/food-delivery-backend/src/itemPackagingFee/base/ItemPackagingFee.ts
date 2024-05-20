/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  ValidateNested,
  IsNumber,
  IsOptional,
} from "class-validator";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";

@ObjectType()
class ItemPackagingFee {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => MenuItem,
  })
  @ValidateNested()
  @Type(() => MenuItem)
  menuItems?: MenuItem;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  packingFee!: Decimal | null;
}

export { ItemPackagingFee as ItemPackagingFee };
