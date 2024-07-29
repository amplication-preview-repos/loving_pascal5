import { SortOrder } from "../../util/SortOrder";

export type OtpOrderByInput = {
  createdAt?: SortOrder;
  expirationTime?: SortOrder;
  id?: SortOrder;
  otpCode?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
