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
import { IsDate, IsOptional, ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Favourite } from "../../favourite/base/Favourite";
import { MenuItem } from "../../menuItem/base/MenuItem";

@ObjectType()
class FavouriteMenuItem {
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
    type: () => Favourite,
  })
  @ValidateNested()
  @Type(() => Favourite)
  favourites?: Favourite;

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
}

export { FavouriteMenuItem as FavouriteMenuItem };
