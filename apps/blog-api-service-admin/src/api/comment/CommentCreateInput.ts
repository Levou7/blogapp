import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  blogPost?: BlogPostWhereUniqueInput | null;
};
