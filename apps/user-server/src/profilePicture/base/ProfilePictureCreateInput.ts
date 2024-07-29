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
import { IsJSONValue } from "../../validators";
import { IsOptional, IsDate, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutProfilePicturesInput } from "./UserCreateNestedManyWithoutProfilePicturesInput";

@InputType()
class ProfilePictureCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  imageUrl?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  uploadedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutProfilePicturesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutProfilePicturesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutProfilePicturesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutProfilePicturesInput;
}

export { ProfilePictureCreateInput as ProfilePictureCreateInput };
