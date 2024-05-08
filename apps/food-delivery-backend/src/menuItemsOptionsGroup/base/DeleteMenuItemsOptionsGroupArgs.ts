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
import { MenuItemsOptionsGroupWhereUniqueInput } from "./MenuItemsOptionsGroupWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMenuItemsOptionsGroupArgs {
  @ApiProperty({
    required: true,
    type: () => MenuItemsOptionsGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemsOptionsGroupWhereUniqueInput)
  @Field(() => MenuItemsOptionsGroupWhereUniqueInput, { nullable: false })
  where!: MenuItemsOptionsGroupWhereUniqueInput;
}

export { DeleteMenuItemsOptionsGroupArgs as DeleteMenuItemsOptionsGroupArgs };