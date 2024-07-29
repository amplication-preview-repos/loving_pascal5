import * as graphql from "@nestjs/graphql";
import { ProfilePictureResolverBase } from "./base/profilePicture.resolver.base";
import { ProfilePicture } from "./base/ProfilePicture";
import { ProfilePictureService } from "./profilePicture.service";

@graphql.Resolver(() => ProfilePicture)
export class ProfilePictureResolver extends ProfilePictureResolverBase {
  constructor(protected readonly service: ProfilePictureService) {
    super(service);
  }
}
