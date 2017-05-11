// in src/routeXstops.js
import React from 'react';
import { NumberInput, FunctionField, Responsive, SimpleList, Filter, List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import TimeInput from './../components/TimeInput';

const statuses = [{id:'disable', name:'disable'}, {id:'enable', name:'enable'}, {id:'canceled', name:'canceled'}];

const RouteStopFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Type" source="type" reference="type" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Route" source="route" reference="route" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Stop" source="stop" reference="stop" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const RouteStopList = (props) => (
    <List {...props} filters={<RouteStopFilter />}>
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
                    <TextField source="title" />
                    <FunctionField label="Route" render={record => record.route.name} />
                    <FunctionField label="Stop" render={record => record.type_obj.name} />
                    <FunctionField label="Type" render={record => record.type_obj.name} />
                    <TextField source="order" />
                    <TextField source="status" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const RouteStopTitle = ({ record }) => {
    return <span>Route Stops {record ? `"${record.title}"` : ''}</span>;
};

export const RouteStopEdit = (props) => (
    <Edit title={<RouteStopTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Route" source="route" reference="route" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Stop" source="stop" reference="stop" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TimeInput source="arrival" />
            <TextInput source="order" step={1} />
            <SelectInput source="status" choices={statuses} />
        </SimpleForm>
    </Edit>
);

export const RouteStopCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <ReferenceInput label="Route" source="route" reference="route" allowEmpty>
              <SelectInput optionText="name" />
          </ReferenceInput>
          <ReferenceInput label="Stop" source="stop" reference="stop" allowEmpty>
              <SelectInput optionText="name" />
          </ReferenceInput>
          <TimeInput source="arrival" options={{mode: 'landscape', format: "ampm"}} />
          <TextInput source="order" step={1} />
          <SelectInput source="status" choices={statuses} />
        </SimpleForm>
    </Create>
);

NumberInput
