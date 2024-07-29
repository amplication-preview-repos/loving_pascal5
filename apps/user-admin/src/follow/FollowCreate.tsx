import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="followedAt" source="followedAt" />
        <TextInput label="follower" source="follower" />
        <TextInput label="following" source="following" />
      </SimpleForm>
    </Create>
  );
};
