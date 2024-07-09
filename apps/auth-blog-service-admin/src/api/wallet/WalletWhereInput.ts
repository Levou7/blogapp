import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  id?: StringFilter;
  balance?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
