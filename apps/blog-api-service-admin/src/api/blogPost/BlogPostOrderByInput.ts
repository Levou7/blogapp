import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  publishedDate?: SortOrder;
  title?: SortOrder;
  authorId?: SortOrder;
};
