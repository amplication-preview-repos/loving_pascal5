import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  mobileNumber?: SortOrder;
  password?: SortOrder;
  profilePictureId?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
