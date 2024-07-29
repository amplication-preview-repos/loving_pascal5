import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { PROFILEPICTURE_TITLE_FIELD } from "../profilePicture/ProfilePictureTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="following" source="following" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="mobileNumber" source="mobileNumber" />
        <ReferenceField
          label="profilePicture"
          source="profilepicture.id"
          reference="ProfilePicture"
        >
          <TextField source={PROFILEPICTURE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Otp" target="userId" label="OTPS">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expirationTime" source="expirationTime" />
            <TextField label="ID" source="id" />
            <TextField label="otpCode" source="otpCode" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
