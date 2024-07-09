import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
} from "react-admin";

import { ReferralCodeTitle } from "../referralCode/ReferralCodeTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { WalletTitle } from "../wallet/WalletTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="referredBy" source="referredBy" />
        <ReferenceInput
          source="referralCode.id"
          reference="ReferralCode"
          label="referralCode"
        >
          <SelectInput optionText={ReferralCodeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="wallets"
          reference="Wallet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WalletTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
