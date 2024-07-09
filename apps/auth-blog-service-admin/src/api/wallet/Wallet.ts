import { User } from "../user/User";

export type Wallet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  balance: number | null;
  user?: User | null;
};
