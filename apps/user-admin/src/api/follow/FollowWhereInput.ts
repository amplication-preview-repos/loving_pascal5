import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followedAt?: DateTimeNullableFilter;
  follower?: StringNullableFilter;
  following?: StringNullableFilter;
  id?: StringFilter;
};
