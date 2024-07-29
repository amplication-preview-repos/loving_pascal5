/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProfilePicture } from "./ProfilePicture";
import { ProfilePictureCountArgs } from "./ProfilePictureCountArgs";
import { ProfilePictureFindManyArgs } from "./ProfilePictureFindManyArgs";
import { ProfilePictureFindUniqueArgs } from "./ProfilePictureFindUniqueArgs";
import { CreateProfilePictureArgs } from "./CreateProfilePictureArgs";
import { UpdateProfilePictureArgs } from "./UpdateProfilePictureArgs";
import { DeleteProfilePictureArgs } from "./DeleteProfilePictureArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { ProfilePictureService } from "../profilePicture.service";
@graphql.Resolver(() => ProfilePicture)
export class ProfilePictureResolverBase {
  constructor(protected readonly service: ProfilePictureService) {}

  async _profilePicturesMeta(
    @graphql.Args() args: ProfilePictureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProfilePicture])
  async profilePictures(
    @graphql.Args() args: ProfilePictureFindManyArgs
  ): Promise<ProfilePicture[]> {
    return this.service.profilePictures(args);
  }

  @graphql.Query(() => ProfilePicture, { nullable: true })
  async profilePicture(
    @graphql.Args() args: ProfilePictureFindUniqueArgs
  ): Promise<ProfilePicture | null> {
    const result = await this.service.profilePicture(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProfilePicture)
  async createProfilePicture(
    @graphql.Args() args: CreateProfilePictureArgs
  ): Promise<ProfilePicture> {
    return await this.service.createProfilePicture({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProfilePicture)
  async updateProfilePicture(
    @graphql.Args() args: UpdateProfilePictureArgs
  ): Promise<ProfilePicture | null> {
    try {
      return await this.service.updateProfilePicture({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProfilePicture)
  async deleteProfilePicture(
    @graphql.Args() args: DeleteProfilePictureArgs
  ): Promise<ProfilePicture | null> {
    try {
      return await this.service.deleteProfilePicture(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User], { name: "users" })
  async findUsers(
    @graphql.Parent() parent: ProfilePicture,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
