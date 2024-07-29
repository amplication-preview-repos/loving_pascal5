import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpWhereInput = {
  expirationTime?: DateTimeNullableFilter;
  id?: StringFilter;
  otpCode?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
