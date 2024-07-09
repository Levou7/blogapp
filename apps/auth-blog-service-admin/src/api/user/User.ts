import { JsonValue } from "type-fest";
import { ReferralCode } from "../referralCode/ReferralCode";
import { Transaction } from "../transaction/Transaction";
import { Wallet } from "../wallet/Wallet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  referredBy: string | null;
  referralCode?: ReferralCode | null;
  transactions?: Array<Transaction>;
  wallets?: Array<Wallet>;
};
