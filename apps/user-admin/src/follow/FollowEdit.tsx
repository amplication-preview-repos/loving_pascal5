import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const FollowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="followedAt" source="followedAt" />
        <TextInput label="follower" source="follower" />
        <TextInput label="following" source="following" />
      </SimpleForm>
    </Edit>
  );
};
