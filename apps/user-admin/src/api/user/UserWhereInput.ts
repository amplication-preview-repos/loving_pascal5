import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OtpListRelationFilter } from "../otp/OtpListRelationFilter";
import { ProfilePictureWhereUniqueInput } from "../profilePicture/ProfilePictureWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobileNumber?: StringNullableFilter;
  otps?: OtpListRelationFilter;
  profilePicture?: ProfilePictureWhereUniqueInput;
  username?: StringFilter;
};
