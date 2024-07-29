import { OtpCreateNestedManyWithoutUsersInput } from "./OtpCreateNestedManyWithoutUsersInput";
import { ProfilePictureWhereUniqueInput } from "../profilePicture/ProfilePictureWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  following?: string | null;
  lastName?: string | null;
  mobileNumber?: string | null;
  otps?: OtpCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: ProfilePictureWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
