// in src/users.js
import React from 'react';
import { ReferenceField, DateField, List, Datagrid, TextField, Filter, TextInput, ReferenceInput, SelectInput } from 'admin-on-rest';

const LogFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Type" source="type" reference="type" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const LogList = (props) => (
    <List title="All logs" {...props} filters={<LogFilter />}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField label="Type" source="type" reference="type" >
                <TextField source="name" />
            </ReferenceField>
            
            <DateField label="Created At" source="createdAt" showTime />
        </Datagrid>
    </List>
);
