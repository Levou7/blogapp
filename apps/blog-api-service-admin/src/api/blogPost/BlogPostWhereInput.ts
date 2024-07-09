import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type BlogPostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  author?: AuthorWhereUniqueInput;
  comments?: CommentListRelationFilter;
};
