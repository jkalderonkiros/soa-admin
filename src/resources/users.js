// in src/users.js
import React from 'react';
import { DateField, Edit, Create, SimpleForm, DisabledInput, List, Datagrid, EmailField, TextField, Filter, TextInput } from 'admin-on-rest';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List title="All users" {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="username" />
            <EmailField source="email" />
            <DateField label="Created At" source="createdAt" showTime />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    let name = record && record.first_name ? `"${record.first_name} ${record.last_name}"` : record.username;
    return <span>User {name}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="first_name" />
          <TextInput source="last_name" />
          <TextInput source="username" />
          <TextInput source="email" />
        </SimpleForm>
    </Create>
);
