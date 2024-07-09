import { InputJsonValue } from "../../types";
import { ReferralCodeWhereUniqueInput } from "../referralCode/ReferralCodeWhereUniqueInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  referredBy?: string | null;
  referralCode?: ReferralCodeWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
