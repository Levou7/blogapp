import { User } from "../user/User";

export type ReferralCode = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  code: string | null;
  expirationDate: Date | null;
  users?: Array<User>;
};
