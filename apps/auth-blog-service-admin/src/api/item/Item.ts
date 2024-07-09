import { Transaction } from "../transaction/Transaction";

export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  transactions?: Array<Transaction>;
  price: number | null;
};
