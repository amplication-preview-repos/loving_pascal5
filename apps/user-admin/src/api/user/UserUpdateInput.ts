import { OtpUpdateManyWithoutUsersInput } from "./OtpUpdateManyWithoutUsersInput";
import { ProfilePictureWhereUniqueInput } from "../profilePicture/ProfilePictureWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  following?: string | null;
  lastName?: string | null;
  mobileNumber?: string | null;
  otps?: OtpUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: ProfilePictureWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
