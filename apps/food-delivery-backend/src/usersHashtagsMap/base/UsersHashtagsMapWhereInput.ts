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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { HashtagWhereUniqueInput } from "../../hashtag/base/HashtagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class UsersHashtagsMapWhereInput {
  @ApiProperty({
    required: false,
    type: () => AppUserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppUserWhereUniqueInput)
  @IsOptional()
  @Field(() => AppUserWhereUniqueInput, {
    nullable: true,
  })
  appUsers?: AppUserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => HashtagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HashtagWhereUniqueInput)
  @IsOptional()
  @Field(() => HashtagWhereUniqueInput, {
    nullable: true,
  })
  hashtags?: HashtagWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { UsersHashtagsMapWhereInput as UsersHashtagsMapWhereInput };