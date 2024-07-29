import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutProfilePicturesInput } from "./UserUpdateManyWithoutProfilePicturesInput";

export type ProfilePictureUpdateInput = {
  imageUrl?: InputJsonValue;
  uploadedAt?: Date | null;
  users?: UserUpdateManyWithoutProfilePicturesInput;
};
