import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfilePictureService } from "./profilePicture.service";
import { ProfilePictureControllerBase } from "./base/profilePicture.controller.base";

@swagger.ApiTags("profilePictures")
@common.Controller("profilePictures")
export class ProfilePictureController extends ProfilePictureControllerBase {
  constructor(protected readonly service: ProfilePictureService) {
    super(service);
  }
}
