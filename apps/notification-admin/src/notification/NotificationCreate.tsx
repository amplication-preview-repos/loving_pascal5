import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isRead" source="isRead" />
        <TextInput label="message" multiline source="message" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
