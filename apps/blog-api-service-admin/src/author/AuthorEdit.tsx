import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BlogPostTitle } from "../blogPost/BlogPostTitle";

export const AuthorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="blogPosts"
          reference="BlogPost"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlogPostTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
