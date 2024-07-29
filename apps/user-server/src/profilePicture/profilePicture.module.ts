import { Module } from "@nestjs/common";
import { ProfilePictureModuleBase } from "./base/profilePicture.module.base";
import { ProfilePictureService } from "./profilePicture.service";
import { ProfilePictureController } from "./profilePicture.controller";
import { ProfilePictureResolver } from "./profilePicture.resolver";

@Module({
  imports: [ProfilePictureModuleBase],
  controllers: [ProfilePictureController],
  providers: [ProfilePictureService, ProfilePictureResolver],
  exports: [ProfilePictureService],
})
export class ProfilePictureModule {}
