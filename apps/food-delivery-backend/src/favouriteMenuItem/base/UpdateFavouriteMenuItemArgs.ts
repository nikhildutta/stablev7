/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FavouriteMenuItemWhereUniqueInput } from "./FavouriteMenuItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FavouriteMenuItemUpdateInput } from "./FavouriteMenuItemUpdateInput";

@ArgsType()
class UpdateFavouriteMenuItemArgs {
  @ApiProperty({
    required: true,
    type: () => FavouriteMenuItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FavouriteMenuItemWhereUniqueInput)
  @Field(() => FavouriteMenuItemWhereUniqueInput, { nullable: false })
  where!: FavouriteMenuItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FavouriteMenuItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => FavouriteMenuItemUpdateInput)
  @Field(() => FavouriteMenuItemUpdateInput, { nullable: false })
  data!: FavouriteMenuItemUpdateInput;
}

export { UpdateFavouriteMenuItemArgs as UpdateFavouriteMenuItemArgs };