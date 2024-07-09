import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostListRelationFilter } from "../blogPost/BlogPostListRelationFilter";

export type AuthorWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  blogPosts?: BlogPostListRelationFilter;
};
