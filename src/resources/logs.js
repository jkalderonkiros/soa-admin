// in src/logs.js
import React from 'react';
import { FunctionField, DateField, List, Datagrid, TextField, Filter, TextInput, ReferenceInput, SelectInput } from 'admin-on-rest';

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
            <FunctionField label="Type" render={record => record.type_obj.name} />
            <TextField source="status" />
            <DateField label="Created At" source="createdAt" showTime />
        </Datagrid>
    </List>
);
