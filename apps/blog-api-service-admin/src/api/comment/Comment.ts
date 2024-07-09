import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  publishedDate: Date | null;
  blogPost?: BlogPost | null;
};
