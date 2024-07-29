import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProfilePictureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProfilePictures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
      </Datagrid>
    </List>
  );
};
