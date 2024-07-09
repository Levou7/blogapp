import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ReferralCodeWhereInput = {
  id?: StringFilter;
  code?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  users?: UserListRelationFilter;
};
