import { Author } from "../author/Author";
import { Comment } from "../comment/Comment";

export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  publishedDate: Date | null;
  title: string | null;
  author?: Author | null;
  comments?: Array<Comment>;
};
