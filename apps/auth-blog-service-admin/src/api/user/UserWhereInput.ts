import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReferralCodeWhereUniqueInput } from "../referralCode/ReferralCodeWhereUniqueInput";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  referredBy?: StringNullableFilter;
  referralCode?: ReferralCodeWhereUniqueInput;
  transactions?: TransactionListRelationFilter;
  wallets?: WalletListRelationFilter;
};
