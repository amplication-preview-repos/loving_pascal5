import { ProfilePictureWhereInput } from "./ProfilePictureWhereInput";
import { ProfilePictureOrderByInput } from "./ProfilePictureOrderByInput";

export type ProfilePictureFindManyArgs = {
  where?: ProfilePictureWhereInput;
  orderBy?: Array<ProfilePictureOrderByInput>;
  skip?: number;
  take?: number;
};
