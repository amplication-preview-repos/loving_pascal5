import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OtpUpdateInput = {
  expirationTime?: Date | null;
  otpCode?: number | null;
  user?: UserWhereUniqueInput | null;
};
