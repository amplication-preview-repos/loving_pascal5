import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfilePictureServiceBase } from "./base/profilePicture.service.base";

@Injectable()
export class ProfilePictureService extends ProfilePictureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
