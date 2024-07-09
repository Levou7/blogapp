import { InputJsonValue } from "../../types";
import { ReferralCodeWhereUniqueInput } from "../referralCode/ReferralCodeWhereUniqueInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  referredBy?: string | null;
  referralCode?: ReferralCodeWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
