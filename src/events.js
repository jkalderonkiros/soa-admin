// in src/posts.js
import React from 'react';
import { Responsive, SimpleList, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const statuses = [{id:'pending', name:'pending'}, {id:'approved', name:'approved'}, {id:'denied', name:'denied'}];

const EventFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Type" source="type" reference="types" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const EventList = (props) => (
    <List {...props} filters={<EventFilter />}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => <EventTitle /> }
                    secondaryText={record => record.status }
                    tertiaryText={record => new Date(record.createdAt).toLocaleDateString()}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="Type" source="type" reference="type" >
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="content" />
                    <TextField source="status" />
                    <TextField label="created At" source="createdAt" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const EventTitle = ({ record }) => {
    return <span>Event {record && record.type_obj ? `"${record.type_obj.name}"` : 'no type'}</span>;
};

export const EventEdit = (props) => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Type" source="type" reference="type" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <SelectInput source="status" choices={statuses} />
            <LongTextInput source="content" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <ReferenceInput label="Type" source="type" reference="type" allowEmpty>
            <SelectInput optionText="name" />
          </ReferenceInput>
          <SelectInput source="status" choices={statuses} />
          <LongTextInput source="content" />
        </SimpleForm>
    </Create>
);
