import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutProfilePicturesInput } from "./UserCreateNestedManyWithoutProfilePicturesInput";

export type ProfilePictureCreateInput = {
  imageUrl?: InputJsonValue;
  uploadedAt?: Date | null;
  users?: UserCreateNestedManyWithoutProfilePicturesInput;
};
