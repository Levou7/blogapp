import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  typeField?: "Option1";
  item?: ItemWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
