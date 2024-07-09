import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
};
