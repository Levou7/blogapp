import { TransactionUpdateManyWithoutItemsInput } from "./TransactionUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  name?: string | null;
  description?: string | null;
  transactions?: TransactionUpdateManyWithoutItemsInput;
  price?: number | null;
};
