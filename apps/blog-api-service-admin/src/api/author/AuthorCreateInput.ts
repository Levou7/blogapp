import { BlogPostCreateNestedManyWithoutAuthorsInput } from "./BlogPostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  email?: string | null;
  name?: string | null;
  blogPosts?: BlogPostCreateNestedManyWithoutAuthorsInput;
};
