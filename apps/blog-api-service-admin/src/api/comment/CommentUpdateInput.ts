import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  blogPost?: BlogPostWhereUniqueInput | null;
};
