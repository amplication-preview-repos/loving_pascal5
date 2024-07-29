import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isRead" source="isRead" />
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
