import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
};
