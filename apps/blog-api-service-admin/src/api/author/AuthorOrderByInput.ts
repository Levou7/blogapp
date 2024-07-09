import { SortOrder } from "../../util/SortOrder";

export type AuthorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
};
