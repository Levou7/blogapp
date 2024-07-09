import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  typeField?: "Option1" | null;
  item?: ItemWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
