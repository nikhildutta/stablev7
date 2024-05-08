/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MenuItemOptionWhereUniqueInput } from "../../menuItemOption/base/MenuItemOptionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuItemOptionUpdateManyWithoutMenuItemsOptionsGroupsInput {
  @Field(() => [MenuItemOptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemOptionWhereUniqueInput],
  })
  connect?: Array<MenuItemOptionWhereUniqueInput>;

  @Field(() => [MenuItemOptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemOptionWhereUniqueInput],
  })
  disconnect?: Array<MenuItemOptionWhereUniqueInput>;

  @Field(() => [MenuItemOptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuItemOptionWhereUniqueInput],
  })
  set?: Array<MenuItemOptionWhereUniqueInput>;
}

export { MenuItemOptionUpdateManyWithoutMenuItemsOptionsGroupsInput as MenuItemOptionUpdateManyWithoutMenuItemsOptionsGroupsInput };