import { UserCreateNestedManyWithoutReferralCodesInput } from "./UserCreateNestedManyWithoutReferralCodesInput";

export type ReferralCodeCreateInput = {
  code?: string | null;
  expirationDate?: Date | null;
  users?: UserCreateNestedManyWithoutReferralCodesInput;
};
