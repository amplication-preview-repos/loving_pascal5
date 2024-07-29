import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  message?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  user?: StringNullableFilter;
};
