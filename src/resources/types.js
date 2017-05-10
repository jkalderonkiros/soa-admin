// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, TextInput, Filter, Responsive, SimpleList, EditButton, DisabledInput, Create, Edit, SimpleForm } from 'admin-on-rest';

const TypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const TypeList = (props) => (
    <List title="All types" {...props} filters={<TypeFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.name}
                    tertiaryText={record => new Date(record.createdAt).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const TypeTitle = ({ record }) => {
    return <span>Type {record ? `"${record.name}"` : ''}</span>;
};

export const TypeEdit = (props) => (
    <Edit title={<TypeTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const TypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
