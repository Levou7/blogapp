import { BlogPost } from "../blogPost/BlogPost";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  blogPosts?: Array<BlogPost>;
};
