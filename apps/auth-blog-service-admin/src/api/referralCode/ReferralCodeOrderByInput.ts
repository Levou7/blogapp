import { SortOrder } from "../../util/SortOrder";

export type ReferralCodeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  code?: SortOrder;
  expirationDate?: SortOrder;
};
