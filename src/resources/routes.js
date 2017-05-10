// in src/posts.js
import React from 'react';
import { Responsive, SimpleList, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const statuses = [{id:'disable', name:'disable'}, {id:'enable', name:'enable'}, {id:'canceled', name:'canceled'}];

const RouteFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Type" source="type" reference="type" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const RouteList = (props) => (
    <List {...props} filters={<RouteFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <ReferenceField label="Type" source="type" reference="type">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="status" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const RouteTitle = ({ record }) => {
    return <span>Route {record ? `"${record.name}"` : ''}</span>;
};

export const RouteEdit = (props) => (
    <Edit title={<RouteTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <ReferenceInput label="Type" source="type" reference="type">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <SelectInput source="status" choices={statuses} />
        </SimpleForm>
    </Edit>
);

export const RouteCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Type" source="type" reference="type" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <SelectInput source="status" choices={statuses} />
        </SimpleForm>
    </Create>
);
