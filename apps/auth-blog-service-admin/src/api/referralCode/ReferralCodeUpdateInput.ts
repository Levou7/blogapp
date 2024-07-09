import { UserUpdateManyWithoutReferralCodesInput } from "./UserUpdateManyWithoutReferralCodesInput";

export type ReferralCodeUpdateInput = {
  code?: string | null;
  expirationDate?: Date | null;
  users?: UserUpdateManyWithoutReferralCodesInput;
};
