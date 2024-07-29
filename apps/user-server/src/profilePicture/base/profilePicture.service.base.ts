/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProfilePicture as PrismaProfilePicture,
  User as PrismaUser,
} from "@prisma/client";

export class ProfilePictureServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProfilePictureCountArgs, "select">
  ): Promise<number> {
    return this.prisma.profilePicture.count(args);
  }

  async profilePictures(
    args: Prisma.ProfilePictureFindManyArgs
  ): Promise<PrismaProfilePicture[]> {
    return this.prisma.profilePicture.findMany(args);
  }
  async profilePicture(
    args: Prisma.ProfilePictureFindUniqueArgs
  ): Promise<PrismaProfilePicture | null> {
    return this.prisma.profilePicture.findUnique(args);
  }
  async createProfilePicture(
    args: Prisma.ProfilePictureCreateArgs
  ): Promise<PrismaProfilePicture> {
    return this.prisma.profilePicture.create(args);
  }
  async updateProfilePicture(
    args: Prisma.ProfilePictureUpdateArgs
  ): Promise<PrismaProfilePicture> {
    return this.prisma.profilePicture.update(args);
  }
  async deleteProfilePicture(
    args: Prisma.ProfilePictureDeleteArgs
  ): Promise<PrismaProfilePicture> {
    return this.prisma.profilePicture.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<PrismaUser[]> {
    return this.prisma.profilePicture
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
