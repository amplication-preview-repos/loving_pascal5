import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpCreateInput = {
  expirationTime?: Date | null;
  otpCode?: number | null;
  user?: UserWhereUniqueInput | null;
};
