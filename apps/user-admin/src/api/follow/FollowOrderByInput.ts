import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followedAt?: SortOrder;
  follower?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
