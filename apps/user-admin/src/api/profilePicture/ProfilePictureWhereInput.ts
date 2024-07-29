import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProfilePictureWhereInput = {
  id?: StringFilter;
  imageUrl?: JsonFilter;
  uploadedAt?: DateTimeNullableFilter;
  users?: UserListRelationFilter;
};
