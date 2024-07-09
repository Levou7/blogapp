import { TransactionCreateNestedManyWithoutItemsInput } from "./TransactionCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  name?: string | null;
  description?: string | null;
  transactions?: TransactionCreateNestedManyWithoutItemsInput;
  price?: number | null;
};
