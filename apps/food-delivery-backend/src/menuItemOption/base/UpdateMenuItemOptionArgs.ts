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
import { MenuItemOptionWhereUniqueInput } from "./MenuItemOptionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MenuItemOptionUpdateInput } from "./MenuItemOptionUpdateInput";

@ArgsType()
class UpdateMenuItemOptionArgs {
  @ApiProperty({
    required: true,
    type: () => MenuItemOptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MenuItemOptionWhereUniqueInput)
  @Field(() => MenuItemOptionWhereUniqueInput, { nullable: false })
  where!: MenuItemOptionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MenuItemOptionUpdateInput,
  })
  @ValidateNested()
  @Type(() => MenuItemOptionUpdateInput)
  @Field(() => MenuItemOptionUpdateInput, { nullable: false })
  data!: MenuItemOptionUpdateInput;
}

export { UpdateMenuItemOptionArgs as UpdateMenuItemOptionArgs };
