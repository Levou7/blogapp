import { Item } from "../item/Item";
import { User } from "../user/User";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  typeField?: "Option1" | null;
  item?: Item | null;
  user?: User | null;
};
