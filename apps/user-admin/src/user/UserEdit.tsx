import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OtpTitle } from "../otp/OtpTitle";
import { ProfilePictureTitle } from "../profilePicture/ProfilePictureTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="following" source="following" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="mobileNumber" source="mobileNumber" />
        <ReferenceArrayInput
          source="otps"
          reference="Otp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OtpTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <ReferenceInput
          source="profilePicture.id"
          reference="ProfilePicture"
          label="profilePicture"
        >
          <SelectInput optionText={ProfilePictureTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
