import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  email?: string | null;
  name?: string | null;
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
};
